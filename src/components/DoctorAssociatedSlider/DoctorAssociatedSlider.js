"use client";
import DoctorsAssociatedCard from "@/utils/Hospital&DoctorsAsso/DoctorsAssociatedCard";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import { getDoctorList } from "@/shared/apis/doctorCard";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function () {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 635,
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

  const { data: doctorList, isLoading } = useQuery({
    queryKey: ["doctorList"],
    queryFn: getDoctorList,
    enabled: true,
  });

  return (
    <div className="w-full my-20  ">
      <div className="my-5 lg:my-7 flex justify-between items-center  ">
        <p className="text-base ssm:text-xl sm:text-2xl lg:text-2xl font-medium ">
          Doctors associated with us
        </p>

        <div className=" md:hidden  text-primary text-center  text-base lg:text-lg font-medium cursor-pointer" ><Link href="/search-listing" > View All</Link></div>


        <div className=" hidden md:flex justify-center items-center space-x-6">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
            type="button"
            className="flex  items-center justify-center rounded-full w-10 h-10  bg-white -rotate-180 "
          >
            <img src={sliderArrowIcon?.src} className="h-5" alt="load..." />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
            type="button"
            className="flex  items-center justify-center rounded-full w-10 h-10  bg-white"
          >
            <img src={sliderArrowIcon?.src} className="h-5" alt="load..." />
          </button>
        </div>
      </div>
      {/* -------------------listing the doctor slider------------------ */}
      {/* flex  items-stretch justify-center gap-x-4 */}
      {doctorList?.length>0 ? <Slider ref={sliderRef} {...settings} className="   max-w-[850px] lg:max-w-[1280px] mx-auto  "  >
       {doctorList.map((item)=> <DoctorsAssociatedCard key={item?.id}  cardDetails={item} /> )} 
      </Slider> : <div>Loading...</div> }

      <div className="my-7 max-md::hidden  text-primary text-center  text-base lg:text-lg font-medium cursor-pointer" > <Link href="/search-listing" >View All</Link> </div>

      <div className="my-7 max-md::hidden  text-primary text-center  text-base lg:text-lg font-medium cursor-pointer">
        {" "}
        <Link href="/doctorListingPage">View All</Link>{" "}
      </div>

      <div className="my-7 w-full  flex justify-center items-center md:hidden space-x-6">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
          type="button"
          className="flex  items-center justify-center rounded-full w-10 h-10 bg-white  -rotate-180 "
        >
          <img src={sliderArrowIcon?.src} className="h-5" alt="load..." />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
          type="button"
          className="flex  items-center justify-center rounded-full w-10 h-10 bg-white"
        >
          <img src={sliderArrowIcon?.src} className="h-5" alt="load..." />
        </button>
      </div>
    </div>
  );
}
