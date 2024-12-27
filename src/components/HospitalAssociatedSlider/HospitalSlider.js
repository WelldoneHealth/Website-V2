"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getHospitalList } from "@/shared/apis/hospitalCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import HospitalCardSliderSkeleton from "@/modules/home/skeleton/HospitalCardSliderSkeleton";

const FacilitiesSection = () => {
  const { data: clinicList, isLoading } = useQuery({
    queryKey: ["clinicList"],
    queryFn: getHospitalList,
    enabled: true,
  });

  // Custom Arrow Components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 rounded-full p-2 shadow-lg z-10 hover:bg-gray-300"
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
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 rounded-full p-2 shadow-lg z-10 hover:bg-gray-300"
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
    <section id="facilities" className="py-24 ">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clinics/Hospitals Associated With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access top-quality healthcare facilities in your area.
          </p>
        </div>

        {/* Facilities Slider */}
        {isLoading ? (
          <div className="text-center text-gray-600">
            <HospitalCardSliderSkeleton />
          </div>
        ) : ( <>          <div className="relative">
            <Slider {...sliderSettings}>
              {clinicList?.map((clinic, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-video w-full bg-gray-200 ">
                      <img
                        src={clinic?.page_setup__page_logo}
                        className="w-full h-full object-contain"
                        alt="Clinic Logo"
                      />
                      
                    </div>

                    <div className="p-1 msm:px-4 text-center ">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {clinic?.establishment_name}
                      </h4>
                      <span className="text-gray-500">
                        {clinic?.branch},{" "}
                        {clinic?.state__name
                          ?.toLowerCase()
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      </span>
                      <div className="flex items-center mb-4">
                        <span className="text-gray-600">{clinic.location}</span>
                      </div>
                      <div className="w-full ssm:px-2 pb-4 asm:px-4 msm:px-2 md:px-0  flex items-center justify-between gap-x-3">
                        <div className="flex items-center bg-[#d0eaff] text-gray-600 text-sm font-semibold py-1 px-3 rounded-full">
                          {clinic?.total_doctor > 0
                            ? `${clinic?.total_doctor} Doctor associated`
                            : "No Doctors"}
                        </div>

                        <Link
                          href={`/hospital-details/${clinic?.slug}`}
                          passHref
                        >
                          <button className="bg-[#005499] text-white py-1 px-3 rounded-full hover:bg-primary-600 transition-colors inline-flex items-center">
                            View Details
                            {/* <svg
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
                            </svg> */}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href={`/search-listing?is_hospital=true`} passHref>
          <button className="bg-[#005499] text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors inline-flex items-center">
            View All Facilities
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
        </>
 )}
      </div>
    </section>
  );
};

export default FacilitiesSection;
