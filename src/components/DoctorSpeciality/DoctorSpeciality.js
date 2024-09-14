import { HEART_ICON } from "@/Utilities/ImageConstants";
import Image from "next/image";
import React from "react";

export const IconBox = ({icons,text}) => {
  return (
    <div className="">
      <div className="rounded-full bg-[#EFF8FF] p-4 md:p-7 flexCenter">
        <div className="w-10 h-10 md:w-14 md:h-14 lg:h-[71px] lg:w-[76px] relative">
          <Image src={HEART_ICON} fill alt="load..." />
        </div>
      </div>
      <h5 className="text-base font-normal text-center">Dentist</h5>
    </div>
  );
};

export default function DoctorSpeciality() {
  return (
    <section className="w-full my-14 mx-auto">
      <div className="flexBetween text-3xl font-medium">
        <p className=" ">Doctor Speciality</p>
        <div className="text-[#01549A] font-normal cursor-pointer">See All</div>
      </div>
      <div className="w-full flex gap-x-16">
     
 <div className="">
<div className="bg-[#EFF8FF] p-6 rounded-full ">
<span className=" relative w-[71px] h-[71px] inline-block">
            <Image fill src={HEART_ICON} />
          </span>
</div>
<h5 className="text-lg font-normal text-center">Dentist</h5>
</div>

      </div>
    </section>
  );
}
