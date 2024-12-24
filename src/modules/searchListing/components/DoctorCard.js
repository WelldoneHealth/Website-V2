"use client"
import React, { useEffect, useState } from 'react'
import ratingIcon from "@/asset/Icons/rating.svg";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import doctorBagV2Icon from "@/asset/Icons/doctorBagV2.svg";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export default function DoctorCard({listInfo,branchSlug=null}) {
  // console.log("Branch Slug Debug:", { branchSlug, branchSlugFromList: listInfo?.branch_slug });


  const router=useRouter()  
const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)"); // Small screen breakpoint
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);

    // Check initially
    handleResize();

    // Add listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleClick = () => {
    // console.log("the branch slug is",branchSlug)
    const resolvedBranchSlug = listInfo?.branch_slug || branchSlug; 
 router.push(`/doctor-details/${listInfo?.slug}/${resolvedBranchSlug}`)
  };

  return (
    <div
    onClick={isSmallScreen ? handleClick : undefined}
    style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
    className="w-full xl:w-[96%] mx-auto max-w-[800px]  xl:max-w-[900px] px-2 msm:px-4 lg:px-6  py-3 asm:py-4 lg:py-5    border-[1px] border-gray-500 rounded-[20px] flex flex-col sm:flex-row  md:items-center justify-between gap-y-4  "
  >
    {/* -----------left part------ */}
    <div className=" flex items-center gap-x-4 sm:gap-x-8 lg:gap-x-4 esm:gao-x-8">
      {/* ----------image----------- */}
      {/* <div className="rounded-full w-20  ssm:w-24 bg-red-900  asm:w-28 msm:w-32  sm:w-40 flexCenter overflow-hidden  ">
        <img
          src={listInfo?.profile_picture}
          className="w-full "  
          alt="load...."
        />
      </div> */}
      <div className="rounded-full size-20 ssm:size-24  asm:size-28 msm:size-32 sm:size-40 flexCenter bg-[#EFF8FF] overflow-hidden">
  <img
    src={listInfo?.profile_picture}
    className="w-full h-full object-cover object-center "
    alt="load...."
  />
</div>

      {/* ------details portion beside image---- */}
      <div className="flex-1 flex flex-col gap-y-1">
        {/* -------------rating ---flex for further use---- add max-ssm:hidden---- */}
        <div className=" text-[11px] asm:text-xs font-medium  bg-[#F5F5F5]   px-2 asm:px-3 py-1 asm:py-[5px]  rounded-[20px] hidden items-center max-w-max ">
          <img
            src={ratingIcon?.src}
            className="w-[12px] asm:w-[14px] mr-2"
            alt="load..."
          />
         <span className=''> 4.8 (234 Review)<span className="font-bold text-red-700">NA</span></span>
         {/* <span className='asm:hidden'> 4.8</span> */}
        </div>

        <p className="font-medium text-sm asm:text-base msm:text-lg leading-tight  capitalize ">
        {`${listInfo?.suffix ?? ''} ${listInfo?.first_name ?? ''}  ${listInfo?.middle_name ?? ''} ${listInfo?.last_name  ?? ''} `}
        </p>

        <p className="flex gap-y-2 justify-start   text-xs msm:text-sm  capitalize ">
          {listInfo?.specialty ?? "" }
        </p>

       {listInfo?.qualification && <p className="text-xs msm:text-sm asm:mt-1 flex gap-x-2 items-center ">
          <img
            src={smallHatIcon?.src}
            className="h-[12px] asm:h-[16px] "
            alt="load..."
          />
         {listInfo?.qualification ?? ""}
        </p>}

       {listInfo?.total_experience && <p className="text-xs msm:text-sm  asm:mt-1 flex gap-x-2 items-center">
          <img
            src={doctorBagV2Icon?.src}
            className="w-[14px] asm:w-[16px] "
            alt="load..."
          />
          {listInfo?.total_experience ? `${listInfo?.total_experience} + Years experience` : ''} 
        </p>}


{/* -----------------for future ------------flex max-ssm:hidden */}
      {listInfo?.branch__establishment_name &&  <p className="hidden text-xs msm:text-sm  asm:mt-1   gap-x-2 items-start">
          <img
            src={hospitalIcon?.src}
            className=" w-[18px] "
            alt="load..."
          />
       {listInfo?.branch__establishment_name ?? ''}
        </p>}

      { (listInfo?.city || listInfo?.state)  &&   <p className="mt-1 max-sm:hidden text-sm  flex gap-x-2 items-start capitalize">
          <img
            src={redGeoLocationIcon?.src}
            className="w-[12px] "
            alt="load..."
          />
       {listInfo?.city ?? ''}, {listInfo?.state ?? ''}
        </p>}
      </div>
    </div>
    {/* ------------------right part------ */}
    <div className="max-lg:hidden max-sm:w-full flexCenter flex-col msm:flex-row max-sm:gap-x-6  sm:flex-col  gap-y-4 sm:gap-y-2">
      <p className="text-[#01A400]  max-sm:hidden font-medium text-xs">
        {" "}
        Available now book in Seconds
      </p>
      <Link href={`/doctor-details/${listInfo?.slug}/${listInfo?.branch_slug || branchSlug}`} >
      <button
        type="button"
        className="w-full msm:w-[45%]  sm:w-[190px] cursor-pointer py-2 flex items-center justify-center bg-primary text-sm text-white font-normal rounded-[20px] "
      >
        Book Appointment
      </button>
      </Link>
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
