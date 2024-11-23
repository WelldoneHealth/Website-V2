import axiosInstance from "@/shared/apis/axiosInstance";

export const fetchFamilyMemberList = async () => {
  try {
    const response = await axiosInstance.get(`apiV1/patient/`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    throw error;
  }
};

// Delete a member by ID
export const deleteFamilyMember = async (memberId) => {
  try {
    await axiosInstance.delete(`/apiV1/patient/${memberId}/`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting member:", error);
    throw error;
  }
};
