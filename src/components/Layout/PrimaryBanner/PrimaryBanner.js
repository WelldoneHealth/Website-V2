"use client";

import React, { useState } from "react";
import clockIcon from "@/asset/Icons/clock.svg";
import doctorImage from "@/asset/Images/primaryBannerDoctor.png";
import greyGeoLocationIcon from "@/asset/Icons/greyGeoLocation.svg";
import primaryBg from "@/asset/Images/BG.png";
import { AutoComplete } from "@/utils/components/Autocomplete";
import { doctorHospitalSearch } from "@/modules/home/apis";
import { Routes } from "@/shared/Routes";
import { useRouter } from "next/navigation";

export default function PrimaryBanner() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const router = useRouter();
  return (
    <section
      style={{ backgroundImage: `url(${primaryBg?.src})` }}
      className="w-full my-36 px-1 md:px-5 bg-cover bg-center bg-no-repeat relative max-h-max"
    >
      <h2 className="px-1 text-[#01549A] text-base ssm:text-xl asm:text-[26px] sm:text-[28px] lg:text-[32px] xl:text-[42px] font-medium my-8 asm:my-12 sm:my-14 leading-loose">
        Book Doctor Appointments in Seconds
        <img
          className="inline-block mx-2 sm:mx-5 w-[30px] sm:w-[40px] sm:h-[40px]"
          src={clockIcon?.src}
          alt="load..."
        />
      </h2>

      <div className="w-[98%] relative mx-auto flex flex-col justify-end md:flex-row md:justify-between items-center bg-[#01549A] rounded-3xl py-4 h-[470px] ssm:h-[560px] asm:h-[550px] sm:h-[470px] md:h-[280px] lg:h-[310px] xl:h-[390px]">
        <div className="w-[76%] asm:w-[285px] sm:w-[38%] border-2 flex md:hidden items-baseline relative">
          <img
            src={doctorImage?.src}
            className="w-full absolute bottom-0 object-cover"
            alt="load..."
          />
        </div>

        <div className="w-[96%] sm:w-[92%] md:w-[60%] order-2 md:order-1 mx-auto">
          <p className="text-white w-full xl:max-w-[680px] text-base ssm:text-lg asm:text-[22px] lg:text-2xl xl:text-3xl">
            Find the best doctors near you and secure your appointment instantly
            – no waiting, no hassle.
          </p>

          <div className="flex flex-col asm:flex-row gap-3 my-7">
            <div className="rounded-3xl bg-white flex justify-start asm:justify-center items-center gap-x-4 px-4 asm:px-3 py-1 max-w-max asm:min-w-[120px]">
              <img
                src={greyGeoLocationIcon?.src}
                className="w-[12px] h-[15px] asm:w-[14px] asm:h-[20px]"
                alt="location icon"
              />
              <div className="flex flex-col">
                <span className="text-xs font-xs text-[#919196]">Location</span>
                <span className="font-medium text-base">India</span>
              </div>
            </div>

            <AutoComplete
              // options={doctorOptions}
              value={selectedDoctor}
              fetchData={doctorHospitalSearch}
              onValueChange={(e) => {
                console.log(e);
              }}
              onOptionClick={(combinedSlug) => {
                const splittedSlug = combinedSlug?.split("_");
                const doctorSlug = splittedSlug[0];
                const branchSlug = splittedSlug[1];
                const pathname = Routes.doctorDetailsPage.replace(
                  "/[doctorSlug]/[branchSlug]",
                  `/${doctorSlug}/${branchSlug}`
                );
                router.push(pathname);
              }}
              placeholder="Search doctor, clinic, hospital near by you"
              emptyMessage="No doctors found"
              disabled={false}
            />
          </div>
        </div>

        <div className="w-[38%] lg:w-[40%] order-1 md:order-2 xl:w-[400px] hidden md:flex items-baseline relative h-full -mr-7">
          <img
            src={doctorImage?.src}
            className="w-full absolute -bottom-4 object-cover xl:h-[520px]"
            alt="load..."
          />
        </div>
      </div>
    </section>
  );
}
