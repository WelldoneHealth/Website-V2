import React from "react";
import {
  DOCTOR_LOGO,
  HOSPITAL_IMAGE1,
  REDGEO_LOCATION,
} from "../ImageConstants";
import Image from "next/image";

export default function HospitalAssociatedCard() {
  return (
    <div style={{ boxShadow: '0px 0px 4px 1px #00000040' }} className="w-[390px]  rounded-[20px] px-5 py-8">
      <div className="mb-8 w-full flex gap-x-4 ">
        <div className="w-[140px] h-[140px] relative">
          <Image fill src={HOSPITAL_IMAGE1} />
        </div>
        <div className="space-y-2">
          <p className="font-medium text-xl leading-tight">
            Purva Maternity Hospital, Kala nagar
          </p>
          <p className="text-sm font-semibold">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <Image fill src={REDGEO_LOCATION} />
            </span>
            Kolkata, West Bangal
          </p>
          <p className="text-sm mt-1 font-semibold">
            <span className="mr-3 relative w-[12px] h-[15px] inline-block">
              <Image fill src={DOCTOR_LOGO} />
            </span>
            1+ Doctors associated
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
