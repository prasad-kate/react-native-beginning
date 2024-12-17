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
  setCartItems: (productData: Product) => void;
  editCartItemCount: (productData: Partial<Product>) => void;
  removeCartItem: (productId: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      setCartItems: (productData) => {
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
          }, 100);
        }
      },
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
    }),
    {
      name: "cart-storage", // storage key
      storage: zustandStorage,
    }
  )
);

export default useCartStore;
