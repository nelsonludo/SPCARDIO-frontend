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

const API_URL = "/api/auth/v1";

export const useSignin = () => {
  const [loading, setLoading] = useState(false);

  const { axios } = useAxios();
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const signIn = async (userFormData: LoginFormType, urlParam: string) => {
    try {
      setLoading(true);
      const { data } = await axios.post<any>(`${API_URL}/signin`, {
        ...userFormData,
      });

      // if (
      //   data.code === SUCCESS_CODE.SUCCESS &&
      //   data.data.accessToken &&
      //   data.data.refreshToken
      // ) {
      const tokenHelper = new TokenHelper();
      tokenHelper.setTokens(data.data.accessToken, data.data.refreshToken);
      const userState = { ...userFormData, ...data.data };
      userState.refreshToken = undefined;
      userState.accessToken = undefined;
      login(userState);
      navigate(urlParam);
      // } else {
      //   throw new Error();
      // }
    } catch (err) {
      const error = err as AxiosError<any>;
      // const code = error.response?.data.code;

      console.log(error);

      // switch (code) {
      //   case CODES.UNABLE_TO_LOGIN:
      //     failedToast("Unable to login");
      //     break;
      //   case CODES.UNEXPECTED_ERROR:
      //     failedToast("Unexpected error occured");
      //     break;
      //   default:
      //     failedToast("Something went wrong");
      //     break;
      // }
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
    baseURL: "http://localhost:3000/",
  });

  const tokenHelper = new TokenHelper();
  const { refreshToken: token } = tokenHelper.getTokens();
  const { login } = useAuthStore();

  const refreshToken = async () => {
    try {
      const { data } = await axios.post<any>(
        `${API_URL}/token`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // if (
      //   data.code === SUCCESS_CODE.SUCCESS &&
      //   data.data.accessToken &&
      //   data.data.refreshToken
      // ) {
      const tokenHelper = new TokenHelper();
      tokenHelper.setTokens(data.data.accessToken, data.data.refreshToken);
      const userState = { ...data.data };
      userState.refreshToken = undefined;
      userState.accessToken = undefined;
      login(userState);

      return data;
      // } else {
      //   throw new Error();
      // }
    } catch (err) {
      const error = err as AxiosError<any>;
      console.log(error);

      failedToast("Your session has expired, login to continue");

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
