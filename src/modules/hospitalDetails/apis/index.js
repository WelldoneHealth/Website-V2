import axiosInstance from "@/shared/apis/axiosInstance";

export const getHospitalDetails = async (
  params = {
    slug: null,
  }
) => {
  try {
    const response = await axiosInstance.get(`apiV1/hospital-profile/`, {
      params: { ...params },
    });
    return response;
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    throw error;
  }
};
