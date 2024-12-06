import axiosInstance from "@/shared/apis/axiosInstance";

export const getSerachList = async (
  params = {
    is_hospital: false,
    specialty: undefined,
    page: 1,
    search: undefined
  }
) => {
  try {
    const queryParams = {};

    if (params.is_hospital !== undefined) {
      queryParams.is_hospital = params.is_hospital;
    }
    if (params.specialty !== undefined || (params.specialty !== "")) {
      queryParams.specialty = params.specialty;
    }
    if (params.page !== undefined) {
      queryParams.page = params.page;
    }
    if (params.search!== undefined) {
      queryParams.search = params.search;
    }

    const response = await axiosInstance.get(`apiV1/home-search`, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search list:", error);
    throw error;
  }
};


  export const getSpecialty = async () => {
    try {
      const response = await axiosInstance.get(`apiV1/practice-specialty/`);
      console.log("Response:", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching specialties:", error);
      throw error;
    }
  };
  