"use client"
import React, { useState } from 'react'
import hospitalLogo from "@/asset/Icons/eachHospitalLogo.svg"
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import phoneCallIcon from "@/asset/Icons/phoneCall.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
import outlineClockIcon from "@/asset/Icons/outlineClock.svg";
import lunchBoxIcon from "@/asset/Icons/lunchBox.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import doctorBagV2Icon from "@/asset/Icons/doctorBagV2.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
import doctorImage2 from "@/asset/Images/doctorImage2.png";
import ratingIcon from "@/asset/Icons/rating.svg";
import calendarIcon from "@/asset/Icons/calendar.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import pinedIcon from "@/asset/Icons/pined.svg";
import callingIcon from "@/asset/Icons/calling.svg";
import  nursingHomeIcon from "@/asset/Icons/nursingHome.svg";
import  pathologyIcon from "@/asset/Icons/pathology.svg";
import  polyClinicIcon from "@/asset/Icons/polyclinic.svg";
import  singlePractionerIcon from "@/asset/Icons/singlePractioner.svg";
import  usgIcon from "@/asset/Icons/usg.svg";
import  xRayIcon from "@/asset/Icons/xRay.svg";
import  dayCareIcon from "@/asset/Icons/dayCare.svg";



import dragon from "@/asset/Images/dragon.jpg"
import doctorImageBig from "@/asset/Images/doctorImageBig.png";
import OfficeSafetyPrecautions from '@/Utilities/smallComponents/OfficeSafetyPrecautions';
import DoctorCard from '@/Utilities/listingPageCards/DoctorCard';
import Link from 'next/link';


