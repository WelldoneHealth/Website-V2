import React from "react";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import hospitalLogo from "@/asset/Icons/eachHospitalLogo.svg";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
const Branches = ({ branches }) => {
  const router = useRouter();
  return (
    <div className="my-12 w-full">
      <p className="text-[20px] font-medium">Branches</p>
      <div className="my-8 flex overflow-x-scroll gap-8">
        {branches?.map((branchDetails, index) => (
          <div className="relative p-3 shadow-lg border border-gray-200  rounded-lg flex flex-col gap-2 min-w-[300px]">
            <img
              src={branchDetails?.branch_logo ?? hospitalLogo?.src}
              className="size-14 rounded-md"
            />

            <div className="text-md">{branchDetails?.establishment_name}</div>
            <div className="flex">
              {redGeoLocationIcon?.src && (
                <img
                  src={redGeoLocationIcon.src}
                  className="w-[12px] mr-2"
                  alt="Location Icon"
                />
              )}
              <span className="text-sm">
                {branchDetails?.owner_details__address &&
                  `${branchDetails.owner_details__address}, `}
                {branchDetails?.branch && `${branchDetails.branch}, `}
                {branchDetails?.owner_details__district &&
                  `${branchDetails.owner_details__district}, `}
                {branchDetails?.owner_details__state__name &&
                  `${branchDetails.owner_details__state__name} `}
                {branchDetails?.owner_details__pincode &&
                  `- ${branchDetails.owner_details__pincode}`}
              </span>
            </div>
            <button
              onClick={() => {
                router.push(`/hospital-details/${branchDetails?.slug}`);
              }}
              className="flex  items-center  gap-2 bg-[#01549A] absolute top-5 right-5 text-white text-sm px-2 rounded-lg"
            >
              Open <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
