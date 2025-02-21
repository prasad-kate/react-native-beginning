import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { CreateAddressPayload, UpdateAddressStatusPayload } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

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

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (address_id: number) =>
      api.delete("address/delete", {
        data: { address_id: "" },
      }),
    onSuccess: (res) => {
      Toast.show({
        type: "success",
        text1: res.data.message,
        visibilityTime: 3000,
      });
      queryClient.invalidateQueries({
        queryKey: ["addresses"],
      });
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
    deleteAddress: mutate,
  };
};
