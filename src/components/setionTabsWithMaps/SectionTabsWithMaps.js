import React from "react";
import phoneCallIcon from "@/asset/Icons/phoneCall.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
import ratingIcon from "@/asset/Icons/rating.svg";
import outlineClockIcon from "@/asset/Icons/outlineClock.svg";
import lunchBoxIcon from "@/asset/Icons/lunchBox.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import { toast } from "sonner";
import { capitalCase } from 'change-case';
import moment from "moment";

import mapImage from "@/asset/Images/map.png";
import Link from "next/link";


export default function SectionTabsWithMaps({ tab,tabDetails }) {

  const handleCopy = async (contactToCopy) => {
    try {
      await navigator.clipboard.writeText("Copy ho gaya");
      // Show alert only after copying is successful
      toast.success("Contact copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy!", error);
      toast.error("Failed to copy contact. Please try again.");
    }
  };
  
  return (
    <div className="w-full mt-7 mb-2 flex flex-col ">
      <div className=" w-full flex my-2">
        <div className="w-full ">
          <h3 className="text-[20px] asm:text-[24px] sm:text-2xl text-[#01549A] font-semibold">
            <Link href={`/hospital-details/${tabDetails?.branch_slug}`}>
           {tabDetails?.clinic_name} </Link>
          </h3>
          <Link href={`/hospital-details/${tabDetails?.branch_slug}`} className="block">
          <p className="w-full my-3 text-sm flex capitalize">    
            <img
              src={hospitalOutlineIcon?.src}
              className="w-4 mr-3"
              alt="load..."
            />
{tabDetails?.clinic_address.toLowerCase()}
          </p></Link>
          {/* -------------------flex------------------ */}
          <div className="w-full   my-2 bg-[#F5F5F5] hidden max-w-max gap-x-2 text-xs font-medium px-4 py-1 rounded-[20px]">
            <div className="flex gap-x-1">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <img
                  key={index}
                  src={ratingIcon?.src}
                  className="w-[14px]"
                  alt="load..."
                />
              ))}
            </div>
            <span>4.8 (234 Review)</span>{" "}
            <img
              src={sliderArrowIcon?.src}
              className=" w-[6px] cursor-pointer rotate-90"
              alt="load..."
            />
          </div>
        </div>
        <div className="hidden">
          {/* ---------------------calling functionality-------- */}
          <div onClick={handleCopy} className="w-10 h-10 text-2xl flexCenter rounded-full bg-[#EFF8FF]  text-white font-medium cursor-pointer" >
            <img src={phoneCallIcon?.src} className=""  alt="load..." /> 
          </div>
          {/* <p>Voice Call</p> */}
        </div>
      </div>
     {/* ---------------timings---------- */}
      { tabDetails?.timings[0]?.timing_json &&  <> <hr />    
    <div className="w-full  msm:p-3  ">  
        <p className="font-medium text-lg"> Timings</p>
        <div className="my-4 flex gap-x-3 overflow-x-auto whitespace-nowrap custom-scrollbar-hide">
          {tabDetails?.timings[0]?.timing_json?.map((item, index) => (
            <div
              key={index}
              className="border-[1px] min-w-[150px]  border-[#CFCFCF] rounded-[10px] overflow-hidden flex-shrink-0"
            >
              <p className=" w-full text-sm bg-[#EFF8FF] py-1 font-medium text-center">
              {item?.day}
              </p>
              <div className="w-full p-2 space-y-1">
              {item?.is_open ? <>  <div className="flex gap-x-2 text-xs font-normal">
                  <img
                    src={outlineClockIcon?.src}
                    className=" w-[12px]"
                    alt="load..."
                  />
                  { moment(item?.start_time, "HH:mm:ss").format("hh:mm A")} - { moment(item?.end_time, "HH:mm:ss").format("hh:mm A")} 
                </div>
                <div className="flex gap-x-2 text-xs font-normal">
                  <img
                    src={lunchBoxIcon?.src}
                    className="w-[12px] "
                    alt="load..."
                  />
   { moment(item?.lunch_start_time, "HH:mm:ss").format("hh:mm A")} - { moment(item?.lunch_end_time, "HH:mm:ss").format("hh:mm A")} </div></> : <p className="text-medium text-xs w-full text-center my-auto block" >Closed</p>}
              </div>
            </div>
          ))} 
        </div>
      </div> </>  }
      {/* ------------maps---------------- */}
    {tabDetails?.map_setting[0]?.iframe ? <div className="w-full my-2 h-[320px] rounded-[20px] overflow-hidden" dangerouslySetInnerHTML={{
      __html: tabDetails?.map_setting[0]?.iframe.replace(
        /width="\d+"|height="\d+"/g,
        'width="100%" height="100%"'
      ),
    }}   >  
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13900.252752700126!2d79.95980878916262!3d29.42694955218887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0dd9bfc5bd7ed%3A0x516f7f48dcd10c4a!2sSundungra%2C%20Uttarakhand%20262528!5e0!3m2!1sen!2sin!4v1726923728002!5m2!1sen!2sin"
          //   width="600"
          //   height="450"
          className="w-full h-full"
          style={{ border: 0 }}
          //   loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>   :  <div className="w-full flex flex-col items-center mb-3" >
      <img src={mapImage?.src} className="w-[400px] block " alt="load.." />
      <p className=" text-base font-medium text-center" >No Map Found</p>
      </div>  }
    </div>
  );
}
