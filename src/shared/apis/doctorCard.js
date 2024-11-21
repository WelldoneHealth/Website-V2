import axiosInstance from "./axiosInstance";

export const getDoctorList=async (authToken) => {
    const response = await axiosInstance.get(`apiV1/doctor-home-slider/`, {
      headers: {
        Authorization: `JWT ${authToken}`,
      },
    });
    console.log("the doctor list sre as follos",response.data)
    return response.data;
  };