import { api } from "@/api";
import useCartStore from "@/store/cartStore";
import { useQueries, useQuery } from "@tanstack/react-query";

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

export const useGetCartProductDetails = () => {
  const { cartItems } = useCartStore();

  const data = useQueries({
    queries: cartItems?.map((item) => {
      return {
        queryKey: [`product-${item?.productId}`],
        queryFn: () => api.get(`products/${item?.productId}`),
      };
    }),
  });

  const cartItemProductDetails = data?.map((cartItemData) => {
    return cartItemData?.data?.data || null;
  });

  return {
    cartItemProductDetails,
  };
};

export const useGetProductsCategories = () => {
  const { data } = useQuery({
    queryKey: ["products-category"],
    queryFn: () => api.get("products/categories"),
  });

  return {
    productCategories: data?.data || [],
  };
};
