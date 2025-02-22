import { api } from "@/api";
import useAuthStore from "@/store/authStore";
import useUserStore from "@/store/userStore";
import { LoginUserPayload, RegisterUserPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import Toast from "react-native-toast-message";

export const useRegisterUser = () => {
  const { setAuthToken } = useAuthStore();
  const { setUserData } = useUserStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: RegisterUserPayload) =>
      api.post("auth/user", payload),
    onSuccess: (res) => {
      const token = res?.data?.token;

      if (token) {
        setAuthToken(token);
        setUserData(res?.data?.userData);
      }
    },
  });

  return {
    registerUser: mutate,
    isRegisteringUser: isPending,
  };
};

export const useLogin = () => {
  const { setAuthToken } = useAuthStore();
  const { setUserData } = useUserStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: LoginUserPayload) => api.post("auth/login", payload),
    onSuccess: (res) => {
      const token = res?.data?.token;

      if (token) {
        setAuthToken(token);
        setUserData(res?.data?.userData);
      }
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: isAxiosError(error)
          ? error?.response?.data?.message
          : "Something went wrong. Please try again",
        visibilityTime: 3000,
      });
    },
  });

  return {
    login: mutate,
    isLogingIn: isPending,
  };
};
