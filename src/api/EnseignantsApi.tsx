import { useState } from "react";
import { AxiosError } from "axios";
import useAxios from "../hooks/useAxios";
import { failedToast } from "../utils/toasts";
import { useEnseignantsStore } from "../stores/enseignantsStore";

export const useGetEnseignants = () => {
  const [loading, setLoading] = useState(false);
  const { axios } = useAxios();
  const { setEnseignants } = useEnseignantsStore();

  const getEnseignants = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<any>(
        `/enseignants/?pagination[pageSize]=100`
      );

      if (data) {
        setEnseignants(data.data);
      } else {
        throw new Error("something went wrong");
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      console.log(
        "Full error response:",
        error.response?.data || error.message
      );
      failedToast(error?.response?.data?.error?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getEnseignants };
};
