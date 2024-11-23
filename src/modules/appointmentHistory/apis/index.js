import axiosInstance from "@/shared/apis/axiosInstance";

export const getAppointmentHistory = async () => {
  try {
    const response = await axiosInstance.get("apiV1/patient-appointment-history/");
    // console.log("teh appouintment data is",response.data.slice(0,2))
    return response.data;
  } catch (error) {
    console.log("error fetching appointment history");
  }
};
