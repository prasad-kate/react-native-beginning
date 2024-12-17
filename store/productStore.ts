import { create } from "zustand";

interface ProductState {
  category: number | null;
  setCategory: (category: number) => void;
}

const useProductStore = create<ProductState>((set) => ({
  category: 1,
  setCategory: (category) => set({ category }),
}));

export default useProductStore;
