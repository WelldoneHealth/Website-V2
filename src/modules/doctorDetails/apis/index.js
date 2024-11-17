import axiosInstance from "@/shared/apis/axiosInstance";

export const getDoctorDetails = async (doctorName, branchName) => {
  try {
    const response = await axiosInstance.get(`apiV1/doctors-profile/`, {
      params: {
        slug: doctorName,
        branch: branchName,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    throw error;
  }
};



export const getEqueue=async (doctorName,branchName)=>{
    try {
        const response=await axiosInstance.get('apiV1/e-queue/',{
            params:{
                doctor_slug:doctorName, 
                branch_slug:branchName
            }
        })
        // console.log("the data is",response.data)
        // console.log("the fetch done properly")
        // console.log(response.data)
        return response.data;
    } catch (error) {
        console.log("error fetching equeue list in  doctor profile page")       
    }
}