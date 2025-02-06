import { api } from "@/api";
import useCartStore from "@/store/cartStore";
import useProductStore from "@/store/productStore";
import { useQueries, useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get("products"),
  });

  return {
    productsList: data?.data,
    isGettingProducts: isLoading,
  };
};

export const useGetProductFromProductId = ({
  productId,
}: {
  productId: number;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["product-details", productId],
    queryFn: () => api.get(`products/${productId}`),
    enabled: !!productId,
  });

  return {
    productDetails: data?.data || [],
    isGettingProductDetails: isLoading,
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

  const isAnyPending = data
    ?.map((cartItemData) => {
      return cartItemData?.isPending || cartItemData?.isFetching;
    })
    ?.some((i) => i);

  return {
    cartItemProductDetails,
    isAnyPending,
  };
};

export const useGetProductsCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products-category"],
    queryFn: () => api.get("products/categories"),
  });

  return {
    productCategories: data?.data || [],
    isGettingCategories: isLoading,
  };
};

export const useGetFavrouriteProductsDetails = () => {
  const { favouriteProducts } = useProductStore();

  const data = useQueries({
    queries: favouriteProducts?.map((id) => {
      return {
        queryKey: [`favourite-product-${id}`],
        queryFn: () => api.get(`products/${id}`),
      };
    }),
  });

  const favouriteProductDetails = data?.map((favouriteProductData) => {
    return favouriteProductData?.data?.data || null;
  });

  const isAnyPending = data
    ?.map((favouriteProductData) => {
      return (
        favouriteProductData?.isPending || favouriteProductData?.isFetching
      );
    })
    ?.some((i) => i);

  return {
    favouriteProductDetails,
    isAnyPending,
  };
};
