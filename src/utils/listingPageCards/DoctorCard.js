import React from 'react'
import searchIcon from "@/asset/Icons/search.svg";
import ratingIcon from "@/asset/Icons/rating.svg";
import doctorImageBig from "@/asset/Images/doctorImageBig.png";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import doctorBagV2Icon from "@/asset/Icons/doctorBagV2.svg";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
import doctorImage2 from "@/asset/Images/doctorImage2.png";
import hospitalImageBig from "@/asset/Images/hospitalImageBig.png";
import doctorIcon from "@/asset/Icons/doctor.svg";
import mapImage from "@/asset/Icons/mapImage.svg";
import filterDropdownButtonIcon from "@/asset/Icons/filterDropdownButton.svg";
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";



export default function DoctorCard() {
  return (
    <div
    onClick={() =>
      setPlaceLocation([20.993413468795033, 74.31671585316849])
    }
    style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
    className="w-[96%] px-6 py-4 mx-auto my-8 border-[1px] border-gray-500 rounded-[20px] flex items-center gap-x-16 "
  >
    {/* -----------left part------ */}
    <div className=" flex gap-x-8">
      {/* ----------image----------- */}
      <div className="rounded-full w-40 flexCenter ">
        <img
          src={doctorImageBig?.src}
          className="w-full "
          alt="load...."
        />
      </div>
      {/* ------details portion beside image---- */}
      <div className="flex flex-col gap-y-1">
        {/* -------------rating ------- */}
        <div className=" mt-5 ssm:mt-0  text-xs font-medium bg-[#F5F5F5]   px-2 asm:px-3 py-[5px]  rounded-[20px] flex items-center max-w-max ">
          <img
            src={ratingIcon?.src}
            className="w-[14px] mr-2"
            alt="load..."
          />
          4.8 (234 Review)
        </div>

        <p className="font-medium text-xl ssm:text-base asm:text-xl leading-tight text-center ssm:text-left">
          Dr. Nilesh Bhamare
        </p>

        <p className="flex flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-sm font-semibold ">
          Gynecologist
        </p>

        <p className="text-sm mt-1 font-medium flex items-center ">
          <img
            src={smallHatIcon?.src}
            className="h-[18px] mr-2"
            alt="load..."
          />
          M.B.B.S., M.D
        </p>

        <p className="text-sm mt-1 font-medium flex items-center">
          <img
            src={doctorBagV2Icon?.src}
            className="w-[18px] mr-2"
            alt="load..."
          />
          7 + Years experience
        </p>

        <p className="text-sm mt-1 font-medium flex items-center">
          <img
            src={hospitalIcon?.src}
            className="w-[18px] mr-2"
            alt="load..."
          />
          Bhamare Hospital
        </p>

        <p className="text-sm font-medium flex items-center">
          <img
            src={redGeoLocationIcon?.src}
            className="w-[12px] mr-2"
            alt="load..."
          />
          Kolkata, West Bangal
        </p>
      </div>
    </div>
    {/* ------------------right part------ */}
    <div className=" flexCenter  flex-col gap-y-2">
      <p className="text-[#01A400] font-medium text-xs">
        {" "}
        Available now book in Seconds
      </p>
      <button
        type="button"
        className="w-[190px] cursor-pointer py-[6px] flex items-center justify-center bg-[#01549A] text-base text-white font-medium rounded-[20px] "
      >
        Book Appointment
      </button>
      <button
        type="button"
        className="w-[190px] cursor-pointer  py-[6px] flex items-center justify-center font-medium bg-[#EFF8FF] text-base rounded-[20px]"
      >
        <img
          src={redGeoLocationIcon?.src}
          className="w-[12px] mr-2"
          alt="load..."
        />{" "}
        View in map
      </button>
    </div>
  </div>
  )
}