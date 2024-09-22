import React from 'react'
import searchIcon from "@/asset/Icons/search.svg"
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


export default function page() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-1  asm:px-3 lg:px-0   ">


{/* --------------navbars--------------- */}
<div style={{boxShadow: "0px 0px 4px 1px #00000040"}} className="w-full my-6 px-4 py-2 bg-white  rounded-[20px] flex justify-between items-center ">
    
<div className="w-[360px] px-3 py-[6px] flex items-center justify-center rounded-[20px] gap-x-1 text-sm  bg-[#E5E5E5]">
    <input type="text" className='bg-transparent text-[#6C6C6C] outline-none font-medium w-[95%]' placeholder='Search symptoms, disease, specialty, Visit Reason' /> <img src={searchIcon?.src} className='w-4 cursor-pointer'  alt="load..."  />

</div>

<div className="text-[#01549A] text-base font-medium  flex justify-center items-center gap-x-3">
    <p>Filter by:</p>
    <div className="px-3 py-[6px] rounded-[20px] border-[1px] border-[#01549A] ">
    Select a Specialty  <button type='button' className='cursor-pointer ml-2'><img src={filterDropdownButtonIcon?.src} className='' alt="load..." /></button>
    </div>

    <div className="px-3 py-[6px] rounded-[20px] border-[1px] border-[#01549A] ">
    Select your Distance​ <button type='button' className='cursor-pointer ml-2'><img src={filterDropdownButtonIcon?.src} className='' alt="load..." /></button>
    </div>

    <div className="px-3 py-[6px] rounded-[20px] border-[1px] border-[#01549A] ">
    Select Sort​  <button type='button' className='cursor-pointer ml-2'><img src={filterDropdownButtonIcon?.src} className='' alt="load..." /></button>
    </div>

</div>

<div className="flex justify-center items-center gap-x-3">
<div className="px-3 py-[6px] rounded-[20px] border-[1px] text-white font-semibold bg-[#01549A]">
Today, 24 Sept
  {/* <button type='button' className='cursor-pointer ml-2'><img src={filterDropdownButtonIcon?.src} className='' alt="load..." /></button> */}
    </div>

    <div className="px-3 py-[6px] rounded-[20px] text-[#01549A] bg-[#EBEBEB] font-medium border-[1px] border-[#01549A] ">
    Next available
    </div>
</div>

</div>

{/* -------------listing page---------- */}
<div className="w-full flex my-6 ">

<div className="w-full min-h-screen  lg:w-[65%] ">

{/* ----------------doctor card------------- */}
<div style={{boxShadow: "0px 0px 4px 1px #00000040"}} className="w-[96%] px-6 py-4 mx-auto my-8 border-[1px] border-gray-500 rounded-[20px] flex items-center gap-x-16 ">
    {/* -----------left part------ */}
<div className=" flex gap-x-8">
    {/* ----------image----------- */}
    <div className="rounded-full w-40 flexCenter">
        <img src={doctorImageBig?.src} className='w-full ' alt="load...."  />
    </div>
      {/* ------details portion beside image---- */}
    <div className="flex flex-col gap-y-1" >
      {/* -------------rating ------- */}
    <div className=" mt-5 ssm:mt-0  text-xs font-medium bg-[#F5F5F5]   px-2 asm:px-3 py-[5px]  rounded-[20px] flex items-center max-w-max ">
              <img src={ratingIcon?.src} className='w-[14px] mr-2' alt="load..." />
            4.8 (234 Review)
          </div>

          <p className="font-medium text-xl ssm:text-base asm:text-xl leading-tight text-center ssm:text-left">
            Dr. Nilesh Bhamare 
          </p>

          <p className="flex flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-sm font-semibold ">
            Gynecologist   
          </p>

          <p className="text-sm mt-1 font-medium flex items-center ">
              <img src={smallHatIcon?.src} className='h-[18px] mr-2' alt="load..." />
            M.B.B.S., M.D
          </p>

          <p className="text-sm mt-1 font-medium flex items-center">
              <img src={doctorBagV2Icon?.src} className='w-[18px] mr-2' alt="load..."  />
            7 + Years experience
          </p>

          <p className="text-sm mt-1 font-medium flex items-center">
              <img src={hospitalIcon?.src} className='w-[18px] mr-2' alt="load..." />
            Bhamare Hospital
          </p>

          <p className="text-sm font-medium flex items-center">
              <img  src={redGeoLocationIcon?.src} className='w-[12px] mr-2' alt="load..." />
            Kolkata, West Bangal
          </p>


    </div>
</div>
{/* ------------------right part------ */}
<div className=" flexCenter  flex-col gap-y-2">
<p className='text-[#01A400] font-medium text-xs'> Available now book in Seconds</p>
<button type='button'  className='w-[190px] cursor-pointer py-[6px] flex items-center justify-center bg-[#01549A] text-base text-white font-medium rounded-[20px] '  >Book Appointment</button>
<button type='button'  className='w-[190px] cursor-pointer  py-[6px] flex items-center justify-center font-medium bg-[#EFF8FF] text-base rounded-[20px]'  >
              <img  src={redGeoLocationIcon?.src} className='w-[12px] mr-2' alt="load..." /> View in map
          </button>
</div>
</div>

{/* ----------------hospital card--------------- */}
<div style={{boxShadow: "0px 0px 4px 1px #00000040"}} className="w-[96%]  px-6 pt-6 py-9  mx-auto my-8 border-[1px] border-gray-500 rounded-[20px] flex items-center gap-x-16 ">
    {/* -----------left part------ */}
<div className=" flex gap-x-8">
    {/* ----------image----------- */}
    <div className="rounded-full w-[180px]  flexCenter">
        <img src={hospitalImageBig?.src} className='w-full ' alt="load...."  />
    </div>
      {/* ------details portion beside image---- */}
    <div className="flex flex-col gap-y-0" >
     

          <p className="font-medium text-xl ssm:text-base asm:text-xl leading-tight text-center ssm:text-left">
          Purva Maternity Hospital
          </p>

          <p className="flex flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-lg font-medium ">
          Kala nagar  
          </p>
          <p className="flex my-1 flex-wrap gap-y-2 justify-start   items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-xs leading-snug font-medium ">
          Ear-Nose-Throat (ENT) Specialist, Dentist practitioner , General practitioner   
          </p>

          <p className="my-2 text-sm  flex items-center">
              <img  src={redGeoLocationIcon?.src} className='w-[12px] mr-2' alt="load..." />
            Kolkata, West Bangal
          </p>

          <p className="text-sm   flex items-center">
              <img src={doctorIcon?.src} className='w-[18px] mr-2' alt="load..." />
              1+ Doctors associated
          </p>

        


    </div>
</div>
{/* ------------------right part------ */}
<div className=" flexCenter  flex-col gap-y-2">
<button type='button'  className='w-[190px] cursor-pointer py-[6px] flex items-center justify-center bg-[#01549A] text-base text-white font-medium rounded-[20px] '  >Book Appointment</button>
<button type='button'  className='w-[190px] cursor-pointer  py-[6px] flex items-center justify-center font-medium bg-[#EFF8FF] text-base rounded-[20px]'  >
              <img  src={redGeoLocationIcon?.src} className='w-[12px] mr-2' alt="load..." /> View in map
          </button>
</div>
</div>

</div>


{/* ----------------map portions---------- */}
<div className="flex-1 lg:w-[90%] h-[650px]  ">

     <img src={mapImage?.src} className='w-full'  alt="load..."  />

</div>

</div>


   </div>
  )
}
