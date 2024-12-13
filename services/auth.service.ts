import { api } from "@/api";
import useAuthStore from "@/store/authStore";
import { LoginUserPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";

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
