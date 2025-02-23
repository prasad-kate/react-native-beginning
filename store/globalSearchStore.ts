import { create } from "zustand";

interface GlobalSearchStore {
  isGlobalSearchVisible: boolean;
  toggleGlobalSearch: () => void;
  globalSearch: string;
  setGlobalSearch: (text: string) => void;
}

export const useGlobalSearchStore = create<GlobalSearchStore>((set) => ({
  isGlobalSearchVisible: false,
  globalSearch: "",
  toggleGlobalSearch: () =>
    set((state) => ({ isGlobalSearchVisible: !state.isGlobalSearchVisible })),
  setGlobalSearch: (text) => set({ globalSearch: text }),
}));
