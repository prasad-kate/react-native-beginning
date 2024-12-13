import { api } from "@/api";
import useAuthStore from "@/store/authStore";
import { LoginUserPayload, RegisterUserPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
  const { setAuthToken } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: RegisterUserPayload) =>
      api.post("auth/user", payload),
    onSuccess: (res) => {
      const token = res?.data?.token;

      if (token) {
        setAuthToken(token);
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
  const { mutate, isPending } = useMutation({
    mutationFn: (payload: LoginUserPayload) => api.post("auth/login", payload),
    onSuccess: (res) => {
      const token = res?.data?.token;

      if (token) {
        setAuthToken(token);
      }
    },
  });

  return {
    login: mutate,
    isLogingIn: isPending,
  };
};
