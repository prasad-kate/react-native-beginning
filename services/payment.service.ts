import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { AddNewCardPayload } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export const useGetCardList = () => {
  const { userData } = useUserStore();
  const { data } = useQuery({
    queryKey: ["cards"],
    queryFn: () => api.get(`cards/${userData?.user_id}`),
  });

  return {
    cards: data?.data || [],
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
