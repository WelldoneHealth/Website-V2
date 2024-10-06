import React from 'react'
import doctorImage2 from "@/asset/Images/doctorImage2.png"
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";

export default function page() {
  return (
    <div className="w-full relative max-w-[1600px] mx-auto px-1   asm:px-3 lg:px-0  mt-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7 ">
  
<div className="my-8 w-full lg:w-[68%] space-y-5  ">

{/* -----------first card-------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full    border-[1px] border-[#EFEFEF]">

<p style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="font-medium p-4 bg-[1px] border-[#EFEFEF]">1. Consult doctor and Clinic/Hospital</p>
{/* 2 cards portion----------- */}
<div className="space-y-5 p-5">
{/* -------------------doctor card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------doctor image------------ */}

    <img src={doctorImage2?.src} className="w-[70px]"  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p>Dr. Subhash V. Gupta</p>
      <p className="text-primary">Change</p>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p classNametext="text-xs">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>
{/* ----------------hospital card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------hospital image------------ */}

    <img src={doctorImage2?.src} className="w-[70px]"  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p>Dr. Subhash V. Gupta</p>
      <p className="text-primary">Change</p>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p classNametext="text-xs">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>

</div>

<div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button" className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Continue Appointment</button>
</div>



</div>


{/* -----------second card-------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full    border-[1px] border-[#EFEFEF]">

<p style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="font-medium p-4 bg-[1px] border-[#EFEFEF]">2. Select a patient/Patient Review</p>
{/* 2 cards portion----------- */}
<div className="space-y-5 p-5">
{[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-start gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------checkout------------ */}
  <input type="radio"  className="w-[20px] h-[20px]" />

  <div className="w-full space-y-2">
<div className="w-full flex items-start gap-x-2">
  <div className="bg-[#D9D9D9] w-12  h-12 flexCenter rounded-full font-medium  ">RN</div>
  <div className="w-full space-y-[2px]">
    <div className="w-full space-y-1 flex items-center justify-between">
    <div className="flex items-center gap-x-3">
      <p className="text-lg font-medium">Rakesh Nadre</p>
      <p className="text-primary px-2 flexCenter border-[1px] border-primary rounded-[5px]">Me</p>
      <p className="flex items-center gap-x-1 px-3 py-[2px] bg-[#EFEFEF] rounded-md"><img src={outlineGeoLocationIcon?.src} className="" alt="load..." />8806010415</p>
    </div>
    <p className="text-primary font-medium">Edit</p>
    </div>
   <p className="text-sm">26 Years, 4 Month Old</p>
  </div>
</div>
<div className=" px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
  <img src={outlineGeoLocationIcon?.src} className="" alt="load..."  />
  House, street, city, landmark, state, Country, Pin Code</div>
  </div>
</div>)}
</div>

<div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button" className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Appointment for this Patient</button>
</div>



</div>


{/* -----------third card-------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full    border-[1px] border-[#EFEFEF]">

<p style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="font-medium p-4 bg-[1px] border-[#EFEFEF]">3. Payment options</p>
{/* 2 checkbox portion----------- */}
<div className="space-y-5 p-5">
{[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------checkout------------ */}
  <input type="radio"  className="w-[20px] h-[20px]" />

  <div className="w-full space-y-1">
  <p className="text-base font-medium">Pay online</p>
  <p classNametext="text-sm">Allows patients to pay for services through a secure platform, integrated with your EMR.</p>
  </div>
</div>)}


</div>

<div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button" className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Continue </button>
</div>



</div>




{/* ----------fourth card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full    border-[1px] border-[#EFEFEF]">

<p style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="font-medium p-4 bg-[1px] border-[#EFEFEF]">4. Appointment summary</p>
{/* 2 checkbox portion----------- */}
<div className="space-y-5 py-5">

{/* ------------appointment----------------- */}
<div className="space-y-3  p-5 border-b-[1px] border-[#DADADA]">
<p>Book by e-Queue</p>
<div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-primary " >
    <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-primary font-medium ">Today</p>
    <hr />
    <div className="w-full flexCenter gap-x-5 py-4">
      <div style={{boxShadow: "0px 0px 4px 2px #00000040"
}} className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold ">
        2
      </div>
      <div className="space-y-1">
        <p className=" text-xs">Waiting Number</p>
        <p className="text-[#01549A] font-semibold text-lg">01:15 PM</p>
      </div>
    </div>
    <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">Given Time is approximate can vary by +/-60 Min</p>
  </div>
</div>

{/* ----------------checkout----------- */}
<div className="space-y-5 px-5">
<div className="space-y-3 text-sm">
  <p>What’s The Reson for Your Visit</p>
  <p className="border-[1px] border-[#919196] px-2 py-2 text-[#191A1B] rounded-[10px]">General Consultation</p>
</div>
<div className="space-y-3">
  <p>Have the patient seen these Doctors?</p>
  {[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------checkout------------ */}
  <input type="radio"  className="w-[20px] h-[20px]" />

  <div className="w-full space-y-1">
  <p className="text-base font-medium">First Consult</p>
  <p classNametext="text-sm">₹100</p>
  </div>
</div>)}
</div>
</div>


</div>

<div className="p-5 py-3 flex justify-between items-center bg-[#EFEFEF]">
  <p>Appointment confirmation WhatsApp Massage will be sent to <span className="font-medium">+91 9876543210</span> </p>
  <button type="button" className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Book Appointment</button>
</div>



</div>








</div>


<div className=""></div>


    </div>
  )
}
