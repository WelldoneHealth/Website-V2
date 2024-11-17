import React from "react";
import doctorDetailsImage from "@/asset/Images/doctorDetailsImage.png";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";

const BasicDetails = ({basicInfo}) => {
  return (
    <div className="my-7 w-full flex flex-col md:flex-row gap-x-6 gap-y-8">
      {/* Image */}
      <div>
        <img
          src={doctorDetailsImage?.src}
          className="h-[250px] rounded-md"
          alt="Doctor"
        />
      </div>
      {/* Doctor Info */}
      <div className="flex-1">
        <div className="flex gap-x-3">
          <button className="border-2 flexCenter rounded-md cursor-pointer text-sm asm:text-base font-medium px-2 py-[2px] border-[#E8E8E8] hover:bg-[#01549A] hover:text-white hover:border-transparent text-[#01549A]">
            Obstetrics and Gynaecology
          </button>
          <button className="bg-[#01549A] rounded-md text-sm asm:text-base font-medium sm:flex hidden justify-center items-center min-w-[100px] text-white cursor-pointer hover:text-[#01549A] hover:bg-white border-2 border-[#01549A]">
            (124)
          </button>
        </div>
        <h3 className="my-3 text-[#01549A] font-semibold text-[18px] ssm:text-[20px] asm:text-[26px]">
          {basicInfo?.suffix} {basicInfo?.first_name} {basicInfo?.middle_name}  {basicInfo?.last_name}   </h3>
        <div className="w-full flex flex-col gap-y-1 text-sm">
          <p className="text-[#A7A7A7] font-normal text-sm asm:text-base">
            M.B.B.S, DGO
          </p>
          <p className="max-sm:w-full text-[#A7A7A7] font-normal w-[70%] max-w-[450px]">
            Surgical Oncologist, Advanced Laparoscopic Surgeon, Nodules, Stomach
            Disorders Specialist
          </p>
          <p className="my-4 text-[#A7A7A7] font-normal asm:text-base">
            <span className="mr-2 relative w-[12px] h-[15px] inline-block">
              <img
                className="w-full"
                src={redGeoLocationIcon?.src}
                alt="Location"
              />
            </span>
            Pune, Maharashtra
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
