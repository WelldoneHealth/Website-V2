import React from 'react'
import pinedIcon from "@/asset/Icons/pined.svg";

export default function OfficeSafetyPrecautions() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-x-2 my-7 px-4 py-3 bg-[#F4F4F4] rounded-[20px]">
    <img src={pinedIcon?.src} className="max-md:hidden md:w-10  " alt="load..." />
    <div className="space-y-1">
      <p className="text-[15px] md:text-lg  font-medium">Office Safety Precautions</p>
      <p className="text-xs md:text-sm text-[#80858E]">
        Message from the Office of Dr. Rakesh Nandre
      </p>
      <p className="w-full text-xs md:text-sm font-medium">
        We follow all CDC guidelines, including sterilization, protective equipment, and maintaining social distancing of interest.
      </p>
    </div>
  </div>
  )
}
