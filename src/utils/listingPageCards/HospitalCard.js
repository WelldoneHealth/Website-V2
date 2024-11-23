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

export default function HospitalCard({listInfo}) {
  return (
    <div
            onClick={() =>
              setPlaceLocation([51.562861336440584, -0.2900755252434501])
            }
            style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
            className="w-full mx-auto xl:w-[96%] max-w-[800px]  xl:max-w-[900px] px-2 msm:px-4 lg:px-6  py-3 asm:py-4 lg:py-5    border-[1px] border-gray-500 rounded-[20px] flex flex-col sm:flex-row  md:items-center justify-between gap-y-4 "
          >
            {/* -----------left part------ */}
            <div className=" flex items-start gap-x-4 sm:gap-x-8 lg:gap-x-4 esm:gap-x-8">
              {/* ----------image----------- */}
              <div className="rounded-full w-[180px]  flexCenter">
                <img
                  src={listInfo?.page_setup__page_logo}
                  className="w-full "
                  alt="load...."
                />
              </div>
              {/* ------details portion beside image---- */}
              <div className="flex flex-col  gap-y-0">
              <p className="font-medium text-sm asm:text-base msm:text-lg leading-tight  ">
             {listInfo?.establishment_name}
        </p>

                <p className=" text-xs msm:text-sm font-medium ">
                 {listInfo?.branch}
                </p>
                <p className=" lg:max-w-[300px] esm:max-w-[400px] my-1 text-xs sm:text-base leading-tight ">
                  Ear-Nose-Throat (ENT) Specialist, Dentist practitioner ,
                  General practitioner<span className="font-bold text-red-700">NA</span>
                </p>

                <p className="mt-1  text-xs msm:text-sm flex gap-x-2 items-start">
          <img
            src={redGeoLocationIcon?.src}
            className="w-[12px] "
            alt="load..."
          />
      {listInfo?.state__name}<span className="font-bold text-red-700">DB</span>
        </p>

                <p className="mt-1  text-xs msm:text-sm  flex gap-x-2 items-baseline">
                  <img
                    src={doctorIcon?.src}
                    className="w-[14px]"
                    alt="load..."
                  />
                  1+ Doctors associated<span className="font-bold text-red-700">NA</span>
                </p>
              </div>
            </div>
            {/* ------------------right part------ */}
            <div className="max-lg:hidden max-sm:w-full flexCenter flex-col msm:flex-row max-sm:gap-x-6  sm:flex-col  gap-y-4 sm:gap-y-2">
      {/* <Link href="/checkout" > */}
      <button
        type="button"
        className="w-full msm:w-[45%]  sm:w-[190px] cursor-pointer py-2 flex items-center justify-center bg-primary text-sm text-white font-normal rounded-[20px] "
      >
        Book Appointment
      </button>
      {/* </Link> */}
      <button
        type="button"
        className="w-full msm:w-[45%] sm:w-[190px] cursor-pointer  py-2 flex items-center justify-center text-sm font-medium bg-[#EFF8FF]  rounded-[20px]"
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
