import React from "react";
// import DoctorCard from "@/Utilities/listingPageCards/DoctorCard";
import DoctorCard from "@/modules/searchListing/components/DoctorCard"

const DoctorsList = ({ doctors, branch }) => {
  console.log("------------------",branch)
  return (
    <div className="my-12 w-full">
      <p className="text-[20px] font-medium">
        Doctors at this Hospital ({doctors?.length})
      </p>
      <div className="my-8 flex flex-col gap-y-8">
        {doctors?.map((doctorDetails, index) => (
          <DoctorCard
            key={index}
            listInfo={doctorDetails}
            branchSlug={branch}
            // branch={branch}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
 