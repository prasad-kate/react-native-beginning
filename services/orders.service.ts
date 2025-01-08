import { api } from "@/api";
import useCartStore from "@/store/cartStore";
import { OrderPayload, OrderStatus } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export const useGetOrders = ({
  order_status,
}: {
  order_status: OrderStatus;
}) => {
  const query = `order_status=${order_status}`;
  const url = order_status ? `orders?${query}` : "orders";
  const { data } = useQuery({
    queryKey: ["orders", order_status],
    queryFn: () => api.get(url),
  });
  return {
    orders: data?.data?.orders || [],
  };
};

export const useSendOrder = () => {
  const router = useRouter();
  const { resetCartItems } = useCartStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: OrderPayload) => api.post("/orders/create", payload),
    onSuccess: (res) => {
      Toast.show({
        type: "success",
        text1: res.data.message,
        visibilityTime: 3000,
      });

      resetCartItems();

      router.push("/success");
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
    sendOrder: mutate,
    isSendingOrder: isPending,
  };
};
