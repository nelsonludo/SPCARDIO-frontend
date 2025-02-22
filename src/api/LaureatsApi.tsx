import { useState } from "react";
import { AxiosError } from "axios";
import useAxios from "../hooks/useAxios";
import { failedToast } from "../utils/toasts";
import { useLaureatsStore } from "../stores/laureatsStore";

export const useGetLaureats = () => {
  const [loading, setLoading] = useState(false);
  const { axios } = useAxios();
  const { setLaureats } = useLaureatsStore();

  const getLaureats = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<any>(`/laureats/`);

      if (data) {
        setLaureats(data);
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

  return { loading, getLaureats };
};
