import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppointmentStore = create(
  (set) => ({
    appointmentData: {
      equeueData: null,
      doctorData: null,
    },
    setAppointmentData: (data) => {
      set({ appointmentData: { ...data } });
    },
  }),
  // Add condition to check if it's the client-side
  process.browser
    ? persist(
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
          name: "appointment-store", // Key to store data in localStorage
          storage: localStorage, // You can use sessionStorage or any other storage
        }
      )
    : undefined
);
