
"use client"
import React, { useRef } from 'react'
import HospitalAssociatedCard from '@/Utilities/Hospital&DoctorsAsso/HospitalAssociatedCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";


export default function HospitalAssociatedSlider() {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
        slidesToShow:2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint:650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };
  
    return (
    <div className="w-full my-20">
        <div className="my-7 flex justify-between items-center">
          <p className="text-base ssm:text-xl sm:text-2xl lg:text-3xl font-medium">
            Clinic/ Hospitals associated with us

          </p>
          <div className="hidden md:flex justify-center items-center space-x-8">
<button onClick={() => sliderRef.current.slickPrev()} style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white  -rotate-180 "><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
<button onClick={() => sliderRef.current.slickNext()} style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white"><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
</div>
        </div>
        
        {/* <div className="w-full overflow-x-auto flex  gap-x-6 "> */}
        <Slider ref={sliderRef} {...settings}>
          <HospitalAssociatedCard />
           <HospitalAssociatedCard />
           <HospitalAssociatedCard />
           <HospitalAssociatedCard />
           <HospitalAssociatedCard />
           <HospitalAssociatedCard />
           <HospitalAssociatedCard />

      </Slider>
        {/* </div> */}

        <div className=" my-10 w-full  flex justify-center items-center md:hidden space-x-8">
<button onClick={() => sliderRef.current.slickPrev()} style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white  -rotate-180 "><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
<button  onClick={() => sliderRef.current.slickNext()} style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white"><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
</div>
      </div> 
  )
}
