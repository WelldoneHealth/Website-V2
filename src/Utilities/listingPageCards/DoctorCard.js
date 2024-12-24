import React from "react";
import ratingIcon from "@/asset/Icons/rating.svg";
import doctorImageBig from "@/asset/Images/doctorImageBig.png";
import doctorBagV2Icon from "@/asset/Icons/doctorBagV2.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";

import { useRouter } from "next/navigation";

export default function DoctorCard({ doctorDetails, branch }) {
  const router = useRouter();
  return (
    <div
      // onClick={() => setPlaceLocation([20.993413468795033, 74.31671585316849])}
      style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
      className="w-full xl:w-[96%] max-w-[800px] px-4 asm:px-6 py-4 asm:py-7   border-[1px] border-gray-500 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-y-4  "
    >
      {/* -----------left part------ */}
      <div className=" flex items-center gap-x-3 asm:gap-x-8">
        {/* ----------image----------- */}
        <div className="rounded-full  w-20 asm:w-32 sm:w-40 flexCenter  ">
          <img
            src={doctorDetails?.profile_picture ?? doctorImageBig?.src}
            className="w-full "
            alt="load...."
          />
        </div>
        {/* ------details portion beside image---- */}
        <div className="flex flex-col gap-y-1">
          {/* -------------rating ------- */}
          <div className=" text-xs font-medium  asm:bg-[#F5F5F5]   px-2 asm:px-3 py-[5px]  rounded-[20px] flex items-center max-w-max ">
            <img
              src={ratingIcon?.src}
              className="w-[14px] mr-2"
              alt="load..."
            />
            <span className="max-asm:hidden"> 4.8 (234 Review)</span>
            <span className="asm:hidden"> 4.8</span>
          </div>

          <p className="font-medium text-base asm:text-xl leading-tight text-center ssm:text-left">
            Dr.{" "}
            {[
              doctorDetails?.first_name ?? "",
              doctorDetails?.middle_name ?? "",
              doctorDetails?.last_name ?? "",
            ]?.join(" ")}
          </p>

          {/* <p className="flex flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-xs asm:text-sm font-semibold ">
            Gynecologist
          </p> */}

          {doctorDetails?.qualification && (
            <p className="text-xs asm:text-sm mt-1 font-medium flex items-center ">
              <img
                src={smallHatIcon?.src}
                className="h-[18px] mr-2"
                alt="load..."
              />
              {doctorDetails?.qualification}
            </p>
          )}

          {doctorDetails?.experience && (
            <p className="text-xs asm:text-sm mt-1 font-medium flex items-center">
              <img
                src={doctorBagV2Icon?.src}
                className="w-[18px] mr-2"
                alt="load..."
              />
              {doctorDetails?.experience} experience
            </p>
          )}
          {/* <p className=" max-sm:hidden text-sm font-medium flex items-center">
            <img
              src={redGeoLocationIcon?.src}
              className="w-[12px] mr-2"
              alt="load..."
            />
            Kolkata, West Bangal
          </p> */}
        </div>
      </div>
      {/* ------------------right part------ */}
      <div className="max-msm:hidden max-sm:w-full flexCenter flex-col msm:flex-row max-sm:gap-x-6  sm:flex-col  gap-y-4 sm:gap-y-2">
        <p className="text-[#01A400]  max-sm:hidden font-medium text-xs">
          {" "}
          Available now book in Seconds
        </p>
        {/* <Link href="/checkout" > */}
        <button
          onClick={() => {
            router.push(`/doctor-details/${doctorDetails?.slug}/${branch}`);
          }}
          type="button"
          className="w-full msm:w-[45%]  sm:w-[190px] cursor-pointer py-2 flex items-center justify-center bg-primary text-base text-white font-medium rounded-[20px] "
        >
          Book Appointment
        </button>
        {/* </Link> */}
        {/* <button
          type="button"
          className="w-full msm:w-[45%] sm:w-[190px] cursor-pointer  py-2 flex items-center justify-center font-medium bg-[#EFF8FF] text-base rounded-[20px]"
        >
          <img
            src={redGeoLocationIcon?.src}
            className="w-[12px] mr-2"
            alt="load..."
          />{" "}
          View in map
        </button> */}
      </div>
    </div>
  );
}
