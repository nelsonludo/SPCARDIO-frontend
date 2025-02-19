import { useState } from "react";
import { AxiosError } from "axios";
import useAxios from "../hooks/useAxios";
import axiosMain from "axios";
import { failedToast } from "../utils/toasts";

export const useGetEnseignants = () => {
  const [loading, setLoading] = useState(false);

  const getEnseignants = async () => {};

  return { getEnseignants };
};
