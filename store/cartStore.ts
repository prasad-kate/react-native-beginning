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
    }),
    {
      name: "cart-storage", // storage key
      storage: zustandStorage,
    }
  )
);

export default useCartStore;
