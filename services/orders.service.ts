import { api } from "@/api";
import { SendOrderPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const useSendOrder = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: (payload: SendOrderPayload) =>
      api.post("/orders/create", payload),
    onSuccess: () => {
      router.push("/checkOut");
    },
  });
  return {
    sendOrder: mutate,
  };
};
