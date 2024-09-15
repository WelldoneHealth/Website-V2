import React from "react";
import ratingIcon from "@/asset/Icons/rating.svg";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import doctorImage2 from "@/asset/Images/doctorImage2.png";

export default function DoctorsAssociatedCard() {
  return (
    <div
      style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
      className="mx-1   flex-none  rounded-[20px] px-2 asm:px-4 py-6 asm:py-8"
    >
      <div className="mb-2 asm:mb-8 w-full   flex flex-col ssm:flex-row justify-center items-center  gap-x-4 ">
        <div className="w-[130px] ssm:w-[110px] asm:w-[120px] asm:h-[120px] relative rounded-full ">
          <img src={doctorImage2?.src} className="w-full " alt="load..." />
        </div>
        <div className="w-full ssm:w-[60%] asm:w-[70%] max-w-[600px]  space-y-2 my-6 asm:my-0 flex flex-col justify-center ">
          <div className="mx-auto    text-xs font-medium bg-[#F5F5F5] px-3 py-1 inline-block rounded-[20px]">
            <span className="mr-2  relative w-[14px] h-[14px] inline-block">
              <img src={ratingIcon?.src} />
            </span>
            4.8 (234 Review)
          </div>

          <p className="font-medium text-xl ssm:text-lg asm:text-xl leading-tight">
            Dr. Nilesh Bhamare 
          </p>

          <p className="flex justify-start  items-center ssm:flex-col asm:flex-row gap-y-1 gap-x-3 asm:gap-x-0 text-sm font-semibold ">
            Gynecologist{" "}
            <span className=" asm:mx-2 rounded-[20px] text-white px-2 py-[2px] bg-[#01549A] text-xs ">
              7 + Years Exp
            </span>
          </p>

          <p className="text-sm mt-1 font-semibold">
            <span className="mr-2 relative w-[18px] h-[18px] inline-block">
              <img src={hospitalIcon?.src} />
            </span>
            Bhamare Hospital
          </p>

          <p className="text-sm font-semibold">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <img src={redGeoLocationIcon?.src} />
            </span>
            Kolkata, West Bangal
          </p>
        </div>
      </div>
      <div className=" py-2 text-base rounded-[20px] text-center bg-[#EFF8FF]">
        {" "}
        <span className="text-[#01549A] font-medium">View Details</span>
      </div>
    </div>
  );
}
