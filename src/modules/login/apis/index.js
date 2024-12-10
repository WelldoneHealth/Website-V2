import axiosInstance from "@/shared/apis/axiosInstance";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post(`token/`, credentials);
  return response.data; // Expects an object with `access` token
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post(`/apiV1/user/`, {
      ...userData,
      roles: 3,
    });
    return response.data; // Expects the API to return the user data or success message
  } catch (error) {
    console.log("the data returned in register functin---",error.response?.data)
    throw new Error(
      error.response?.data?.message || "Registration failed. Please try again."
    );
  }
};

export const getCurrentUser = async (authToken) => {
  const response = await axiosInstance.get(`apiV1/current-user/`, {
    headers: {
      Authorization: `JWT ${authToken}`,
    },
  });
  return response.data; 
};
