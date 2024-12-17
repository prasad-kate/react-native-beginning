import { create } from "zustand";

interface ProductState {
  category: number | null;
  favouriteProducts: number[];
  setCategory: (category: number) => void;
  editFavouriteProducts: (productId: number) => void;
}

const useProductStore = create<ProductState>((set, get) => ({
  category: null,
  favouriteProducts: [],
  setCategory: (category) => set({ category }),
  editFavouriteProducts: (productId) => {
    const { favouriteProducts } = get();

    const isAlreadyFavourite = favouriteProducts?.includes(productId);

    if (!isAlreadyFavourite) {
      const updatedFavourites = [...favouriteProducts, productId];
      return set({ favouriteProducts: updatedFavourites });
    }

    if (isAlreadyFavourite) {
      const updatedFavourites = favouriteProducts?.filter(
        (id) => id !== productId
      );
      return set({ favouriteProducts: updatedFavourites });
    }
  },
}));

export default useProductStore;
