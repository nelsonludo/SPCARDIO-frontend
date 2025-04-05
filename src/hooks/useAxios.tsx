import axiosMain, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { useRefreshToken } from "../api/AuthApi";
import { TokenHelper } from "../utils/tokensHelper";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const useAxios = () => {
  const { refreshToken } = useRefreshToken();

  const axios = axiosMain.create({
    baseURL: "https://spb.crest.cm/api", // 🌐 API base URL development http://localhost:1337/api production https://spb.crest.cm/api
    headers: {
      "Content-Type": "application/json", // Explicitly set Content-Type
    },
  });

  // 🔹 Attach JWT token to requests
  axios.interceptors.request.use(
    (config) => {
      const tokenHelper = new TokenHelper();

      const jwt = tokenHelper.getToken();

      // Skip adding Authorization header for login requests
      if (config.url === "/auth/local") {
        return config; // Don't modify the request, just return it
      }

      if (jwt && !config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${jwt}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // 🔹 Handle expired tokens and refresh
  axios.interceptors.response.use(
    (response: AxiosResponse) => response, // ✅ Return response normally
    async (error: AxiosError<any>) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const response = await refreshToken();

        if (response?.data?.jwt) {
          const tokenHelper = new TokenHelper();

          tokenHelper.setToken(response.data.jwt); // 🔄 Update token
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${response.data.jwt}`,
          };
          return axios(originalRequest); // 🔄 Retry the failed request
        }
      }

      return Promise.reject(error);
    }
  );

  return { axios };
};

export default useAxios;
