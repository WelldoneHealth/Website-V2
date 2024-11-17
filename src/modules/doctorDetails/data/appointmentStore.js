import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppointmentStore = create(
  persist(
    (set) => ({
      appointmentData: {
        equeueData: null,
        doctorData: null,
      },
      setAppointmentData: (data) => {
        set({ appointmentData: { ...data } });
      },
    }),
    {
      name: "appointment-store", // The key for localStorage
      getStorage: () =>
        typeof window !== "undefined" ? localStorage : undefined, // Ensure this works on both SSR and CSR
    }
  )
);
