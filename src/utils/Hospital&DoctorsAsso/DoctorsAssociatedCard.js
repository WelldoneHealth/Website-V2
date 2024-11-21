import React from "react";
import ratingIcon from "@/asset/Icons/rating.svg";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import doctorImage2 from "@/asset/Images/doctorImage2.png";
import Link from "next/link";

export default function DoctorsAssociatedCard({ cardDetails }) {
  return (
    <div
      style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
      className=" my-1  mx-auto sm:mx-2  flex-none h-full max-w-[430px] flex flex-col  justify-between  rounded-[20px] px-2 asm:px-4  ssm:pb-4 ssm:pt-[6px]    "
    >
      <div className="mb-2 asm:mb-4 w-full ssm:space-y-2  flex flex-col ssm:flex-row justify-center items-center   gap-x-4 ">
        {/* ------------------image portion------------------ */}
        <div className="w-[130px] bg-[#EFF8FF]  flex justify-center  items-center ssm:w-[95px]   md:w-[28%] lg:w-[33%]   esm:w-[100px] relative rounded-full overflow-hidden ">
          <img
            src={
              cardDetails?.profile_picture
                ? cardDetails?.profile_picture
                : doctorImage2?.src
            }
            className="w-full object-cover"
            alt="load..."
          />
        </div>

        <div className="w-full ssm:w-[60%] h-full   asm:w-[70%] max-w-[600px]  max-ssm:space-y-2  ssm:gap-y-1 mb-3 asm:my-0 flex flex-col items-center  ssm:items-start  ">
          {/* ---------------rating---------- */}
          <div className=" mt-5 ssm:mt-0  mb-1 text-xs font-medium  bg-[#EFF8FF] text-[#01549A] px-2 asm:px-3 py-[6px]  rounded-[20px] flex items-center ">
            <span className="mr-1  relative w-[14px] h-[14px] inline-block">
              <img src={ratingIcon?.src} />
            </span>
            4.8 (234 Review)
          </div>
          {/* --------------------name------------------ */}
          <p className="font-medium text-base sm:text-sm md:text-base lg:text-sm esm:text-base leading-tight text-center ssm:text-left">
            Dr. {cardDetails?.first_name} {cardDetails?.middle_name}{" "}
            {cardDetails?.last_name}
          </p>
          {/* ------------------speciality---------------- */}
          <p className="flex  flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0  text-sm sm:text-xs md:text-sm lg:text-xs esm:text-sm ">
            Gynecologist
            {cardDetails?.total_experience && (
              <span className="  hidden asm:block  asm:mx-2 rounded-[20px] text-[#01549A] px-2 py-[4px]  text-xs border-x-[2px] border-[#01549A] ">
                {cardDetails?.total_experience} Years Exp
              </span>
            )}
          </p>
          {/* ---------------hiospital------------- */}
          <p className="text-sm sm:text-xs md:text-sm lg:text-xs esm:text-sm mt-1  flex items-center gap-x-1 ">
            <span className="mr-2 relative w-[18px] h-[18px] inline-block">
              <img src={hospitalIcon?.src} />
            </span>
            {cardDetails?.branch__establishment_name}
          </p>
          {/* ---------------stae-------------------- */}
          <p className=" text-sm sm:text-xs md:text-sm lg:text-xs esm:text-sm   flex items-baseline gap-x-1">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <img className="w-full" src={redGeoLocationIcon?.src} />
            </span>
            {cardDetails?.branch__state__name}
          </p>
        </div>
      </div>

      {/* -------------------view details button------------ */}
      <Link
        href={`/doctor-details/${cardDetails?.slug}/${cardDetails?.branch__slug}`}
        className="block"
      >
        <div className=" py-2 text-sm rounded-[20px] text-center bg-[#EFF8FF]">
          <span className="text-[#01549A] font-medium">View Details</span>
        </div>
      </Link>
    </div>
  );
}
