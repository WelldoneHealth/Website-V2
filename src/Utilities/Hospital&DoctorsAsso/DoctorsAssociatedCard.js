import React from "react";
import ratingIcon from "@/asset/Icons/rating.svg";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import doctorImage2 from "@/asset/Images/doctorImage2.png";

export default function DoctorsAssociatedCard() {
  return (
    <div
      style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
      className="mx-[6px] sm:mx-2  flex-none  rounded-[20px] px-2 asm:px-4 py-6  "
    >

      <div className="mb-2 asm:mb-8 w-full   flex flex-col ssm:flex-row justify-center items-center  gap-x-4 ">

        <div className="w-[130px] ssm:w-[90px] asm:w-[110px] asm:h-[110px] relative rounded-full ">
          <img src={doctorImage2?.src} className="w-full" alt="load..." />
        </div>

        <div className="w-full ssm:w-[60%] asm:w-[70%] max-w-[600px]  space-y-2 mb-3 asm:my-0 flex flex-col items-center  ssm:items-start  "  >

          <div className=" mt-5 ssm:mt-0  text-xs font-medium bg-[#F5F5F5]   px-2 asm:px-3 py-[5px]  rounded-[20px] ">
            <span className="mr-1  relative w-[14px] h-[14px] inline-block">
              <img src={ratingIcon?.src} />
            </span> 
            4.8 (234 Review)
          </div>

          <p className="font-medium text-xl ssm:text-base asm:text-xl leading-tight text-center ssm:text-left">
            Dr. Nilesh Bhamare Bhamare Bhamare
          </p>

          <p className="flex flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-sm font-semibold ">
            Gynecologist{" "}
            <span className="  hidden asm:block  asm:mx-2 rounded-[20px] text-white px-2 py-[2px] bg-[#01549A] text-xs ">
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
              <img className="w-full" src={redGeoLocationIcon?.src} />
            </span>
            Kolkata, West Bangal
          </p>
        </div>

      </div>


      <div className=" py-2 text-base rounded-[20px] text-center bg-[#EFF8FF]">
        <span className="text-[#01549A] font-medium">View Details</span>
      </div>
    </div>
  );
}
