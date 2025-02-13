import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { AddNewCardPayload } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

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
  const { mutate } = useMutation({
    mutationFn: (paylaod: AddNewCardPayload) =>
      api.post(`cards/${userId}`, {
        ...paylaod,
        userId,
      }),
  });

  return {
    addCard: mutate,
  };
};
