import { zustandStorage } from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  productId: number;
  productCount: number;
};

interface CartState {
  cartItems: Product[];
  setCartItems: (productData: Product) => void;
  editCartItemCount: (productData: Product) => void;
  removeCartItem: (productId) => void;
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
          return set({
            cartItems: [...cartItems, productData],
          });
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
