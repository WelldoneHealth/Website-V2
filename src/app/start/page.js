"use client"

import React, { useRef } from "react";
import clinic3Icon from "@/asset/Icons/clinic3.svg";
import profile3 from "@/asset/Icons/profile3.svg";
import medicine from "@/asset/Icons/medicine.svg";
import payment2 from "@/asset/Icons/payment2.svg";
import support2 from "@/asset/Icons/support2.svg";
import growth2 from "@/asset/Icons/growth2.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import pancard from "@/asset/Icons/pancard.svg";
import bankAccount from "@/asset/Icons/bankAccount.svg";
import prescription3 from "@/asset/Icons/prescription3.svg";

import doctorImage3 from "@/asset/Images/doctor3.png"
import dragonEye from "@/asset/Images/dragonEye.jpg"
import header4 from "@/asset/Images/header4.png"


import InfoDetails from "@/components/InfoDetails";
import SuccessStorySlider from "@/components/SuccessStorySlider";
import Responsivness from "@/components/Responsivness";
import Banner2 from "@/components/Banner2";
import Link from "next/link";




export default function page() {
  const data1 = [
    {
      mainText: " Add your Doctors profile ",
      boldText: "on Welldonehealth.in ",
      image: profile3,
      para: (
        <div className="space-y-2 text-sm w-full sm:w-[90%]">
          <p >
            After creating an account on Welldone Health, the next step is to
            list your doctors so patients can find them.
          </p>
          <li>
            If your doctor is{" "}
            <span className="font-semibold"> already listed </span>, simply
            match with the existing profile.{" "}
          </li>
          <li>
            For clinic/hospital owners or new practices not listed, create a{" "}
            <span className="font-semibold">new doctor profile</span> by adding
            details like contact information, specialty, and registration
            number.{" "}
          </li>
        </div>
      ),
    },
    {
      mainText: "Consult & create Prescription ",
      boldText: "  with print, send digitally.", 
      image: medicine,
      para: (
        <p className="text-sm w-full sm:w-[90%]">
          Once you list a doctor on Welldonehealth.in, you need to consult your
          doctor.When you get an appointment on Welldonehealth.in, you deliver
          services to those patients. You manage patient consultations and
          prescriptions.",
        </p>
      ),
    },
    {
      mainText: "Receive Payments  ",
      boldText: " from your patients",
      image: payment2,
      para: (
        <p className="text-sm w-full sm:w-[90%]">
          After verifying your bank account details, you are eligible to get
          paid for each appointment completed 7 days after the completion of the
          appointment. Welldonehealth.in ensures that your service payment
          (minus the Welldone Health platform fee) is securely deposited into
          your bank account every 7 days. You can view your account settlement
          anytime on the clinic dashboard.
        </p>
      ),
    },
    {
      mainText: " Grow faster ",
      boldText: " your Clinic/Hospital OPD with Welldone Health",
      image: growth2,
      para: (
        <div className="space-y-2 text-sm w-full sm:w-[90%]">
          <p>
            Once you become a practitioner of Welldonehealth.in, you will have
            access to many tools and programs (both paid and free) to help your
            clinic/hospital OPD grow
          </p>
          <p>Here's how you can top up your account</p>
          <div className="">
            <li>
              When you opt for{" "}
              <span className="font-semibold">Refer by Welldone Health</span> to
              give your advice to patients, you'll get a Prime badge.
            </li>
            <li>
              Create targeted ads through sponsored practitioners so patients
              can easily find your professional profile.
            </li>
          </div>
        </div>
      ),
    },
    {
      mainText: " Get Help & Support ",
      boldText: "as a practitioner of Welldone Health ",
      image: support2,
      para: (
        <p className="text-sm w-full sm:w-[90%]">
          As a Welldonehealth.in practitioner, if you have a question, we will
          answer it. You can contact Weldon Health Practitioner Support through
          your Practitioner Account to get assistance and resolve your issues.
        </p>
      ),
    },
  ];


  const needToPracticeData=[
    {
      image:clinic3Icon ,
      text: "Active Clinic/Hospital "
    },
    {
      image:prescription3 ,
      text: "Register Doctor "
    },
    {
      image: pancard,
      text: "PAN Card "
    },
    {
      image:bankAccount ,
      text: " Active Bank Account"
    }
  ]
 

  const buttonRefs = Array.from({ length: 5 }, () => useRef(null));

  const scrollToViewArea=(index)=>{
    console.log(index)
    buttonRefs[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // if (buttonRefs[index]?.current?.scrollIntoView){console.log("ok available")}
    // else{console.log("it is not applicalble")}
  }
 
  return (
    
    <div className="w-full  relative  mx-auto  max-w-[1600px]  space-y-16     pt-[1px]   lg:px-0  "> 


<div 
style={{ background: "linear-gradient(258.83deg, #FFFFFF 39.07%, #EBF6FF 99.2%)" }}
 className="w-full pt-8 px-3 msm:px-5 sm:pl-6  sm:pr-5 lg:px-16  2xl:px-20 flex flex-col max-md:items-center md:flex-row ">

<div className="space-y-12 asm:space-y-16 md:space-y-10 max-md:order-2 pt-2 md:pt-16 max-md:pb-10">
  <p className="text-primary font-semibold text-[21px] asm:text-[25px]  msm:text-[35px] md:text-[32px] lsm:text-[36px] lg:text-[40px] 2xl:text-[42px] leading-tight">Start your Clinical practice journey at Welldonehealth.in</p>
  <Link href="https://clinic.welldonehealth.in/login" passHref  target="_blank"  >
  <button type="button"  className='mt-6 px-7 text-sm asm:text-base msm:text-lg xl:text-xl  py-2 lsm:py-3 rounded-[30px]  font-semibold  bg-primary text-white '  >Get started for free</button>
</Link>
</div>

<div className="max-md:order-1 max-md:w-[70%] ">
  <img src={header4?.src} className="w-full max-md:mx-auto block" alt="load..."  />
</div>


</div>

<div className="w-full px-1 asm:px-3 lg:px-[2rem]  space-y-16">

{/* ------------section0-------------------- */}
<InfoDetails />


{/* --------------------------------1st section--------------- */}
<SuccessStorySlider />



      {/* -------------------------2nd section------flex--------- */}
      <div className="w-full flex   space-y-8">
        {/* -----sticky part------------- */}
        <div className="flex-1 max-lg:hidden     ">
<div className=" w-full sticky top-[70px]  space-y-2 ">
<button type="button"     className='max-xl:w-[95%] text-base xl:text-lg  xl:px-10    py-2 rounded-lg  font-semibold border-[2px] border-primary text-primary' >Requirements to Practice</button>
<button type="button" onClick={()=>scrollToViewArea(0)}   className='max-xl:w-[95%] text-base   xl:px-10  py-2'  >Create Professional Profile</button>
<button type="button" onClick={()=>scrollToViewArea(1)}   className='max-xl:w-[95%] text-base text-nowrap px-10  py-2'  >Consultation & Prescription</button>
<button type="button"  onClick={()=>scrollToViewArea(2)}  className='max-xl:w-[95%] text-base px-10  py-2'  >Receive fee & payments</button>
<button type="button"  onClick={()=>scrollToViewArea(3)}  className='max-xl:w-[95%] text-base px-10  py-2'  >Tools to grow</button>
<button type="button"  onClick={()=>scrollToViewArea(4)}  className='max-xl:w-[95%] text-base px-10  py-2'  >Help & support</button>
</div>
        </div>
        <div className="w-full lg:w-[75%]  md:px-8  xl:px-14 space-y-10 md:space-y-10 border-1 border-red-800">

          {/* ----------------part1------------ */}
          <div className="w-full py-8 px-3 md:px-6 xl:px-10 space-y-4 bg-secondary rounded-[20px]">
            <p className=" text-[22px] sm:text-2xl leading-snug font-bold text-center ">
              What you need to practice on Welldonehealth.in
            </p>
            <p className="text-sm text-center">
              To practice on Welldonehealth.in you need to register as a
              practitioner with Welldone Health, you need only Four things:
            </p>

            <div className="w-full pt-5 pb-6   flex  flex-wrap justify-center gap-4 ">
              {needToPracticeData.map((item, index) => (
                <div
                  key={index}
                  className="max-asm:w-[80%] max-sm:w-[47%] bg-white sm:flex-1  space-y-2 px-4  py-4  rounded-[20px]"
                >
                  <img
                    src={item?.image?.src}
                    className="mx-auto block"
                    alt="load..."
                  />
                  <p className="text-center text-sm font-medium">
                   {item?.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm font-medium mt-8">
              Have all ? Start your registration:
            </p>
            <Link  href="https://clinic.welldonehealth.in/login" passHref  target="_blank"  className="mt-5 w-full flexCenter">
              <button
                type="button"
                className="text-lg px-10  py-2 rounded-[30px]  font-semibold  bg-primary text-white"
              >
                Register Here
              </button>
            </Link>
          </div>

 
{/* --------------------part2------------- */}
          {data1.map((item, index) => (
            <div
              key={index}
              ref={buttonRefs[index]} 
              className=" w-full px-4 sm:px-10 pt-3 sm:pt-6 pb-8 border-[1px] border-[#DADADA] rounded-[20px]"
            >
              <p className="text-lg asm:text-[22px] sm:text-2xl text-primary font-bold leading-snug">
                {item.mainText}{" "}
                <span className="text-black">{item.boldText}</span>
              </p>
              <img src={item?.image?.src} className="mt-3 mb-5" alt="load..." />
              {item?.para}
            </div>
          ))}
        </div>
      </div>


{/* -----------------3rd section----------------- */}
<div className="w-full ">
<Responsivness />
</div>



{/* ------------------4th section-------flex---------------- */}
<div className="w-full  sm:pt-10 lg:pt-24 xl:pt-40 ">
<Banner2  />
</div>

    </div> 



   </div>
  );
}
