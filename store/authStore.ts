import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  authToken: string | null;
  setAuthToken: (authToken: string) => void;
  clearAuthToken: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      authToken: null,
      setAuthToken: (authToken) => set({ authToken }),
      clearAuthToken: () => set({ authToken: null }),
    }),
    {
      name: "auth-storage", // storage key
    }
  )
);

export default useAuthStore;
