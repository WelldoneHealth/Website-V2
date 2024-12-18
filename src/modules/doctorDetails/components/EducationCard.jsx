import React from "react";
import doctorHatIcon from "@/asset/Icons/doctorHat.svg";
import smallBuildingIcon from "@/asset/Icons/smallBuilding.svg";
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
const EducationCard = ({ eduDetails }) => (
  <div
    style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
    className="flex-1 max-w-[400px]  rounded-[20px] space-y-2 p-2 ssm:p-5"
  >
    <div className="flex">
      <div className="mr-3 flexCenter size-9 ssm:size-[42px] rounded-full bg-[#EFF8FF]">
        <img src={doctorHatIcon?.src} className="w-6 ssm:w-8" alt="load..." />
      </div>
      <div className="">
        <p className="font-medium text-base ssm:text-lg">{eduDetails?.qualification}</p>
        <p className="text-sm ssm:text-xs ">{eduDetails?.faculty}</p>
      </div>
    </div>
    <p className="text-sm flex  ">
      <img src={smallBuildingIcon?.src} className="w-4 mr-3" alt="load..." />
      {eduDetails?.institute}
    </p>
    <p className="text-sm flex ">
      <img
        src={outlineGeoLocationIcon?.src}
        className="w-4 mr-3"
        alt="load..."
      />
     {eduDetails?.city}
    </p>
    <p className="text-sm flex ">
      <img src={smallHatIcon?.src} className="w-4 mr-3" alt="load..." />
      {eduDetails?.passing_year}
    </p>
  </div>
);

export default EducationCard;
