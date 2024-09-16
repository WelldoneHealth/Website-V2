import React from "react";
import { HOSPITAL_IMAGE1 } from "../ImageConstants";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import doctorIcon from "@/asset/Icons/doctor.svg";
//import hospiatalImage from "@/asset/Images/hospital_Image1.png.png"

export default function HospitalAssociatedCard() {
  return (
    <div
      style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
      className="mx-[6px] sm:mx-2  flex-none  rounded-[20px] px-2 asm:px-4 py-6  "
    >
      <div className="mb-2 asm:mb-8 w-full   flex flex-col ssm:flex-row justify-center items-center  gap-x-4 ">

      <div className="w-[106px] ssm:w-[75px] asm:w-[103px] sm:w-[90px]  relative  ">
          <img src={HOSPITAL_IMAGE1} className="w-full"  alt="load..." />
        </div>

        {/* ---------first one--------- */}
        <div className="w-full my-3 ssm:my-0 ssm:w-[60%] asm:w-[70%] max-w-[600px]  space-y-2 mb-3 asm:my-0 flex flex-col items-center  ssm:items-start  "   >
          <p className="font-medium text-xl ssm:text-base asm:text-xl leading-tight text-center ssm:text-left">
            Purva Maternity Hospital, Kala nagar ala nagar ala nagar
          </p>
          <p className="text-sm font-semibold">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <img className="w-full" src={redGeoLocationIcon?.src} />
            </span>
            Kolkata, West Bangal
          </p>
          <p className="text-sm font-semibold">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <img className="w-full" src={doctorIcon?.src} />
            </span>
            1+ Doctors associated
          </p>
        </div>

      </div>

      <div className="mt-2 ssm:mt-5 py-2 text-base rounded-[20px] text-center bg-[#EFF8FF]">
        <span className="text-[#01549A] font-medium">View Details</span>
      </div>
    </div>
  );
}
