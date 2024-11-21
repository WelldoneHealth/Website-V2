import axiosInstance from "./axiosInstance";

export const getHospitalList=async (authToken) => {
    const response = await axiosInstance.get(`apiV1/hospital-home-slider/`, {
      headers: {
        Authorization: `JWT ${authToken}`,
      },
    });
    console.log("the hospital list sre as follos",response.data)
    return response.data;
  };