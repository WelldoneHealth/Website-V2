import axiosInstance from "@/shared/apis/axiosInstance";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post(`token/`, credentials);
  return response.data; // Expects an object with `access` token
};

export const getCurrentUser = async (authToken) => {
  const response = await axiosInstance.get(`apiV1/current-user/`, {
    headers: {
      Authorization: `JWT ${authToken}`,
    },
  });
  return response.data;
};
