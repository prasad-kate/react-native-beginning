import { api } from "@/api";
import useUserStore from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";

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
