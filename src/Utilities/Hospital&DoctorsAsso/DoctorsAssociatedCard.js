import React from 'react'
import ratingIcon from "@/asset/Icons/rating.svg"
import hospitalIcon from "@/asset/Icons/hospital_icon.svg"
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg"
import doctorImage2 from "@/asset/Images/doctorImage2.png"



export default function DoctorsAssociatedCard() {

  return (
    <div style={{ boxShadow: '0px 0px 4px 1px #00000040' }} className="w-[390px]  rounded-[20px] px-5 py-8">
    <div className="mb-8 w-full flex gap-x-4 ">
      <div className="w-[120px] h-[120px] relative rounded-full ">
        <img src={doctorImage2?.src}  className='w-full' alt="load..."   />
      </div>
      <div className="space-y-2">
<div className="text-xs font-medium bg-[#F5F5F5] px-3 py-1 inline-block rounded-[20px]">
<span className="mr-2 relative w-[14px] h-[14px] inline-block">
            <img  src={ratingIcon?.src} />
          </span>4.8 (234 Review)
</div>
       
        <p className="font-medium text-xl leading-tight">
        Dr. Nilesh Bhamare
        </p>
       
       <p className='flex items-center text-sm font-semibold '>Gynecologist <span className='mx-2 rounded-[20px] text-white px-2 py-[2px] bg-[#01549A] '>7 + Years Exp</span></p>


        <p className="text-sm mt-1 font-semibold">
          <span className="mr-2 relative w-[18px] h-[18px] inline-block">
            <img  src={hospitalIcon?.src} />
          </span>
          Bhamare Hospital
        </p>

        <p className="text-sm font-semibold">
          <span className="mr-3 relative w-[12px] h-[15px] inline-block">
            <img  src={redGeoLocationIcon?.src} />
          </span>
          Kolkata, West Bangal
        </p>
      </div>
    </div>
    <div className=" py-2 text-base rounded-[20px] text-center bg-[#EFF8FF]">
      {" "}
      <span className="text-[#01549A] font-medium">View Details</span>
    </div>
  </div>
  )
}
