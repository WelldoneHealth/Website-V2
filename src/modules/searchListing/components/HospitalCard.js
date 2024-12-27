import React from 'react'

import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import doctorIcon from "@/asset/Icons/doctor.svg";
import { useRouter } from 'next/navigation';
import defaultClinic from "@/asset/Images/defaultClinic.png";

export default function HospitalCard({listInfo}) {
const router=useRouter()

  return (
    <div
            onClick={() =>
router.push(`/hospital-details/${listInfo?.slug}`)            }
            // style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
            className=" min-h-[120px]  sm:min-h-[170px] lg:min-h-[180px] max-h-[190px] mx-auto w-full xl:w-[96%] max-w-[800px]  xl:max-w-[900px] px-2 msm:px-4 lg:px-6  py-3 asm:py-4 lg:py-5    border-[1px] border-gray-500 rounded-[20px] flex flex-col sm:flex-row  md:items-start justify-between gap-y-4 "
          >
            {/* -----------left part------ */}
            <div className="  flex items-start gap-x-4 sm:gap-x-8 lg:gap-x-4 esm:gap-x-8">
              {/* ----------image----------- */}
              {/* <div className="rounded-full w-[180px] aspect-[1/1]   flexCenter overflow-hidden bg-[#EFF8FF] "> */}
              <div className="rounded-full size-20 ssm:size-24  asm:size-28 msm:size-32 sm:size-40 aspect-[1/1]   flexCenter overflow-hidden bg-[#EFF8FF] ">
                <img
                  src={listInfo?.logo ?? defaultClinic?.src }
                  className="w-full h-full object-cover object-center"
                  alt="load...."
                />
              </div>
              {/* ------details portion beside image---- */}
              <div className="flex flex-col flex-1   gap-y-2"> 
              <p className="font-medium text-sm asm:text-base msm:text-lg leading-tight  ">
             {listInfo?.establishment_name ?? ''}
        </p>

                <p className=" text-xs msm:text-sm font-medium ">
                 {listInfo?.branch  ?? ''}
                </p>
                {/* ---------------------for future-------------- */}
                <p className="hidden lg:max-w-[300px] esm:max-w-[400px] my-1 text-xs sm:text-base leading-tight ">
                  Ear-Nose-Throat (ENT) Specialist, Dentist practitioner ,
                  General practitioner<span className="font-bold text-red-700">NA</span>
                </p>

                { (listInfo?.city || listInfo?.state)  &&     <p className="mt-1  text-xs msm:text-sm flex gap-x-2 items-start">
          <img
            src={redGeoLocationIcon?.src}
            className="w-[12px] "
            alt="load..."
          />
      {listInfo?.city ?? ''}, {listInfo?.state ?? ''}
        </p>  }
{/* -------for future--------------- */}
                <p className="mt-1  text-xs msm:text-sm  hidden gap-x-2 items-baseline">
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
      {/* <button
        type="button"
        className="w-full msm:w-[45%] sm:w-[190px] cursor-pointer  py-2 flex items-center justify-center text-sm font-medium bg-[#EFF8FF]  rounded-[20px]"
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
  )
}
