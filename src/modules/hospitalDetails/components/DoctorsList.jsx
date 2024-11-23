import DoctorCard from "@/Utilities/listingPageCards/DoctorCard";
import React from "react";

const DoctorsList = ({ doctors, branch }) => {
  return (
    <div className="my-12 w-full">
      <p className="text-[20px] font-medium">
        Doctors at this Hospital ({doctors?.length})
      </p>
      <div className="my-8 flex flex-col gap-y-8">
        {doctors?.map((doctorDetails, index) => (
          <DoctorCard
            key={index}
            doctorDetails={doctorDetails}
            branch={branch}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
