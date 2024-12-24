import React from 'react'

import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import hospitalImageBig from "@/asset/Images/hospitalImageBig.png";
import doctorIcon from "@/asset/Icons/doctor.svg";


export default function HospitalCard() {
  return (
    <div
            onClick={() =>
              setPlaceLocation([51.562861336440584, -0.2900755252434501])
            }
            style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
            className="w-[96%]  px-6 pt-6 py-9  mx-auto my-8 border-[1px] border-gray-500 rounded-[20px] flex items-center gap-x-16 "
          >
            {/* -----------left part------ */}
            <div className=" flex gap-x-8">
              {/* ----------image----------- */}
              <div className="rounded-full w-[180px]  flexCenter">
                <img
                  src={hospitalImageBig?.src}
                  className="w-full "
                  alt="load...."
                />
              </div>
              {/* ------details portion beside image---- */}
              <div className="flex flex-col gap-y-0">
                <p className="font-medium text-xl ssm:text-base asm:text-xl leading-tight text-center ssm:text-left">
                  Purva Maternity Hospital
                </p>

                <p className="flex flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-lg font-medium ">
                  Kala nagar
                </p>
                <p className="flex my-1 flex-wrap gap-y-2 justify-start   items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-xs leading-snug font-medium ">
                  Ear-Nose-Throat (ENT) Specialist, Dentist practitioner ,
                  General practitioner
                </p>

                <p className="my-2 text-sm  flex items-center">
                  <img
                    src={redGeoLocationIcon?.src}
                    className="w-[12px] mr-2"
                    alt="load..."
                  />
                  Kolkata, West Bangal
                </p>

                <p className="text-sm   flex items-center">
                  <img
                    src={doctorIcon?.src}
                    className="w-[18px] mr-2"
                    alt="load..."
                  />
                  1+ Doctors associated
                </p>
              </div>
            </div>
            {/* ------------------right part------ */}
            <div className=" flexCenter  flex-col gap-y-2">
              <button
                type="button"
                className="w-[190px] cursor-pointer py-[6px] flex items-center justify-center bg-primary text-base text-white font-medium rounded-[20px] "
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
