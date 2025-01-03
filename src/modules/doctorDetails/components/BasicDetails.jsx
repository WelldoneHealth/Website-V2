import React from "react";
import defaultDoctor from "@/asset/Images/defaultDoctor.png";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";

const BasicDetails = ({ basicInfo }) => {
  return (
    <div className="mt-2 mb-7 w-full flex flex-col sm:flex-row gap-x-6 gap-y-8">
      {/* Image */}
      <div className=" max-msm:w-[75%] max-msm:h-[270px] msm:size-[300px] rounded-lg max-sm:mx-auto overflow-hidden  ">
        <img
          src={basicInfo?.profile_picture ?? defaultDoctor?.src}
          className=" w-full h-full object-cover object-center bg-[#EFF8FF] "
          alt="Doctor"
        />
      </div>
      {/* Doctor Info */}
      <div className="max-sm:mx-auto flex-1">
        {/* ------------------------for further use in later------------------- */}
        {/* <div className="flex gap-x-3">
          <button className="border-2 flexCenter rounded-md cursor-pointer text-sm asm:text-base font-medium px-2 py-[2px] border-[#E8E8E8] hover:bg-[#01549A] hover:text-white hover:border-transparent text-[#01549A]">
           {basicInfo?.specialty_treatment}
          </button>
          <button className="bg-[#01549A] rounded-md text-sm asm:text-base font-medium sm:flex hidden justify-center items-center min-w-[100px] text-white cursor-pointer hover:text-[#01549A] hover:bg-white border-2 border-[#01549A]">
            (124)
          </button>
        </div> */}
        <h3 className="my-3 text-[#01549A] font-semibold text-[18px] ssm:text-[20px] asm:text-[26px]">
          {basicInfo?.suffix} {basicInfo?.first_name} {basicInfo?.middle_name}{" "}
          {basicInfo?.last_name}{" "}
        </h3>
        <div className="w-full flex flex-col gap-y-1 text-sm">
          <p className="text-[#A7A7A7] font-normal text-sm asm:text-base">
            {basicInfo?.education_and_background
              .map((item) => item.qualification)
              .join(", ")}
          </p>
          <p className="text-[#A7A7A7] font-medium text-sm asm:text-base">
            {basicInfo?.practice_specialty}
          </p>
          <p className="max-sm:w-full text-[#A7A7A7] font-normal w-[70%] max-w-[450px]">
            {basicInfo?.specialty_treatment}
          </p>
         { (basicInfo?.address[0]?.city  &&  basicInfo?.address[0]?.state) && <p className="my-4 text-[#A7A7A7] font-normal asm:text-base">
            <span className="mr-2 relative w-[12px] h-[15px] inline-block">
              <img
                className="w-full"
                src={redGeoLocationIcon?.src}
                alt="Location"
              />
            </span>
           {basicInfo?.address[0]?.city ?? ''} {basicInfo?.address[0]?.state ?? ''}
          </p> }
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
