import axiosInstance from "@/shared/apis/axiosInstance";

export const getSerachList = async (
    params = {
      is_hospital: false,
      specialty
    }
  ) => {
    try {
      const queryParams={}
      if (params.is_hospital !== undefined) {
        queryParams.is_hospital = params.is_hospital;
      }
      if (params.specialty !== undefined) {
        queryParams.specialty = params.specialty;
      }
      const response = await axiosInstance.get(`apiV1/home-search`, {
        params: queryParams,
      });
      console.log("gello",response)
      return response.data;
    } catch (error) {
      console.error("Error fetching search list:", error);
      throw error;
    }
  };