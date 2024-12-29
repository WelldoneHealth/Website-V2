"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDoctorList } from "@/shared/apis/doctorCard";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import DoctorCardSliderSkeleton from "@/modules/home/skeleton/DoctorCardSliderSkeleton";

const DoctorsSection = () => {
  const { data: doctorList, isLoading } = useQuery({
    queryKey: ["doctorList"],
    queryFn: getDoctorList,
    enabled: true,
  });

  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-2 shadow-lg z-10 hover:bg-gray-300"
      onClick={onClick}
      aria-label="Previous"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-2 shadow-lg z-10 hover:bg-gray-300"
      onClick={onClick}
      aria-label="Next"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="doctors" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Doctors associated with us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced healthcare professionals you can trust
          </p>
        </div>

        {/* Doctor Cards Slider */}
        {isLoading ? (
          <div className="text-center mt-8 mb-12 text-gray-600">
            {/* <span>Loading...</span> */}
            <DoctorCardSliderSkeleton />
          </div>
        ) : ( <>
          <div className="relative">
            <Slider {...sliderSettings} className="mb-12">
              {(doctorList || []).map((doctor, index) => (
                <div key={index} className="p-4">
                  <div className="relative bg-whit border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                    {/* Experience Badge */}
                    {/* {doctor.total_experience && (
                      <div className="absolute top-4 left-4 bg-[#d0eaff] text-gray-600 text-sm font-semibold py-1 px-3 rounded-full">
                        {doctor.total_experience}+ Years Exp
                      </div>
                    )} */}
                    <div className="text-center ">
                      <div className="w-32 h-32 mx-auto mb-4  relative">
                      {doctor.total_experience && (
                      <div className="absolute top-2 -left-[55%] bg-[#d0eaff] text-gray-600 text-sm font-semibold py-1 px-3 rounded-full">
                        {doctor.total_experience}+ Years Exp
                      </div>
                    )}
                        <img
                          src={
                            doctor.profile_picture ||
                            "https://placehold.co/200x200/primary-100/primary-600?text=Dr"
                          }
                          className="w-full h-full rounded-full object-cover"
                          alt={`Dr. ${doctor.first_name} ${doctor.last_name}`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Dr. {doctor.first_name} {doctor.middle_name}{" "}
                        {doctor.last_name}
                      </h3>
                      <p className="text-primary-400 font-medium mb-2">
                        {doctor.practice_specialty ?? "-"}
                      </p>
                      <div className="flex flex-col justify-center items-center mb-4 text-center">
                        <span className="text-gray-600 font-medium">
                          {doctor?.branch__establishment_name}
                        </span>
                        <span className="text-gray-500">
                          {doctor?.branch__state__name
                            ?.toLowerCase()
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </span>
                      </div>
                      <Link
                        href={`/doctor-details/${doctor?.slug}/${doctor?.branch__slug}`}
                        className="block"
                      >
                        <button className="w-full bg-[#005499] text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        {/* )} */}

        {/* View All Button */}
        <div className="text-center">
        <Link href={`/search-listing?is_hospital=false`} passHref >
          <button className="bg-[#005499] text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors inline-flex items-center">
            View All Doctors
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
         </Link>
        </div>
        </> )}

      </div>
    </section>
  );
};

export default DoctorsSection;
