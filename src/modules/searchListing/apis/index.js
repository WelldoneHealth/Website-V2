import axiosInstance from "@/shared/apis/axiosInstance";

export const getSerachList = async (
    params = {
      is_hospital: false,
    }
  ) => {
    try {
      const response = await axiosInstance.get(`apiV1/home-search/`, {
        params: { ...params },
      });
      console.log("gello",response)
      return response.data;
    } catch (error) {
      console.error("Error fetching search list:", error);
      throw error;
    }
  };