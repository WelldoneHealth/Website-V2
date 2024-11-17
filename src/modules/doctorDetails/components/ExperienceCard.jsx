import React from "react";
import doctorDeviceIcon from "@/asset/Icons/doctorDevice.svg";
const ExperienceCard = ({
  title = "",
  institution = "",
  location = "",
  year = "",
}) => {
  return (
    <div
      style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
      className="flex flex-col p-4 ssm:p-6 rounded-[20px] space-y-3"
    >
      <div className="flex items-center">
        <div className="mr-3 flexCenter size-9 ssm:size-[42px] rounded-full bg-[#EFF8FF]">
          <img
            src={doctorDeviceIcon?.src}
            className="w-6 ssm:w-8"
            alt="Training Icon"
          />
        </div>
        <div>
          <p className="font-medium text-base ssm:text-lg">{title}</p>
          <p className="text-sm ssm:text-xs">{institution}</p>
          <p className="text-sm ssm:text-xs text-[#A7A7A7]">{location}</p>
          <p className="text-sm ssm:text-xs text-[#A7A7A7]">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
