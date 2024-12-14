import { create } from "zustand";

interface ProductState {
  category: number | null;
  setCategory: (category: number) => void;
}

const useProductStore = create<ProductState>((set) => ({
  category: null,
  setCategory: (category) => set({ category }),
}));

export default useProductStore;
