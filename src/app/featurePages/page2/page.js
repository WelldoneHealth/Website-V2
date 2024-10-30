import React from 'react'
import premiumIcon from "@/asset/Icons/premium.svg";
import rocketIcon2 from "@/asset/Icons/rocket2.svg";
import ckeckIcon2 from "@/asset/Icons/check2.svg";
import adsIcon from "@/asset/Icons/ads.svg";
import calendarIcon2 from "@/asset/Icons/calendar2.svg";

import feature1Iamge from "@/asset/Images/feature1.png"
import feature2Iamge from "@/asset/Images/feature2.png"
import feature3Iamge from "@/asset/Images/feature3.png"
import feature4Iamge from "@/asset/Images/feature4.png"
import feature5Iamge from "@/asset/Images/feature5.png"

import { data1, data2, data3, data4, data5 } from '@/Utilities/extraDetails/page2details';

export default function page() {
  return (
    <div className="w-full relative space-y-8 max-w-[1600px] mx-auto  mt-20 pt-[1px] px-1 asm:px-3 lg:px-0 " >



<div className="w-full px-8 rounded-3xl space-y-3">
<p className='text-[36px] font-bold text-primary'>Doctors <span className='text-black'>Success Stories</span></p>
<div className="w-full px-10 py-6 bg-secondary rounded-3xl ">
  <div className="">
    
  </div>
  <div className="space-y-1">
    <p className='text-[20px] font-semibold'>Dr. Priya Sharma (General Physician)</p>
    <p className='text-base leading-snug'>After joining WelldoneHealth, Dr. Priya streamlined her clinic’s patient management. With automated appointment scheduling and an organized OPD system, she reduced waiting times by 30% and increased patient satisfaction.</p>
  </div>

</div>
</div>


<div className="w-full px-28 space-y-8">

{/* --------------feature1------------ */}
<div style={{boxSshadow: "0px 0px 4px 0px #01549A"}} className="w-full px-10 py-6 border-[1px] border-[#DADADA] rounded-3xl flex gap-x-8">
<div className=" space-y-5">
  <div className="px-5 py-3 bg-secondary rounded-[10px] text-primary text-lg font-mediu flex items-center gap-x-1">
    <img src={premiumIcon?.src} className='' alt="load..."  /> <p className='font-medium'>Get the Prime Advantage</p>
  </div>
  <p className='text-[28px] font-bold leading-[30px]'>Transform Your Practice with an Efficient Appointment Booking Platform</p>
  <div className="space-y-2">
    {data1.map((item)=><div key={item} className="">
      <p className='font-medium text-base'>{item.primaryText}</p>
      <p className=' text-sm'>{item.subText}</p>
    </div>)}
  </div>
</div>
<img src={feature1Iamge?.src} className='' alt="load..."  />
</div>


{/* --------------feature2------------ */}
<div style={{boxSshadow: "0px 0px 4px 0px #01549A"}} className="w-full px-10 py-6 border-[1px] border-[#DADADA] rounded-3xl flex gap-x-8">
<div className=" space-y-5">
  <div className="px-5 py-3 bg-secondary rounded-[10px] text-primary text-lg font-mediu flex items-center gap-x-1">
    <img src={ckeckIcon2?.src} className='' alt="load..."  /> <p className='font-medium'>Get the Verified Badge </p>
  </div>
  <p className='text-[28px] font-bold leading-[30px]'>Get Noticed with Our Premium Appointment Booking Platform</p>
  <div className="space-y-2">
    {data2.map((item)=><div key={item} className="">
      <p className='font-medium text-base'>{item.primaryText}</p>
      <p className=' text-sm'>{item.subText}</p>
    </div>)}
  </div>
</div>
<img src={feature5Iamge?.src} className='' alt="load..."  />
</div>


{/* --------------feature3------------ */}
<div style={{boxSshadow: "0px 0px 4px 0px #01549A"}} className="w-full px-10 py-6 border-[1px] border-[#DADADA] rounded-3xl flex gap-x-8">
<div className=" space-y-5">
  <div className="px-5 py-3 bg-secondary rounded-[10px] text-primary text-lg font-mediu flex items-center gap-x-1">
    <img src={adsIcon?.src} className='' alt="load..."  /> <p className='font-medium'>Advertise Your Professional profile  </p>
  </div>
  <p className='text-[28px] font-bold leading-[30px]'>Drive Patient Discovery with Our Appointment Booking Platform</p>
  <div className="space-y-2">
    {data3.map((item)=><div key={item} className="">
      <p className='font-medium text-base'>{item.primaryText}</p>
      <p className=' text-sm'>{item.subText}</p>
    </div>)}
  </div>
</div>
<img src={feature2Iamge?.src} className='' alt="load..."  />
</div>


{/* ---------------feature4----------- */}
<div style={{boxSshadow: "0px 0px 4px 0px #01549A"}} className="w-full px-10 py-6 border-[1px] border-[#DADADA] rounded-3xl flex gap-x-8">
<div className=" space-y-5">
  <div className="px-5 py-3 bg-secondary rounded-[10px] text-primary text-lg font-mediu flex items-center gap-x-1">
    <img src={rocketIcon2?.src} className='' alt="load..."  /> <p className='font-medium'>Advertise Your Professional profile  </p>
  </div>
  <p className='text-[28px] font-bold leading-[30px]'>Drive Patient Discovery with Our Appointment Booking Platform</p>
  <div className="space-y-2">
    {data4.map((item)=><div key={item} className="">
      <p className='font-medium text-base'>{item.primaryText}</p>
      <p className=' text-sm'>{item.subText}</p>
    </div>)}
  </div>
</div>
<img src={feature3Iamge?.src} className='' alt="load..."  />
</div>



{/* ---------------feature4----------- */}
<div style={{boxSshadow: "0px 0px 4px 0px #01549A"}} className="w-full px-10 py-6 border-[1px] border-[#DADADA] rounded-3xl flex gap-x-8">
<div className=" space-y-5">
  <div className="px-5 py-3 bg-secondary rounded-[10px] text-primary text-lg font-mediu flex items-center gap-x-1">
    <img src={calendarIcon2?.src} className='' alt="load..."  /> <p className='font-medium'>Advertise Your Professional profile  </p>
  </div>
  <p className='text-[28px] font-bold leading-[30px]'>Drive Patient Discovery with Our Appointment Booking Platform</p>
  <div className="space-y-2">
    {data5.map((item)=><div key={item} className="">
      <p className='font-medium text-base'>{item.primaryText}</p>
      <p className=' text-sm'>{item.subText}</p>
    </div>)}
  </div>
</div>
<img src={feature4Iamge?.src} className='' alt="load..."  />
</div>

</div>






        </div>
  )
}
 