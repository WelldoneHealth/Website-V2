"use client";

import React from "react";
import arrowIcon2 from "@/asset/Icons/arrow2.svg";
import rotatingArrowIcon1 from "@/asset/Icons/rotatingArrow1.svg";
import rotatingArrowIcon2 from "@/asset/Icons/rotatingArrow2.svg";
import aimIcon from "@/asset/Icons/aim.svg";
import handIcon from "@/asset/Icons/hand.svg";
import chartIcon from "@/asset/Icons/chart.svg";
import supportIcon from "@/asset/Icons/support.svg";

import doctorImage4 from "@/asset/Images/doctor4.png";
import doctorImage5 from "@/asset/Images/doctor5.png";
import doctorBannerImage2 from "@/asset/Images/doctorBanner2.png";
import backgroundImage from "@/asset/Images/background.png";
import times5Image from "@/asset/Images/times5.png";

import {
  journeyData,
  platformDetails,
  toolsDetails,
} from "@/Utilities/extraDetails/page1Details";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsivness from "@/components/Responsivness";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    arrows: false,
  };

  const cardsInfo1 = [
    {
      bgColor: "bg-[#F6F8FF]",
      image: aimIcon,
      primaryText: "Opportunity ",
      subText:
        "Reach 45 crore+ patients across 19,000+ pincodes and leverage special treatment drives like Get Well Soon offer days! ",
    },
    {
      bgColor: "bg-[#F3FDFB]",
      image: handIcon,
      primaryText: "Ease of Doing Treatment",
      subText:
        "Set up your Welldone Practice account in under 10 minutes—just 1 doctor and a valid registration number needed! ",
    },
    {
      bgColor: "bg-[#F3FAFF]",
      image: chartIcon,
      primaryText: " Growth of OPD",
      subText:
        " Clinics and hospitals experience 2.8X OPD growth, 2.3X more visibility, and up to 5X boosts during Well Being Weeks!",
    },
    {
      bgColor: "bg-[#FEF7F7]",
      image: supportIcon,
      primaryText: " Additional Support",
      subText:
        " Enhance your clinics efficiency with dedicated account management, specialized training, OPD insights, and comprehensive facility support services!",
    },
  ];

  return (
    //todo ------- mt-20  ------initial margin top

    <div className="w-full relative space-y-16 max-w-[1600px] mx-auto    pt-[1px]  lg:px-0     ">
      {/* -------------flex------  520px  ------ */}
      <div
        // style={{ background: 'linear-gradient(270deg, rgba(150, 207, 255, 0.5) 36%, rgba(150, 207, 255, 0.1) 92%)' }}
        className=" mb-8 lg:mb-20 xl:mb-40  2xl:mb-44 w-full max-h-max lsm:h-[550px]  relative flex flex-col lsm:flex-row  max-lsm:pb-10"
      >
        <img
          src={doctorBannerImage2?.src}
          className=" lsm:hidden  w-[98%] sm:w-[85%]  z-20  ml-auto block"
          alt="load..."
        />

        <div className="pl-3 sm:pl-6 lsm:pl-10  xl:pl-20 relative z-30 msm:-mt-[30px]  lsm:mt-16 flex flex-col items-start gap-y-0  text-primary">
          <p className="text-[20px] sm:text-[28px] font-bold leading-0">
            Become a
          </p>
          <p className=" text-[30px]  msm:text-[32px] sm:text-[40px] lsm:text-[38px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px] font-bold max-asm:leading-tight">
            Welldone Health practitioner
          </p>
          <p className="max-asm:mt-4  text-[26px] msm:text-[34px] sm:text-[36px] 2xl:text-[42px] ">
            and treat 1+ lakh patients
          </p>
          <Link
            href="https://clinic.welldonehealth.in/login"
            passHref
            target="_blank"
          >
            <button
              type="button"
              className="mt-8 text-[15px]  sm:text-lg px-6 md:px-10  py-3 rounded-[30px]  font-semibold  bg-primary text-white"
            >
              Get started for free
            </button>
          </Link>
        </div>
        <img
          src={backgroundImage?.src}
          className="w-full  absolute   xl:-top-16  left-0  z-10   "
          alt="load..."
        />
        <img
          src={doctorBannerImage2?.src}
          className="max-lsm:hidden w-[80%] lg:w-[75%] xl:w-[980px] 2xl:w-[1050px] absolute  right-0   z-20  "
          alt="load..."
        />
      </div>

      <div className=" px-1 asm:px-3 lg:px-[2rem]   space-y-16">
        {/* --------------flex😀-------------- */}
        <div className="w-full  px-2 asm:px-4 sm:px-10 py-6  border-[1px] border-[#DADADA] rounded-3xl flex justify-between sm:gap-x-7">
          <div className="w-full lg:w-[65%] flex flex-col gap-y-4">
            <p className="text-[26px] sm:text-[34px] leading-[35px] font-bold text-primary ">
              Doctors Love Practicing with Welldone Health
            </p>

            <div className="mt-5 mb-2 flex-1 flex lg:hidden flex-col   space-y-4  ">
              {/* <img src={rotatingArrowIcon1?.src} className=' w-[110px]' alt="load..."  /> */}
              <img
                src={doctorImage5?.src}
                className="rounded-[20px] w-[450px]"
                alt="load..."
              />
              {/* <img src={rotatingArrowIcon2?.src} className='w-[110px]' alt="load..."  /> */}
            </div>

            <p className="mb-3 text-sm xl:text-base w-full max-w-[850px]">
              Trusted by over 45 Lakh patients, Welldone Health helps doctors
              make their services available 24x7, providing seamless healthcare
              access across India.
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-5 flex-wrap  ">
              {cardsInfo1.map((item, index) => (
                <div
                  key={index}
                  className={`w-full ${item?.bgColor} sm:w-[48%] max-w-[400px] p-5 space-y-1 bg-secondary rounded-[30px]`}
                >
                  <img src={item.image?.src} className="" alt="load..." />
                  <p className="text-base lg:text-lg font-medium">
                    {item?.primaryText}
                  </p>
                  <p className="text-xs lg:text-sm leading-snug">
                    {item?.subText}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1  hidden  lsm:flex max-lg:flex justify-center flex-col space-y-4 pt-14 ">
            <img
              src={rotatingArrowIcon1?.src}
              className="w-[110px]"
              alt="load..."
            />
            <img
              src={doctorImage5?.src}
              className="rounded-[20px] w-[450px]"
              alt="load..."
            />
            <img
              src={rotatingArrowIcon2?.src}
              className="w-[110px]"
              alt="load..."
            />
          </div>
        </div>

        {/* -------------------#DADADA😀--------------------- */}
        <div className="w-full px-5   xl:px-10 py-6   border-[1px] border-[#DADADA]   rounded-3xl">
          <p className="text-[34px] sm:text-[38px] leading-[35px] font-bold text-primary">
            Your Journey  <span className="text-black">on Welldone</span>
          </p>
          <p className="mt-5 mb-2 text-sm xl:text-base">
            Starting your Treatment practices with Welldone is easy. 14 lakh+
            doctors trust Welldone with their practice
          </p>
          <div className="w-full flex  sm:justify-center max-lg:flex-wrap  gap-5 py-5 ">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className=" w-full msm:w-[90%] sm:w-[47%] md:w-[200px] esm:w-[230px] space-y-1 max-md:flex gap-x-3"
              >
                <img
                  src={item?.image?.src}
                  className=" max-md:w-[70px]  esm:w-[200px]  "
                  alt="load..."
                />
                <div className="space-y-1">
                  <p className="font-medium text-base asm:text-[20px] sm:text-lg esm:text-[20px]">
                    {item.primaryText}
                  </p>
                  <p className="text-xs ssm:text-sm asm:text-base sm:text-sm leading-snug  esm:w-[200px] ">
                    {item.subText}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="https://clinic.welldonehealth.in/login"
            passHref
            target="_blank"
            className="mt-5 w-full flexCenter"
          >
            <button
              type="button"
              className="text-lg px-7  py-2 rounded-[30px]  font-semibold  bg-primary text-white"
            >
              Get started for free
            </button>
          </Link>
        </div>

        {/* ----------------------😀---------------------  */}
        <div className=" w-full max-w-[1400px] mx-auto  px-2 asm:px-4  md:px-10 py-6  border-[1px] border-[#DADADA] rounded-3xl bg-blue-300">
          <p className="text-[30px] sm:text-[38px] leading-[35px] font-bold text-primary text-center">
            Access our tools to grow faster{" "}
            <span className="text-black">on Welldone</span>
          </p>
          <p className="mt-5 mb-2 text-center text-sm xl:text-base">
            Your Welldone account provides essential tools and support to help
            grow your clinic or hospital when needed.
          </p>
          <div className="w-full flex flex-col lg:flex-row  gap-5 py-5">
            <div className="lg:flex-1 w-full sm:w-[80%] ">
              <img src={times5Image?.src} className="w-full" alt="load..." />
            </div>
            <div className="w-full lg:w-[60%]  flex flex-col sm:flex-row justify-center  gap-5 flex-wrap">
              {toolsDetails.map((item, index) => (
                <div
                  key={index}
                  className={`w-full  ${item.bgColor} relative sm:w-[48%] xl:h-[220px]  max-w-[400px]   p-5 space-y-1  rounded-[30px]`}
                >
                  <img src={item?.image?.src} className="" alt="load..." />
                  <p className="text-base lg:text-lg font-medium">
                    {item?.maintext}
                  </p>
                  <p className="text-xs lg:text-sm  leading-snug">
                    {item?.subText}
                  </p>
                  <div className="w-full pt-2 flex justify-between items-center ">
                    <p className=" text-sm font-medium text-primary">
                      Learn more
                    </p>
                    <button type="button" className="">
                      <img
                        src={arrowIcon2?.src}
                        className="rotate-180"
                        alt="load..."
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -------------------------😀-------lllllllllllll--------------- */}
        <div className=" w-full    bg-[#F2FAFF] px-3 msm:px-6 md:px-10 py-6 space-y-5  border-[1px] border-[#DADADA] rounded-3xl">
          <p className="text-[26px] asm:text-[30px] md:text-[36px] leading-tight font-bold text-primary">
            Take a look 👀 at our{" "}
            <span className="text-primary">
              Advanced appointment booking platform! 🚀
            </span>
          </p>
          <Slider {...settings} className="flex gap-x-4">
            {platformDetails.map((item, index) => (
              <div
                key={index}
                style={{ boxShadow: " 0px 0px 4px 0px #00000040" }}
                className=" w-[98%] px-4 msm:px-6 lg:px-10 py-4 lg:py-6 bg-white border-[1px] border-[#DADADA] rounded-3xl  "
              >
                <div className="w-full flex">
                  <div className="w-full md:w-[65%] lg:w-full py-4 flex-1 ">
                    <div className=" space-y-4">
                      <p className="text-[20px] asm:text-[22px] lsm:[28px]  text-primary leading-tight">
                        Empower Your Practice with Our <br />{" "}
                        <span className="font-semibold text-nowrap">
                          EMR Dashboard!
                        </span>
                      </p>
                      <p className="w-full md:w-[80%] text-sm leading-tight">
                        {item?.subText}
                      </p>
                    </div>
                    <div className="mt-6 md:hidden w-full">
                      <img
                        src={item?.image?.src}
                        className="w-full"
                        alt="load..."
                      />
                    </div>
                    <Link
                      href="https://clinic.welldonehealth.in/login"
                      passHref
                    >
                      <button
                        type="button"
                        className="mt-6 lg:mt-12 px-5  py-2 rounded-[30px]  font-semibold text-xs  border-[1px] border-primary  text-primary"
                      >
                        Explore All Features
                      </button>
                    </Link>
                  </div>
                  <div className=" max-md:hidden max-lg:w-[45%] ">
                    <img
                      src={item?.image?.src}
                      className="max-lg:w-full lg:w-[400px] 2xl:w-[500px]"
                      alt="load..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* <div className="w-full flexCenter">
    <img src={dotsIcon?.src} className=' ' alt="load..."  />
</div> */}
        </div>

        {/* --------------flex😀--llllllllllll----------- */}
        <div className=" mx-auto w-full max-w-[900px] p-3 border-[1px] border-[#007185] rounded-[30px] flex max-md:items-center md:gap-x-14">
          <img
            src={doctorImage4?.src}
            className="max-md:hidden md:w-[290px] lsm:w-[300px] rounded-[30px]"
            alt="load..."
          />
          <div className="text-center text-primary  ">
            <p className="text-[25px] asm:text-[28px] leading-tight">
              Open an account in <br className="max-md:hidden" /> just{" "}
              <span className="font-semibold">10 minutes.</span>
            </p>
            <p className="my-3 text-sm leading-snug">
              Streamline your practice with our cutting-edge tools and insights,
              designed to optimize patient care and management.
            </p>
            {/* <div className="w-full flexCenter bg-red-900"> */}
            <Link
              href="https://clinic.welldonehealth.in/login"
              passHref
              target="_blank"
            >
              <button
                type="button"
                className="mt-2 md:mt-4 px-7  py-2 rounded-[30px]  font-semibold  bg-primary text-white"
              >
                Open an Account free
              </button>
            </Link>
            {/* </div> */}
          </div>
        </div>

        <Responsivness />
      </div>
    </div>
  );
}
