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

  const signIn = async (userFormData: LoginFormType) => {
    try {
      setLoading(true);
      const { data } = await axios.post<any>(`/auth/local`, {
        ...userFormData,
      });

      // Ensure tokens exist before proceeding
      if (!data?.jwt) {
        throw new Error("Missing tokens in the API response");
      }

      if (data?.jwt) {
        const tokenHelper = new TokenHelper();
        tokenHelper.setToken(data.jwt); // ✅ Store JWT
      } else {
        throw new Error("Login failed: Invalid response from server");
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

  return { loading, signIn };
};

export const useLogout = () => {
  const navigate = useNavigate();
  const { unsetUser } = useAuthStore();

  const logOutUser = () => {
    const tokenHelper = new TokenHelper();
    tokenHelper.deleteToken();
    unsetUser();
    navigate("/");
  };

  return { logOutUser };
};

export const useGetProfile = () => {
  const [loading, setLoading] = useState(false);
  const { axios } = useAxios();
  const { setUser } = useAuthStore();

  const getProfile = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get<any>(`users/me?populate=role`);

      if (data?.id) {
        // Update Zustand store with user data (excluding tokens)
        const userState = { ...data };
        delete userState.jwt;

        setUser({
          id: userState.id,
          name: userState.username,
          email: userState.email,
          role: userState.role.name,
          image: userState.iamge,
        });
      } else {
        throw new Error("Login failed: Invalid response from server");
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

  return { loading, getProfile };
};

export const useRefreshToken = () => {
  const axios = axiosMain.create({
    baseURL: "https://spb.crest.cm", // api  https://spb.crest.cm http://localhost:1337
  });

  const tokenHelper = new TokenHelper();
  const token = tokenHelper.getToken(); // ✅ Fetch stored JWT
  const { setUser } = useAuthStore();

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

      if (data?.jwt) {
        const tokenHelper = new TokenHelper();
        tokenHelper.setToken(data.jwt); // ✅ Store new JWT
        const userState = { ...data };
        delete userState.jwt;

        setUser(userState);
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
        setUser(null);
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
