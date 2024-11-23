"use client"
import React, { useEffect, useState } from "react";
import refreshArrowIcon from "@/asset/Icons/refreshArrow.svg";
import uploadIcon from "@/asset/Icons/upload.svg";
import cardArrow from "@/asset/Icons/cardArrow.svg";
import successTickIcon from "@/asset/Icons/successTick.svg";
import infoIcon from "@/asset/Icons/info.svg";
import rxNoteIcon from "@/asset/Icons/rxNote.svg";
import crossIcon from "@/asset/Icons/cross.svg";
import doctorAppointmentImage from "@/asset/Images/doctorAppointmentImage.png";
import doctorAppointmentImage2 from "@/asset/Images/doctorAppointmentImage2.png";
import InfoBar from "./InfoBar";
import Appo_CardBtn1 from "./Appo_CardBtn1";
import Msg from "./Msg";
import moment from "moment";
import { useRouter } from "next/navigation";


export default function CompletedAppo_Cards({appointmentCardData,status}) {
const router=useRouter()  

const appo_data1=[
  {
    boldText: "Patient-",
    text:`${appointmentCardData?.patient_first_name ?? ''} ${appointmentCardData?.patient_middle_name ?? ''} ${appointmentCardData?.patient_last_name ?? ''}`
  },
  {
    boldText: "Appointment id-",
    text:appointmentCardData?.id
  },
  {
    boldText: "Date-",
    text: moment(appointmentCardData?.appointment_date).format("DD/MM/YYYY")
  }
]

const appo_data2=[
  {
    boldText:"Reason-",
    text:appointmentCardData?.reason
  }, {
    boldText:"Payment Method-",
    text:"Pay on Conter"
  },
  {
    boldText: "Total-",
    text: `₹  ${Number(appointmentCardData?.amount)}`
  }
]


  return (
    <div
      style={{ boxShadow: " 1px 1px 4px 2px #8383834D" }}
      className="w-full  max-w-[1000px]  md:space-y-2 px-3 ssm:px-2 asm:px-4 py-2 max-asm:pb-3 asm:py-4 rounded-[15px] sm:border-[0.5px] border-[#DADADA]"
    >
      {/* --------------cards text---------- */}
      <div className="w-full max-lsm:hidden max-w-[800px] max-sm:hidden flex  items-start flex-wrap  gap-x-11 gap-y-3  justify-between  text-base lg:text-[13px] esm:text-sm ">
        {/* -------writing 1 st part------- */}
        <div className="font-normal text-nowrap space-y-1">
        {appo_data1.map((item,index)=><p key={index}>
            <span className="font-semibold">{item.boldText}</span> {item.text}
          </p>)}
        </div>
        {/* ------------writing 2 nd part-------------- */}
        <div className="font-normal text-nowrap space-y-1">
          {appo_data2.map((item,index)=><p key={index}>
            <span className="font-semibold">{item.boldText}</span> {item.text}
          </p>)}
          
        </div>
        {/* ---------------writing 3 rd part----------- */}
        <button onClick={()=>router.push({
      pathname: '/checkout', 
      query: { id: 123, name: 'John' },
    })}  className="mt-1 text-[#01549A] font-medium px-2 md:px-4 py-2  rounded-[10px] border-[1px] border-[#01549A]  text-sm lg:text-xs esm:text-sm flex justify-center items-center text-nowrap ">
          {" "}
          + Show Appointment details
        </button>
      </div>

      {/* -----------main appointement section-------- */}
      <div className="w-full  lsm:p-4 lsm:border-[1px] border-[#DADADA] rounded-[15px] ">

        {/* -------small info bar----------- */}
        <InfoBar  msg="Completed on "  appointmentDate={moment(appointmentCardData?.appointment_date).format("ddd DD MMM, YYYY")} appointmentStatus={appointmentCardData?.is_cancelled} />

        <div className=" w-full">
          <div className="w-full  mt-2 asm:mt-4 flex gap-x-3 sm:gap-x-7 ">

            {/* -----------1st part------------- */}
            <div className=" max-ssm:hidden w-[120px] asm:w-[150px] sm:w-[180px] md:w-[205px]  overflow-hidden  rounded-full ">
              <img
                src={appointmentCardData?.patient_avatar}
                className=" w-full "
                alt="load..."
              />
            </div>
            {/* ---------2nd part-------------- */}
            <div className=" w-full  ">
              <div className="w-full flex   gap-y-3 justify-between  max-md:flex-wrap ">
                <div className="  space-y-1  lsm:text-nowrap   md:space-y-2">
                  <p className="tet-base asm:text-lg msm:text-[20px] font-medium">
                   {`${appointmentCardData?.doctor_suffix} ${appointmentCardData?.doctor_name} ${appointmentCardData?.doctor_middle_name} ${appointmentCardData?.doctor_last_name}`}
                  </p>
                  <p className="text-xs asm:text-sm msm:text-base md:text-sm">
                   ( Cardiologist Surgery, General Surgeon) <span className="font-bold text-red-700">NA</span>
                  </p>
                  <p className="text-xs asm:text-sm msm:text-base md:text-sm">
                    Shidhivinayak Hospital - Dhule <span className="font-bold text-red-700">NA</span>
                  </p>
                  <p className="pt-1 text-xs asm:text-sm msm:text-base md:hidden">
                    Book for Rakesh Nandre (Self) <span className="font-bold text-red-700">DB</span> 
                  </p>
                </div>
                {/* ------------------2 prescription buttons--------- */}
                <div className=" max-esm:hidden flex flex-col  items-center gap-x-5 gap-y-3">
                 <Appo_CardBtn1 text="Prescription" linkTo={appointmentCardData?.prescription_link ?? "/"} isNull={appointmentCardData?.prescription_link ? false : true}/>
                 {/* <Appo_CardBtn1 /> */}
                </div>
              </div>

              <div className="mt-4 w-full max-md:hidden  space-y-2">
                <button
                  type="button"
                  className=" w-[230px] text-sm font-semibold bg-primary rounded-[20px] text-white py-[6px] text-center"
                >
                  Book Follow-Up
                </button>
                <p className="flex items-center text-sm">
                  <img src={infoIcon?.src} className="mr-2 " alt="load..." />{" "} 
                  Follow before – { moment(appointmentCardData?.appointment_date).format("DD/MM/YYYY")}, 20 days remaining​  <span className="font-bold text-red-700">DB</span>
                </p>

                {/* --------------message---------------- */}
              <div className="w-full max-lsm:hidden"> <Msg /></div>

              </div>
            </div>
            {/* ------------------3rd part------------- */}
<div className=" flex items-center md:hidden msm:pr-1 sm:pr-4 ">
<img src={cardArrow?.src} className="block h-5 sm:h-10  cursor-pointer" alt="load..."  />
</div>

          </div>
        </div>
      </div>
      {/* --------------------message in smallerscreen---------------- */}
      <div className="w-full pt-2  max-md:hidden block lsm:hidden"> <Msg /></div>
    </div>
  );
}
