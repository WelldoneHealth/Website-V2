import React from "react";
import doctorDeviceIcon from "@/asset/Icons/doctorDevice.svg";
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
import smallBuildingIcon from "@/asset/Icons/smallBuilding.svg";
import doctorHatIcon from "@/asset/Icons/doctorHat.svg";
import doctorNoteIcon from "@/asset/Icons/doctorNote.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
const ExperienceCard = ({
  title = "",
  institution = "",
  location = "",
  year = "",
  speciality="",
  type=""
}) => {
  return (
    <div
    style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
    className="flex-1 max-w-[400px] rounded-[20px] space-y-2 p-2 ssm:p-5"
  >
    <div className="flex">
      <div className="mr-3 flexCenter size-9 ssm:size-[42px] rounded-full bg-[#EFF8FF]">
        <img
          src={doctorDeviceIcon?.src}
          className=" w-6 ssm:w-8 "
          alt="load..."
        />
      </div>
      <div className="">
        <p className="font-medium text-base ssm:text-lg">
         {title}
        </p>
        <p className="text-sm ssm:text-xs">{type}</p>
      </div>
    </div>
    <p className="text-sm flex  ">
      <img
        src={doctorNoteIcon?.src}
        className="w-4 mr-3"
        alt="load..."
      />
   {speciality}
    </p>
    <p className="text-sm flex ">
      <img
        src={hospitalOutlineIcon?.src}
        className="w-4 mr-3"
        alt="load..."
      />
      {institution}
    </p>
    <p className="text-sm flex ">
      <img
        src={outlineGeoLocationIcon?.src}
        className="w-4 mr-3"
        alt="load..."
      />
      {location}
    </p>
    <p className="text-sm flex ">
      <img
        src={doctorNoteIcon?.src}
        className="w-4 mr-3"
        alt="load..."
      />
      {year}
    </p>
  </div>
  );
};

export default ExperienceCard;
