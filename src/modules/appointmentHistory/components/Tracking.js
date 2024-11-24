import React from 'react'

export default function Tracking() {
  return (
    <div className=" hidden border-[1px] border-[#DADADA] px-8 py-5 rounded-[15px]">
<p className='text-base  mb-6 font-medium '>Track appointment</p>
<div className="w-full space-y-3">
    <div className="w-full flex gap-x-28 text-sm text-wrap text-center items-start leading-tight">
        <p>Appointment place</p>
        <p>Schedule for</p>
        <p>Visit on Office</p>
        <p>Treatement Procedure</p>
        <p>Complete</p>
    </div>
    <div className="w-[90%] mx-auto  flex items-center">
{/* <div className="size-[18px] bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[3px] border-[#01A400]"></div> */}
<div className="size-[18px] bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>

    </div>
     <div className="w-full flex gap-x-[110px]  text-sm text-wrap text-center items-start leading-tight">
        <p>11:48 aM Tue, 01 Feb </p>
        <p>11:48 amTue, 01 Feb</p>
        <p>11:48 amTue, 01 Feb</p>
        <p>01:13 PM Wed, 24 Nov</p>
        <p>01:13 PM Wed, 24 Nov</p>
    </div>
</div>
</div>
  )
}
