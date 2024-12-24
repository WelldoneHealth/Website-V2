import React from "react";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import doctorIcon from "@/asset/Icons/doctor.svg";
import defaultClinic from "@/asset/Images/defaultClinic.png";
import Link from "next/link";
//import hospiatalImage from "@/asset/Images/hospital_Image1.png.png"

export default function HospitalAssociatedCard({ cardDetails }) {
  return (
    <div
      style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
      className="my-1 mx-auto sm:mx-2  flex-none h-full max-w-[430px] flex flex-col  justify-between  rounded-[20px] px-2 asm:px-4 py-4 "
    >
      <div className="mb-2 asm:mb-4 w-full ssm:space-y-2  flex flex-col ssm:flex-row justify-center items-center  gap-x-4 ">
        {/* ------------------image portion------------------ */}

        <div className="w-[106px] flex justify-center items-center ssm:w-[75px] asm:w-[103px] sm:w-[90px] aspect-[1/1] rounded-[10px] bg-[#EFF8FF] relative overflow-hidden  ">
          <img
            src={cardDetails?.page_setup__page_logo ?? defaultClinic?.src}
            className="w-full"
            alt="load..."
          />
        </div>

        {/* ---------first one--------- */}
        <div className="w-full my-3 ssm:my-0 ssm:w-[60%] asm:w-[70%] max-w-[600px]  space-y-2 mb-3 asm:my-0 flex flex-col items-center  ssm:items-start  ">
          {/* --------------------name------------------ */}
          <p className="font-medium text-base sm:text-sm md:text-base lg:text-sm esm:text-base leading-tight text-center ssm:text-left">
            {cardDetails?.establishment_name}, {cardDetails?.branch}
          </p>
          {/* ---------------stae-------------------- */}
          <p className=" text-sm sm:text-xs md:text-sm lg:text-xs esm:text-sm   flex items-baseline gap-x-1">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <img className="w-full" src={redGeoLocationIcon?.src} />
            </span>
            {cardDetails?.state__name}
          </p>
          {/* ---------------------no. of doctors------------------ */}
     {cardDetails?.total_doctor !==0  &&     <p className="text-sm sm:text-xs md:text-sm lg:text-xs esm:text-sm   flex items-center">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <img className="w-full" src={doctorIcon?.src} />
            </span>
            {cardDetails?.total_doctor} Doctor associated
          </p>   }
        </div>
      </div>


      <Link
        href={`/hospital-details/${cardDetails?.slug}`} 
        className="block"
      >
      <div className=" py-2 text-sm rounded-[20px] text-center bg-[#EFF8FF]">
        <span className="text-[#01549A] font-medium">View Details</span>
      </div>  </Link>
    </div>
  );
}
