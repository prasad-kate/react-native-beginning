import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { CreateAddressPayload, UpdateAddressStatusPayload } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const useCreateNewAddress = () => {
  const { userData } = useUserStore();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (payload: CreateAddressPayload) =>
      api.post(`/address/${userData?.user_id}`, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["addresses"],
      });
      router.back();
    },
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
