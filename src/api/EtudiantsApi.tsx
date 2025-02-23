import { useState } from "react";
import { AxiosError } from "axios";
import useAxios from "../hooks/useAxios";
import { failedToast } from "../utils/toasts";
import { useEtudiantsStore } from "../stores/etudiantsStore";

export const useGetEtudiants = () => {
  const [loading, setLoading] = useState(false);
  const { axios } = useAxios();
  const { setEtudiants } = useEtudiantsStore();

  const getEtudiants = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<any>(
        `/etudiants/?pagination[pageSize]=100`
      );

      if (data) {
        setEtudiants(data.data);
      } else {
        throw new Error("something went wrong");
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

  return { loading, getEtudiants };
};
