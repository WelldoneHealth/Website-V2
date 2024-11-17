import axiosInstance from "@/shared/apis/axiosInstance";

export const doctorHospitalSearch = async (searchText = "") => {
  if (searchText?.length > 0) {
    return axiosInstance
      .get(`apiV1/home-search/`, { params: { search: searchText } })
      .then((res) => {
        return res.data?.map((each) => ({
          label:
            each?.establishment_name ||
            `${each?.suffix} ${each?.first_name ?? ""} ${
              each?.middle_name ?? ""
            } ${each?.last_name ?? ""}`,
          value:
            each?.establishment_name || `${each?.slug}_${each?.branch__slug}`,
        }));
      });
  }
  return [];
};
