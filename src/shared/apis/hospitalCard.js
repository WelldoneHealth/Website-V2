import axiosInstance from "./axiosInstance";

export const getHospitalList = async () => {
  const response = await axiosInstance.get(`apiV1/hospital-home-slider/`);
  console.log("the hospital list sre as follos", response.data);
  return response.data;
};
