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

export const useGetProductFromProductId = ({
  productId,
}: {
  productId: number;
}) => {
  const { data } = useQuery({
    queryKey: ["product-details", productId],
    queryFn: () => api.get(`products/${productId}`),
    enabled: !!productId,
  });

  return {
    productDetails: data?.data || [],
  };
};
