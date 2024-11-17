import axiosInstance from "@/shared/apis/axiosInstance";

export const getDoctorDetails = async (
  params = {
    slug: null,
    branch: null,
  }
) => {
  try {
    const response = await axiosInstance.get(`apiV1/doctors-profile/`, {
      params: { ...params },
    });
    return response;
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    throw error;
  }
};

export const getEqueue = async (
  params = {
    slug: null,
    branch: null,
  }
) => {
  try {
    const response = await axiosInstance.get("apiV1/welldone-equeue/", {
      params: {
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error fetching equeue list in  doctor profile page");
  }
};
