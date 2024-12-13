import { zustandStorage } from "@/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserData = {
  name: string;
  email: string;
};

interface UserState {
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userData: {
        name: "",
        email: "",
      },
      setUserData: (userData) => set({ userData }),
    }),
    {
      name: "user-storage", // storage key
      storage: zustandStorage,
    }
  )
);

export default useUserStore;
