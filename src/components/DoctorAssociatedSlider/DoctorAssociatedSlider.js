"use client"

import DoctorsAssociatedCard from '@/Utilities/Hospital&DoctorsAsso/DoctorsAssociatedCard'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function () {
    const settings = {
        // slidesToShow: hospitalData?.length > 1 ? 3 : 1,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        // nextArrow: <RightArrow to="next" />,
        // prevArrow: <LeftArrow to="prev" />,
        responsive: [
          {
            breakpoint: 900,
            settings: {
            //   slidesToShow: hospitalData?.length > 1 ? 2 : 1,
            slidesToShow:2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 535,
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
    <div className="my-7 ">
      <p className="text-base ssm:text-xl sm:text-2xl lg:text-3xl font-medium">Doctors associated with us </p>
    </div>
    {/* <div className="w-full overflow-x-auto flex gap-x-6 "> */}
    <Slider {...settings}>
      <DoctorsAssociatedCard />
      <DoctorsAssociatedCard />
      <DoctorsAssociatedCard />
      <DoctorsAssociatedCard />
      <DoctorsAssociatedCard />
      <DoctorsAssociatedCard />
      <DoctorsAssociatedCard />
       </Slider>
    </div>
//   </div> 

  )
}
