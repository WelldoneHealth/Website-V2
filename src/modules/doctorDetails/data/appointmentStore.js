import { create } from "zustand";

export const useAppointmentStore = create((set) => ({
  appointmentData: {
    equeueData: null,
    doctorData: null,
  },
  setAppointmentData: (data) => {
    set({ appointmentData: { ...data } });
  },
}));
