import { useState } from "react";
import { AxiosError } from "axios";
import useAxios from "../hooks/useAxios";
import { failedToast } from "../utils/toasts";
import { useEnseignementsStore } from "../stores/enseignementsStore";
import { EnseignementWeeklyType } from "../types/enseignements";
import { ActivitePedagogique } from "../types/entities/activitePedagogique";

export const useGetEnseignements = () => {
  const [loading, setLoading] = useState(false);
  const { axios } = useAxios();
  const { setEnseignements } = useEnseignementsStore();

  function restructureAPData(
    aps: ActivitePedagogique[]
  ): EnseignementWeeklyType {
    const restructured: EnseignementWeeklyType = {};

    aps.forEach((ap) => {
      const week = ap.horaires; // Assuming horaires represents the week
      if (!restructured[week]) {
        restructured[week] = {
          niveau: "Programme 1", // You might need to fetch this from somewhere based on the ap.code or other related data
          enseignements: [],
        };
      }
      restructured[week].enseignements.push(ap);
    });

    return restructured;
  }

  const getEnseignements = async () => {
    function restructureAPData(
      aps: ActivitePedagogique[]
    ): EnseignementWeeklyType {
      const restructured: EnseignementWeeklyType = {};

      aps.forEach((ap) => {
        // Get the formatted week range (e.g., "26-30 Nov 2024")
        const week = getWeekRange(ap.date);
        const niveau =
          ap.unite_d_enseignement?.programme?.title || "Unknown Program";

        if (!restructured[week]) {
          restructured[week] = {
            niveau,
            enseignements: [],
          };
        }

        restructured[week].enseignements.push(ap);
      });

      return restructured;
    }

    /**
     * Get the formatted week range as "DD-DD MMM YYYY" (e.g., "26-30 Nov 2024")
     */
    function getWeekRange(dateStr: string): string {
      const date = new Date(dateStr);
      const year = date.getFullYear();

      // Get the Monday and Friday of the given date's week
      const { monday, friday } = getMondayAndFriday(date);

      // Format days and month
      const dayStart = monday.getDate();
      const dayEnd = friday.getDate();
      const month = monday.toLocaleString("en-US", { month: "short" });

      return `${dayStart}-${dayEnd} ${month} ${year}`;
    }

    /**
     * Get the Monday and Friday of the week for a given date
     */
    function getMondayAndFriday(date: Date): { monday: Date; friday: Date } {
      const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const monday = new Date(date);
      const friday = new Date(date);

      // Adjust to Monday (if the date is already Monday, no change)
      monday.setDate(date.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

      // Adjust to Friday
      friday.setDate(monday.getDate() + 4);

      return { monday, friday };
    }

    try {
      setLoading(true);
      const { data } = await axios.get<any>(
        `/activite-pedagogiques?populate[unite_d_enseignement][populate]=programme&populate=type_d_activite_pedagogique`
      );

      if (data && data.data) {
        const transformedData = restructureAPData(data.data);

        setEnseignements(transformedData);
      } else {
        throw new Error("No data found in the response");
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      console.log(
        "Full error response:",
        error.response?.data || error.message
      );
      failedToast(error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getEnseignements };
};
