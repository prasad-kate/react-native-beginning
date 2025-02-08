import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { CreateAddressPayload } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCreateNewAddress = () => {
  const { mutate } = useMutation({
    mutationFn: (payload: CreateAddressPayload) =>
      api.post("/address", payload),
  });

  return {
    createAddress: mutate,
  };
};

export const useGetUserAdresses = () => {
  const { userData } = useUserStore();

  const { data } = useQuery({
    queryKey: ["addresses"],
    queryFn: () => api.get(`address/${userData?.user_id}`),
  });

  return {
    userAddresses: data?.data || [],
  };
};
