import React from 'react'
import refreshArrowIcon from "@/asset/Icons/refreshArrow.svg"
import uploadIcon from "@/asset/Icons/upload.svg"
import successTickIcon from "@/asset/Icons/successTick.svg"
import infoIcon from "@/asset/Icons/info.svg"
import rxNoteIcon from "@/asset/Icons/rxNote.svg"
import crossIcon from "@/asset/Icons/cross.svg"
import doctorAppointmentImage from "@/asset/Images/doctorAppointmentImage.png"
import doctorAppointmentImage2 from "@/asset/Images/doctorAppointmentImage2.png"

export default function UpcomingAppo_Card() {
  return (
    <div className="px-5  py-2 pb-7 w-full space-y-3  border-b-[1px] border-[#545454] ">
    <p className='text-lg md"text-[20px]'>Upcoming Appointments</p>
    {/* -----------appointments cards sections---------- */}
    <div style={{boxShadow:" 1px 1px 4px 2px #8383834D"}} className="w-full space-y-3  px-5 py-4 rounded-[15px] border-[0.5px] border-[#DADADA]">
  {/* --------------cards text---------- */}
     <div className="w-full flex gap-x-16 text-sm">
            {/* -------writing 1 st part------- */}
            <div className="font-normal">
<p><span className='font-semibold'>Patient-</span> Rakesh Nandre, (Me)</p>
<p><span className='font-semibold' >Appointment id-</span> 123456789​</p>
<p><span className='font-semibold'>Total-</span> ₹ 700.00</p>
            </div>
            {/* ------------writing 2 nd part-------------- */}
            <div className="font-normal">
                    <p><span className='font-semibold'>Reason-</span> General Consultation</p>
                    <p><span className='font-semibold'>Payment Method-</span> Pay on Conter</p>
            </div>
        </div>
     {/* -----------main appointement section-------- */}
     <div className="w-full  flex max-md:gap-x-5 p-4 border-y-[3px] border-l-[10px] border-r-[3px] border-[#01A400] rounded-[15px]">
        {/* ----inside card left part-------- */}
<div className="w-1/2 flexCenter bg-orange-700 ">
<div className="w-[320px] space-y-7   ">

<div className="py-[6px] border-b-[1px] border-[#DADADA] text-center space-y-[2px]">
    <p className='font-medium text-lg '>Today</p>
    <p className='text-xs'>Last updated: 2 Minutes ago</p>
</div>
<div className="flex justify-center gap-x-5">
    <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="px-5 rounded-[10px] flexCenter text-[26px] font-bold text-[#FF0000]"> 2 </div>
    <div className="space-y-2">
        <p className='font-medium text-sm'>Waiting Number</p>
        <p className='text-2xl font-medium text-[#4472C4] tracking-wide'>01:15 PM</p>
    </div>
</div>
<div className="text-[#01549A] text-sm flex justify-center gap-x-5">
    <button type="button"  className=' w-[105px] py-1 flexCenter border-[1px] border-[#01549A] rounded-[5px] flex gap-x-2 items-center ' ><img src={refreshArrowIcon?.src} className='' alt="load..."/>Refresh</button>
    <button type="button"  className=' w-[105px] py-1 flexCenter border-[1px] border-[#01549A] rounded-[5px]'  >Cancel</button>
</div>
<p className='text-[#5A5D62] text-xs text-center'>Given Time is approximate can vary by +/-60 Min</p>

</div>
</div>
     {/* ----inside card right part-------- */}
<div style={{boxShadow:" 0px 0px 4px 0px #01549A40"}} className="w-1/2 bg-blue-800 p-5 rounded-[20px] space-y-4">
<div className="w-full flex items-center gap-x-3">
    <div className="size-10 flexCenter text-lg rounded-full text-white font-medium  bg-[#01A400]">24</div>
    <p className='text-base font-medium'>Rakesh Nandre, (Me)</p>
</div>
<div style={{boxShadow: "0px 0px 4px 0px #01549A40"}} className="  rounded-[20px] w-full p-3 flex gap-x-5 items-center">
    <div className="bg-black">
<img src={doctorAppointmentImage?.src} className='max-md:w-[150px]' alt="load..."  />
    </div>
    <div className="">
        <p className='text-lg font-medium'>Dr.Aradhana Bhamare</p>
        <p className='text-sm'>Ram Surgical and Maternity Hospital</p>
        <div className="tet-sm text-[#01A400]"><span className='mr-3'>a</span>Open</div>
    </div>
</div>
<button className="w-[85%] mx-auto py-1 rounded-[5px] text-sm border-[1px] border-[#01549A]  font-semibold text-[#01549A] flex gap-x-2 justify-center items-center"> <img src={uploadIcon?.src} className='w-3' alt="load..."  /> Upload </button>
</div>
     </div>

    </div>
</div>
  )
}
