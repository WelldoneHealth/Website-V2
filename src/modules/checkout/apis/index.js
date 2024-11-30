import axiosInstance from "@/shared/apis/axiosInstance";

export const addPatient = async (patientData) => {
  try {
    const response = await axiosInstance.post(`/apiV1/patient/`, patientData);
    return response.data; // Handle successful response
  } catch (error) {
    console.error("Error adding patient:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export const addAppointment = async (data) => {
  try {
    const response = await axiosInstance.post("/apiV1/book-appointment/", data);
    return response.data; // Return the data from the response
  } catch (error) {
    // console.log("the error is it because",error.response.data.message)
    throw new Error(error.response.data.message || "Error Booking appointment")
    
  }
};
