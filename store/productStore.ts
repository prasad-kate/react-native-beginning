import { create } from "zustand";

interface ProductState {
  category: string;
  setCategory: (category: string) => void;
}

const useProductStore = create<ProductState>((set) => ({
  category: "",
  setCategory: (category: string) => set({ category }),
}));

export default useProductStore;
