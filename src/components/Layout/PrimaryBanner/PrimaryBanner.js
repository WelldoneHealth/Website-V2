import React from "react";
import clock from "../../../asset/Images/clock.png";
import Image from "next/image";
import { CLOCK_LOGO, LOCATION_ICON } from "@/Utilities/ImageConstants";

export default function PrimaryBanner() {
  return (
    <section className="w-full my-8">
      <h2 className="  px-3 text-[#01549A] text-2xl font-medium">
        Book Doctor Appointments in Seconds
        <Image
          className="inline-block mx-2"
          src={CLOCK_LOGO}
          width={30}
          height={30}
          alt="load..."
        />
      </h2>
      <div className= " my-6 w-full md:w-[90%] 2xl::max-w-[85%] max-w-[1600px] h-auto bg-[#01549A] mx-auto rounded-3xl p-3 ">
        <div className="flex gap-x-3">
          <div className="flex gap-x-1-2 ">
            {/* <Image src={LOCATION_ICON} width={13} height={13} /> */}
           <p className="font-bold text-[12px] pl-5 py-[6px] pr-5 rounded-[28px] bg-white"><span className="text-[10px] font-normal">Loaction</span> <br/> India</p>
          </div>
         <input type="text" name="" className="px-5 py-[6px] rounded-[28px] w-[70%]" placeholder="Search doctor, clinic, hospital near by you" />

        </div>
        <p className="my-7 text-white text-lg  xl:max-w-[550px]  2xl:max-w-[640px] ">Find the best doctors near you and secure your appointment instantly – no waiting, no hassle.</p>
      </div>
    </section>
  );
}
