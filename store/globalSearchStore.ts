import { create } from "zustand";

interface GlobalSearchStore {
  isGlobalSearchVisible: boolean;
  toggleGlobalSearch: () => void;
}

export const useGlobalSearchStore = create<GlobalSearchStore>((set) => ({
  isGlobalSearchVisible: false,
  toggleGlobalSearch: () =>
    set((state) => ({ isGlobalSearchVisible: !state.isGlobalSearchVisible })),
}));
