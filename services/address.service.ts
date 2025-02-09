import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { CreateAddressPayload, UpdateAddressStatusPayload } from "@/types";
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

  const { data, isLoading } = useQuery({
    queryKey: ["addresses"],
    queryFn: () => api.get(`address/${userData?.user_id}`),
    refetchOnMount: true,
  });

  return {
    userAddresses: data?.data || [],
    isGettingUserAddresses: isLoading,
  };
};

export const useUpdateAddressStatus = () => {
  const { mutate } = useMutation({
    mutationFn: (payload: UpdateAddressStatusPayload) =>
      api.patch("address/update_status", payload),
  });

  return { updateAddressStatus: mutate };
};
