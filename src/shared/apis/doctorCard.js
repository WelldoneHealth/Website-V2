import axiosInstance from "./axiosInstance";

export const getDoctorList = async () => {
  const response = await axiosInstance.get(`apiV1/doctor-home-slider/`);
  console.log("the doctor list sre as follos", response.data);
  return response.data;
};
