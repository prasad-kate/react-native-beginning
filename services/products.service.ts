import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("products"),
  });

  return {
    productsList: data?.data,
  };
};
