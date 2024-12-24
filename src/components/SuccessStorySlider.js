"use client"

import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from "@/asset/Images/sliderImage1.png"
import sliderImage2 from "@/asset/Images/sliderImage2.png"
import sliderImage3 from "@/asset/Images/sliderImage3.png"
import sliderImage4 from "@/asset/Images/sliderImage4.png"
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";

export default function SuccessStorySlider() {


  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    arrows: false,
  };

const sliderData=[
{
  
  image:sliderImage1 ,
  primaryText: "Dr. Priya Sharma (General Physician) ",
  text: "After joining WelldoneHealth, Dr. Priya streamlined her clinic’s patient management. With automated appointment scheduling and an organized OPD system, she reduced waiting times by 30% and increased patient satisfaction. "
},
{
  image:sliderImage2 ,
  primaryText: "Dr. Raj Mehta (Orthopedic Surgeon) ",
  text: "Dr. Raj transformed his practice with WelldoneHealth’s central dashboard. He now efficiently manages patient records, appointments, and billing, allowing him to focus more on patient care, which boosted his clinic’s revenue by 20%. "
},
{
  image: sliderImage3,
  primaryText: "Dr. Anjali Rao (Pediatrician) ",
  text: "Using WelldoneHealth, Dr. Anjali minimized paperwork and centralized all her patient data. This helped her provide more personalized care and manage follow-ups seamlessly, leading to a 15% growth in her patient base. "
},
{
  image:sliderImage4 ,
  primaryText: " Dr. Karan Patel (Dermatologist)",
  text: "Dr. Karan used WelldoneHealth’s system to optimize his clinic operations. He now tracks patient histories and treatments with ease, cutting admin tasks by 40%, and gaining more time to focus on expanding his services.  "
}
]
 


  return (
    <div className="w-full px-2 asm:px-2 lg:px-8   rounded-3xl space-y-4">
    <p className=' text-[28px] md:text-[34px] font-bold text-primary leading-tight'>Doctors <span className='text-black'>Success Stories</span></p>
   


<div className="w-full  rounded-3xl bg-secondary ">
<Slider  ref={sliderRef}
          {...settings}    
          className='w-full space-x-3'    
          >
   { sliderData.map((item,index)=> <SliderCard  key={index} sliderData={item} />)}
    </Slider> 
</div>


    <div className="my-10 w-full  flex justify-center items-center  space-x-8">
    <button  onClick={() => sliderRef.current.slickPrev()}   style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white  -rotate-180 "><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
    <button  onClick={() => sliderRef.current.slickNext()} style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white"><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
    </div>
    </div>

  )
}


const SliderCard=({sliderData})=>( <div   className="w-full px-3  asm:px-6 lg:px-10 py-6 rounded-3xl flex flex-col max-asm:items-center sm:flex-row gap-y-3  gap-x-6 ">
      <div className="size-[140px] md:size-[160px] rounded-full  overflow-hidden bg-primary mx-auto">
        <img src={sliderData.image.src} className="w-full  h-full object-cover" alt="load..."  />
      </div>
      <div className="space-y-2   flex-1 flex flex-col justify-center">
        <p className='text-lg md:text-2xl font-semibold leading-tight'>{sliderData.primaryText}</p>
        <p className='w-full lg:w-[96%] text-sm sm:text-base lg:text-lg leading-tight'>{sliderData.text}</p>
      </div>
 
    </div>
)  