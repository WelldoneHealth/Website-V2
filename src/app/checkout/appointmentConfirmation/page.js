import React from 'react'
import successTickIcon from "@/asset/Icons/successTick.svg"

export default function page() {
  return (
   <div className="w-full relative -my-12  max-w-[1600px] mx-auto px-1 py-2  min-h-screen   asm:px-3 lg:px-0 xl:px-8  flex  flex-col  justify-center items-center gap-y-6 overflow-hidden ">
<div className="absolute size-[2000px] bg-[#EFF8FF] rounded-full "></div>
<img src={successTickIcon?.src} className="w-40"  alt="load..."  />
<div className="w-full  flex flex-col justify-center items-center space-y-2  text-center ">
<p className="font-semibold text-[22px]">Appointment Confirmed!</p>
<p >Thank you for scheduling your appointment!</p>
<p className="max-w-[760px]">  Your appointment (WELL-12-235817) has been successfully placed. You will receive confirmation via WhatsApp, SMS, or email shortly.</p>

</div>


   </div>
  )
}
