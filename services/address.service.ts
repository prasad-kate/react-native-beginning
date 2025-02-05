import { api } from "@/api";
import { CreateAddressPayload } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useCreateNewAddress = () => {
  const { mutate } = useMutation({
    mutationFn: (payload: CreateAddressPayload) =>
      api.post("/address", payload),
  });

  return {
    createAddress: mutate,
  };
};
