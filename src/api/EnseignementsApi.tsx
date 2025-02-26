import { useState } from "react";
import { AxiosError } from "axios";
import useAxios from "../hooks/useAxios";
import { failedToast } from "../utils/toasts";
import { useEnseignementsStore } from "../stores/enseignementsStore";
import { Enseignement } from "../types/entities/enseignements";

export const useGetEnseignements = () => {
  const [loading, setLoading] = useState(false);
  const { axios } = useAxios();
  const { setEnseignements } = useEnseignementsStore();

  const getEnseignements = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<any>(
        `/weekly-enseignements?populate[enseignements][populate][0]=residents&populate[enseignements][populate][1]=enseignants`
      );

      if (data && data.data) {
        const transformedData = data.data.reduce(
          (
            acc: {
              [week: string]: { niveau: string; enseignements: Enseignement[] };
            },
            item: any
          ) => {
            const week = item.week; // Access week directly

            // Check if enseignements data exists
            if (!item.enseignements) {
              console.warn("No enseignements data for week:", week);
              return acc; // Skip this item
            }

            const enseignements = item.enseignements.map(
              (enseignement: any) => ({
                uniteEnseignement: enseignement.uniteEnseignement,
                intitule: enseignement.intitule,
                date: enseignement.date,
                horaires: enseignement.horaires,
                residents: enseignement.residents.map(
                  (resident: any) => resident.name
                ),
                enseignants: enseignement.enseignants.map(
                  (enseignant: any) => enseignant.name
                ),
                observation: enseignement.observation,
              })
            );

            acc[week] = { niveau: item.niveau, enseignements: enseignements };
            return acc;
          },
          {}
        );

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
