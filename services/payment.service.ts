import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { AddNewCardPayload, UpdateCardStatusPayload } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export const useGetCardList = () => {
  const { userData } = useUserStore();
  const { data, isLoading } = useQuery({
    queryKey: ["cards"],
    queryFn: () => api.get(`cards/${userData?.user_id}`),
  });

  return {
    cards: data?.data || [],
    isGettingCardDetails: isLoading,
  };
};

export const useAddCard = () => {
  const { userData } = useUserStore();

  const userId = userData?.user_id;
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (paylaod: AddNewCardPayload) =>
      api.post("cards/create", {
        ...paylaod,
        userId,
      }),
    onSuccess: (res) => {
      Toast.show({
        type: "success",
        text1: res?.data?.message,
      });

      queryClient.invalidateQueries({ queryKey: ["cards"] });

      setTimeout(() => {
        router.back();
      }, 2000);
    },

    onError: (err) => {
      Toast.show({
        type: "error",
        text1: err?.message,
      });
    },
  });

  return {
    addCard: mutate,
    isAddingCard: isPending,
  };
};

export const useUpdateCardStatus = () => {
  const { mutate } = useMutation({
    mutationFn: (payload: UpdateCardStatusPayload) =>
      api.patch("cards/update_status", payload),
  });

  return {
    updateCardStatus: mutate,
  };
};
