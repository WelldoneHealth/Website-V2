import axiosInstance from "@/shared/apis/axiosInstance";

export const getAppointmentHistory = async (pageNumber = 1) => {
  try {
    const response = await axiosInstance.get(
      `apiV1/patient-appointment-history/?page_size=10&page=${pageNumber}`
    );
    // console.log("teh appouintment data is",response.data.slice(0,2))
    return response?.data;
  } catch (error) {
    console.log("error fetching appointment history");
  }
};

export const getSpecificHistory = async (id) => {
  try {
    const response = await axiosInstance.get(
      `apiV1/patient-appointment-history/?appointment_id=${id}`
    );
    // console.log("teh appouintment data is",response.data.slice(0,2))
    return response?.data;
  } catch (error) {
    console.log("error fetching specific appointment history");
  }
};

export const cancelAppointment = async (formValues) => {
  try {
    const response = await axiosInstance.post(
      `apiV1/clinic-cancel-appointment/`,
      formValues
    );
    // console.log("teh appouintment data is",response.data.slice(0,2))
    return response?.data;
  } catch (error) {
    console.log("error fetching specific appointment history");
  }
};