export default function page() {

  const [appointmentView,setAppointmentView]=useState(false)


const servicesAvailable=[
{
    serviceText: "Single Practitioner",
    img:singlePractionerIcon
},{
    serviceText:  "Polyclinic ",
    img:polyClinicIcon
},{
    serviceText:  "Day Care Center ",
    img:dayCareIcon
},{
    serviceText:  " Nursing Home",
    img:nursingHomeIcon
},{
    serviceText: " X Ray",
    img:xRayIcon
},{
    serviceText: " Ultra Sound",
    img:usgIcon
},{
    serviceText: " Pathology",
    img:pathologyIcon
}
]




  return (
    <>
    <div className="w-full max-w-[1600px] mx-auto     ">

    <div className="w-full relative">
    <img src={dragon?.src} className=' h-[370px] md:h-[400px] w-full' alt="load..." />  
    <img style={{boxShadow: "0px 0px 4px 0px #00000040"}} src={hospitalLogo?.src} className=' size-[100px]  asm:size-[120px] md:size-[160px]  lg:size-[200px] absolute top-[310px] asm:top-[300px] left-[40px] sm:left-[80px] md:left-[110px]  ' alt="load..." />  
</div>

<div className="w-full  flex flex-col lg:flex-row gap-x-7 px-2 asm:px-2 lg:px-0  ">
    {/* -----------------1st part--------------------- */}
<div className={`w-full  py-1 lg:w-[68%]  max-h-max   ${appointmentView && "h-[200px] overflow-hidden"} `}>

<div className="w-full mt-[60px] asm:mt-[70px] sm:mt-[90px] lg:mt-32 mb-2  flex justify-between items-center">
<h3 className= "  text-[#01549A] font-medium text-[20px]  asm:text-[26px]  ">
Dr. B.D. Ahirrao Memorial Hospital, Sakri
              </h3>      
</div>
<p className=" my-3 text-sm asm:text-lg flex  text-wrap">
                    <img
                      src={hospitalOutlineIcon?.src}
                      className="w-5 mr-3"
                      alt="load..."
                    />
                 Dr. B.D.Ahirrao Memorial Hospital (Baba Ahirrao) Dhule Road, 424304.
                  </p>
<div className=" w-[90%]  flex justify-between items-center">
<div className="space-y-3">
<p className="space-y-3  font-normal text-sm asm:text-lg flex items-end gap-x-5 ">
                  <span className=" relative w-[14px] h-[20px] inline-block">
                    <img className="w-full h-full" src={redGeoLocationIcon?.src} />
                  </span>
                  Pune, Maharashtra
                </p>
                <div className="bg-[#EFEFEF] rounded-[20px] px-4 asm:px-5 py-1 asm:py-[6px] flex items-center gap-x-2 ">
                    <div  className="flex gap-x-1">
{[1,2,3,4,5].map((item,index)=><img key={index} src={ratingIcon?.src} className='w-4 asm:w-5' alt="load..."  />)}
                    </div>
                    <p className='max-asm:hidden'>4.8 (234 Review)</p>
                    <p className='asm:hidden ml-[8px]'>4.8 </p>
                    
                </div>                                                            
</div>
<img src={callingIcon?.src} className="max-ssm:hidden max-asm:w-9 " alt="load..."  />
</div>

<button onClick={()=>setAppointmentView(!appointmentView)}  type="button" className="my-8 w-full sm:w-[90%] lg:hidden sm:max-w-[300px]  cursor-pointer mx-auto py-3 text-center bg-primary text-white font-semibold rounded-[10px]">Appointment Booking</button>

{/* -----------------------safety precautions-------- */}
<OfficeSafetyPrecautions />
{/* ------------2nd safety para------------ */}
<div className="my-7 w-full space-y-2 bg-[#F4F4F4] rounded-[20px] px-4 py-3 ">
<p className='text-[20px] font-medium '>Statement</p>
<div className='text-xs md:text-sm'>
    <p >Board certified dermatologist with over 10 years experience</p>
    <p >Knowledgeable, professional staff available. Most insurances accepted. Cosmetic menu of services include, fillers, cool sculpt, laser hair removal, varicose veins</p>
</div>
</div>
{/* -------------list of dicotrs in hospital-------- */}
<div className="my-12 w-full  ">
   <p className='text-[20px] asm:px-4 font-medium '>Doctors at Dr. B.D. Ahirrao Memorial Hospital, Sakri (2)</p> 
   <div className="w-full my-8 msm:px-2 flex flex-col gap-y-8  ">
    {[1,2,3].map((item,index)=>  <DoctorCard key={index} /> )}
   </div>
</div>

              {/*--------------map part----------------  */}
<div className="my-12 ">
    <p className='text-[20px] asm:px-4 font-medium'>Hospital branches and Location​</p>

    <div className="mt-7 mb-2 flex flex-col">
{/* ---------------timings---------- */}
<div className="w-full p-3  ">
        <p className="font-medium text-lg"> Timings</p>
        <div className="my-4 flex gap-x-3 overflow-x-auto whitespace-nowrap custom-scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className="border-[1px] border-[#CFCFCF] rounded-[10px] overflow-hidden flex-shrink-0">
              <p className=" w-full text-sm bg-[#EFF8FF] py-1 font-medium text-center">
                Monday
              </p>
              <div className="w-full p-2 space-y-1">
                <div className="flex gap-x-2 text-xs font-normal">
                  <img
                    src={outlineClockIcon?.src}
                    className=" w-[14px]"
                    alt="load..."
                  />
                  09:00 AM - 08:00 PM
                </div>
                <div className="flex gap-x-2 text-xs font-normal">
                  <img
                    src={lunchBoxIcon?.src}
                    className="w-[12px] "
                    alt="load..."
                  />
                  09:00 AM - 08:00 PM
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
{/* ------------maps---------------- */}
<div className="w-full my-2 h-[400px]  relative rounded-[20px] overflow-hidden">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13900.252752700126!2d79.95980878916262!3d29.42694955218887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0dd9bfc5bd7ed%3A0x516f7f48dcd10c4a!2sSundungra%2C%20Uttarakhand%20262528!5e0!3m2!1sen!2sin!4v1726923728002!5m2!1sen!2sin"
//   width="600"
//   height="450"
className="w-full h-full"
style={{ border: 0 }}

//   loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
{/* -------list of doctors on map--------- */}
<div className="w-full absolute bottom-0 z-40 flexCenter gap-x-3 whitespace-nowrap overflow-x-auto  scroll-snap-x">
  {[1, 2, 3, 45, 8, 9, 0, 7].map((item, index) => (
    // <Link href="/doctorDetails" >
    <div key={index} 
         style={{ boxShadow: "0px 0px 4px 1px #00000040" }}  
         className="px-3 py-5 bg-[#FFFFFF] text-black rounded-[10px] flex gap-x-3 flex-shrink-0 scroll-snap-center">
      <img src={doctorImage2?.src} className="w-[70px] asm:w-20 rounded-full" alt="load..." />
      <div className='flex flex-col gap-y-1'>
        <p className="font-medium text-xs asm:text-sm">Dr. Nilesh Bhamare</p>
        <p className="text-[10px] asm:text-xs text-[#646464]">MBBS</p>
        <p className="text-[10px] asm:text-xs text-[#646464]">Ophthalmic Doctor</p>
        <p className="text-[10px] asm:text-xs text-[#646464]">Shivaji Nagar, Pune</p>
      </div>
    </div> 
    // </Link>
  ))}
</div>

</div>

</div>

</div>



{/* -----------------services available---------- */}
<div  className="my-12 w-full   rounded-[20px]   asm:px-4 py-5 space-y-5">
    <p className='  text-[20px]  font-medium '>Convenience services available​</p>
 <div className="w-full flex gap-x-2 asm:gap-x-4 items-center flex-wrap gap-y-3 asm:gap-y-5">
 {servicesAvailable.map((item,index)=><div key={index} style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="py-[10px] px-4  flex justify-center items-center gap-x-2 rounded-[10px] text-[11px]  asm:text-sm "> 
    <img src={item.img?.src} className='w-4' alt="load..."  />
   {item.serviceText}
    </div>)} 
 </div>
</div>

{/* --------------------other services------------- */}
<div  className="my-12 w-full  rounded-[20px]  asm:px-4 py-5 space-y-5">
    <p className='text-[20px]  font-medium '>Convenience services available​</p>
 <div className="w-full flex gap-x-2 asm:gap-x-4 items-center flex-wrap gap-y-3 asm:gap-y-5">
 {[
  "24/7 Emergency & Critical care",
  "ICU/NICU",
  "State of Art Modeler OTs",
  "Digital x-ray",
  "24/7 Pharmacy",
  "Psychotherapy & counseling",
  "2D ECHO",
  "ECG & PFT",
  "Pathology Laboratory",
  "Children And Adolescent Mental Health"
].map((item,index)=><div key={index} style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="py-[10px] px-4  flex justify-center items-center gap-x-2 rounded-[10px] text-[11px]  asm:text-sm">
   {item}
    </div>)} 
 </div>
</div>



</div>

{/* ------------------2nd appointement part---------- */}
<div styele={{boxShadow: "0px 0px 4px 0px #00000040"}} className={`max-lg:pt-[90px] lg:my-7 flex-1 w-full   lg:w-[90%] max-lg:absolute  max-lg:bg-white  ${!appointmentView? " -top-[700%] " : " top-0  " }   transition-all duration-150 ease-linear`}>

<button type="button" onClick={()=>setAppointmentView(!appointmentView)} className="  lg:hidden absolute right-6 text-3xl font-semibold text-[#01549A] " >X</button>

<div className="w-full  border-2 boreder-black rounded-[20px] pt-4 pb-0 overflow-hidden ">

<p className="text-lg font-medium  text-center">Book Your Appointment </p>
<hr className="my-3" />

<div className="px-2 sm:px-4 ">

    <div className="space-y-3 ">
  <p className="font-medium  ">Appointments details </p>
  <div className="px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start">
    <div className="">
    All specialties
    </div>
    <button type="button"  className=''></button>
  </div>

  <div className= "px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start ">
    <div className="">
    Select reason
    </div>
    <button type="button"  className=''></button>
  </div>
    </div>
 

    <div className="mt-5 mb-16 space-y-3 ">
  <p className="font-medium  ">Appointments appointments </p>
  <div className="px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start">
    <div className="">
<p className='font-medium '>Dr. B.D. Ahirrao Memorial Hospital, Sakri</p>
<p className='text-sm text-[#333333]'>Dr. B.D.Ahirrao Memorial Hospital (Baba Ahirrao) Dhule Road, 424304.</p>
    </div>
    <button type="button"  className='w-[50px]'></button>
  </div>


  <div className= "px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start ">
    <div className="">
    All doctor availability
    </div>
    <button type="button"  className=''></button>
  </div>


    </div>




<div className="mt-5 py-3  w-full border-t-[1px] border-[#919196] space-y-2">
<button type="button" className="w-[95%] max-lg:hidden py-3 text-center bg-primary text-white font-semibold rounded-[10px] text-[20px]">Appointment Booking</button>
<Link href="/checkout">
<button type="button" className="w-[95%] lg:hidden  py-3 text-center bg-primary text-white font-semibold rounded-[10px] text-[20px]">Checkout</button> </Link>
<p className="text-xs text-center font-normal">No charges for appointment booking.</p>
</div>

</div>




          </div>
</div>
</div>


    </div>    
    </>
  )
}
