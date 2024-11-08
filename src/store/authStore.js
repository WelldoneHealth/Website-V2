// store/authStore.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      userDetails: null,
      setToken: (token) => set({ token }),
      setUserDetails: (userDetails) => set({ userDetails }),
      clearAuth: () => set({ token: null, userDetails: null }),
    }),
    {
      name: "auth-storage", // Name of the local storage key
      storage: createJSONStorage(() => localStorage), // Use local storage for persistence
    }
  )
);

export default useAuthStore;
