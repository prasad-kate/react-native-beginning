import { OrderPayload } from "@/types";
import { zustandStorage } from "@/utils";
import Toast from "react-native-toast-message";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  productId: number;
  productCount: number;
  productName: string;
};

interface CartState {
  cartItems: Product[];
  order: OrderPayload | null;
  addCartItem: (productData: Product) => void;
  resetCartItems: () => void;
  editCartItemCount: (productData: Partial<Product>) => void;
  removeCartItem: (productId: number) => void;
  setOrder: (orderDetails: OrderPayload) => void;
  addMultipleCartItems: (productsArray: Product[]) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      order: null,
      addCartItem: (productData) => {
        const { cartItems } = get();

        const productExistsInCart = cartItems?.some(
          (item) => item.productId === productData.productId
        );

        if (!productExistsInCart) {
          set({
            cartItems: [...cartItems, productData],
          });

          Toast.hide();
          setTimeout(() => {
            Toast.show({
              type: "success",
              text1: `${productData.productName} added to the cart`,
            });
          }, 50);
        }
      },
      resetCartItems: () =>
        set(() => ({
          cartItems: [],
        })),
      editCartItemCount: (productData) => {
        set((state) => {
          const updatedCartItems = state.cartItems?.map((item) => {
            return item?.productId === productData?.productId
              ? {
                  ...item,
                  ...productData,
                }
              : item;
          });

          return {
            cartItems: updatedCartItems,
          };
        });
      },
      removeCartItem: (productId) => {
        set((state) => {
          const updatedCartItems = state.cartItems?.filter(
            (item) => item.productId !== productId
          );
          return { cartItems: updatedCartItems };
        });
      },
      setOrder: (orderDetails) =>
        set(() => ({
          order: orderDetails,
        })),
      addMultipleCartItems: (productsArray) => {
        set((state) => {
          const cartItems = state.cartItems;
          const filteredProductsArray = productsArray?.filter((productData) => {
            return !cartItems?.some(
              (cartItemDetail) =>
                cartItemDetail.productId === productData.productId
            );
          });

          if (filteredProductsArray?.length) {
            Toast.show({
              type: "success",
              text1: `${filteredProductsArray?.length} items added to the cart`,
            });
          }

          const updatedCartItems = [...cartItems, ...filteredProductsArray];

          return { cartItems: updatedCartItems };
        });
      },
    }),
    {
      name: "cart-storage", // storage key
      storage: zustandStorage,
    }
  )
);

export default useCartStore;
