// stores/loadingStore.js
import { create } from "zustand";

const useUtilStore = create((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export default useUtilStore;
