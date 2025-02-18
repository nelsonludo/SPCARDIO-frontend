import { useState } from "react";
import { LoginFormType } from "../types/forms";
// import { failedToast, successToast } from "../utils/toasts";
// import { ErrorResponseType } from "../types/response/error-response-type";
// import {
//   SimpleSuccessResponseType,
//   SingleItemResponseType,
// } from "../types/response/success-response-types";
// import { User } from "../types/entities/user";
import { AxiosError } from "axios";
// import { CODES, SUCCESS_CODE } from "../types/enums/error-codes";
// import { setLoadingUser, setUser } from "../store/auth.slice";
import useAxios from "../hooks/useAxios";
import axiosMain from "axios";
import { useNavigate } from "react-router-dom";
import { TokenHelper } from "../utils/tokensHelper";
import { useAuthStore } from "../stores/authStore";
import { failedToast } from "../utils/toasts";

export const useSignin = () => {
  const [loading, setLoading] = useState(false);

  const { axios } = useAxios();
  const navigate = useNavigate();
  const { login } = useAuthStore(); //Zustand login function

  const signIn = async (userFormData: LoginFormType, urlParam: string) => {
    try {
      setLoading(true);
      const { data } = await axios.post<any>(`/auth/local`, {
        ...userFormData,
      });

      // Ensure tokens exist before proceeding
      if (!data.data?.jwt) {
        throw new Error("Missing tokens in the API response");
      }

      if (data?.data?.jwt) {
        const tokenHelper = new TokenHelper();
        tokenHelper.setToken(data.data.jwt); // ✅ Store JWT

        // Update Zustand store with user data (excluding tokens)
        const userState = { ...userFormData, ...data.data };
        delete userState.jwt;

        login(userState);
        navigate(urlParam);
      } else {
        throw new Error("Login failed: Invalid response from server");
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      // const code = error.response?.data.code;

      console.log(error);
      failedToast(error?.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signIn };
};

// export const useLogout = () => {
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { axios } = useAxios();

//   const logout = async () => {
//     try {
//       dispatch(setLoadingUser(true));
//       const { data } = await axios.post<SimpleSuccessResponseType>(
//         `${API_URL}/logout`
//       );

//       console.log("data", data);

//       if (data.code === SUCCESS_CODE.SUCCESS) {
//         const tokenHelper = new TokenHelper();
//         tokenHelper.deleteTokens();
//         dispatch(setUser(null));
//         navigate("/signin");
//       }
//     } catch (err) {
//       const error = err as AxiosError<ErrorResponseType>;
//       console.log(error);

//       const code = error.response?.data.code;
//       switch (code) {
//         case CODES.UNEXPECTED_ERROR:
//           failedToast("Unable to logout");
//           break;
//         default:
//           failedToast("Something went wrong");
//           break;
//       }
//     } finally {
//       dispatch(setLoadingUser(false));
//       setLoading(false);
//     }
//   };

//   return { loading, logout };
// };

// export const useGetProfile = () => {
//   const dispatch = useDispatch();
//   const { axios } = useAxios();

//   const getProfile = async () => {
//     dispatch(setLoadingUser(true));
//     try {
//       const { data } = await axios.get<SingleItemResponseType<User>>(
//         `${API_URL}/profile`
//       );
//       if (data.code === SUCCESS_CODE.SUCCESS) {
//         dispatch(setUser(data.data));
//       }
//     } catch (err) {
//       const error = err as AxiosError<ErrorResponseType>;
//       console.log(error);
//     } finally {
//       dispatch(setLoadingUser(false));
//     }
//   };

//   return { getProfile };
// };

export const useRefreshToken = () => {
  const axios = axiosMain.create({
    baseURL: "http://localhost:1337/",
  });

  const tokenHelper = new TokenHelper();
  const token = tokenHelper.getToken(); // ✅ Fetch stored JWT
  const { login } = useAuthStore();

  const refreshToken = async () => {
    try {
      const { data } = await axios.post<any>(
        `/api/auth/refresh`, // ✅ Adjust endpoint if needed
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data?.data?.jwt) {
        const tokenHelper = new TokenHelper();
        tokenHelper.setToken(data.data.jwt); // ✅ Store new JWT
        const userState = { ...data.data };
        delete userState.jwt;

        login(userState);
        return data;
      } else {
        throw new Error("Token refresh failed: Invalid response from server");
      }
    } catch (err) {
      const error = err as AxiosError<any>;
      console.log(error);

      failedToast("Your session has expired, login to continue");
      tokenHelper.deleteToken(); // ✅ Remove old JWT

      setTimeout(() => {
        login(null);
      }, 4000);
    }
  };

  return { refreshToken };
};

// export const useForgotPassword = () => {
//   const [loading, setLoading] = useState(false);
//   const { axios } = useAxios();

//   const forgotPassword = async (userFormData: ForgotPasswordFormType) => {
//     try {
//       setLoading(true);

//       const { data } = await axios.post<SimpleSuccessResponseType>(
//         `${API_URL}/forgot-password`,
//         {
//           ...userFormData,
//         }
//       );

//       if (data.code === SUCCESS_CODE.SUCCESS) {
//         successToast("Check your email to reset your password");
//       } else {
//         throw new Error();
//       }
//     } catch (err) {
//       const error = err as AxiosError<ErrorResponseType>;
//       const code = error.response?.data.code;

//       console.log(error);

//       switch (code) {
//         case CODES.NOT_FOUND:
//           failedToast("Account does not exist");
//           break;
//         case CODES.VALIDATION_REQUEST_ERROR:
//           failedToast("Make sure you enter the correct info");
//           break;
//         case CODES.ACCOUNT_NOT_ACTIVATED:
//           failedToast("First check your email to activate your account");
//           break;
//         case CODES.UNEXPECTED_ERROR:
//           failedToast("Unexpected error occured");
//           break;
//         default:
//           failedToast("Something went wrong");
//           break;
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { loading, forgotPassword };
// };

// export const useResetPassword = () => {
//   const [loading, setLoading] = useState(false);
//   const { axios } = useAxios();
//   const navigate = useNavigate();

//   const resetPassword = async (
//     userFormData: ResetPasswordFormType,
//     code: string
//   ) => {
//     try {
//       setLoading(true);

//       const { data } = await axios.patch<SimpleSuccessResponseType>(
//         `${API_URL}/reset-password`,
//         {
//           code,
//           password: userFormData.password,
//         }
//       );

//       if (data.code === SUCCESS_CODE.SUCCESS) {
//         successToast("Password has been reset successfully");
//         navigate("/signin");
//       } else {
//         throw new Error();
//       }
//     } catch (err) {
//       const error = err as AxiosError<ErrorResponseType>;
//       const code = error.response?.data.code;

//       console.log(error);

//       switch (code) {
//         case CODES.NOT_FOUND:
//           failedToast("Account does not exist");
//           break;
//         case CODES.VALIDATION_REQUEST_ERROR:
//           failedToast("Make sure you enter the correct info");
//           break;
//         case CODES.ACCOUNT_NOT_ACTIVATED:
//           failedToast("First check your email to activate your account");
//           break;
//         case CODES.UNEXPECTED_ERROR:
//           failedToast("Unexpected error occured");
//           break;
//         default:
//           failedToast("Something went wrong");
//           break;
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { loading, resetPassword };
// };
