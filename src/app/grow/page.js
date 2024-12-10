import React from "react";
import premiumIcon from "@/asset/Icons/premium.svg";
import rocketIcon2 from "@/asset/Icons/rocket2.svg";
import ckeckIcon2 from "@/asset/Icons/check2.svg";
import adsIcon from "@/asset/Icons/ads.svg";
import calendarIcon2 from "@/asset/Icons/calendar2.svg";

import feature1Iamge from "@/asset/Images/feature1.png";
import feature2Iamge from "@/asset/Images/feature2.png";
import feature3Iamge from "@/asset/Images/feature3.png";
import feature4Iamge from "@/asset/Images/feature4.png";
import feature5Iamge from "@/asset/Images/feature5.png";
import header3 from "@/asset/Images/header3.png";

import {
  data1,
  data2,
  data3,
  data4,
  data5,
} from "@/Utilities/extraDetails/page2details";
import SuccessStorySlider from "@/components/SuccessStorySlider";
import InfoDetails from "@/components/InfoDetails";
import Banner2 from "@/components/Banner2";
import Link from "next/link";

export default function Grow() {
  const FeaturesComponent = ({
    icon,
    iconHeading,
    heading,
    mainImage,
    textData,
  }) => (
    <div
      style={{ boxSshadow: "0px 0px 4px 0px #01549A" }}
      className="w-full px-4 sm:px-6  lg:px-10 py-4 sm:py-6 border-[1px] border-[#DADADA] rounded-3xl flex items-start gap-x-4 lsm:gap-x-8"
    >
      <div className="space-y-3 asm:space-y-5">
        <div className="px-3 lsm:px-5 py-2 asm:py-3 bg-secondary rounded-[10px] text-primary text-xs ssm:text-sm asm:text-base lg:text-lg font-medium flex items-center gap-x-3">
          <img
            src={icon?.src}
            className=" w-[30px] asm:w-[40px]  lsm:w-auto"
            alt="load..."
          />{" "}
          <p className="font-medium">{iconHeading}</p>
        </div>

        <img
          src={mainImage?.src}
          className="block mx-auto md:hidden w-[70%] "
          alt="load..."
        />

        <p className="text-xl asm:text-[22px] lg:text-[28px] font-bold leading-[30px] max-asm:leading-tight">
          {heading}
        </p>
        <div className="space-y-2">
          {textData.map((item) => (
            <div key={item} className="">
              <p className="font-medium text-base">{item.primaryText}</p>
              <p className="text-xs asm:text-sm">{item.subText}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={mainImage?.src}
        className="max-md:hidden w-[45%] h-auto xl:w-auto"
        alt="load..."
      />
    </div>
  );

  return (
    <div className="w-full relative space-y-16 max-w-[1600px]  mx-auto   pt-[1px]  lg:px-0 ">
      {/* ------------------------main header--------------- */}
      <div
        style={{
          background:
            "linear-gradient(270deg, rgba(150, 207, 255, 0.5) 36%, rgba(150, 207, 255, 0.1) 92%)",
        }}
        // className=" max-lg:w-full w-screen  px-2 msm:px-4 lsm:px-6  xl:px-14 pt-7 lg:pt-14   absolute left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row md:justify-between  ">
        className=" w-full max-w-[1600px]    px-2 msm:px-4 lsm:px-6  xl:px-14 pt-7 lg:pt-14   flex flex-col md:flex-row md:justify-between  "
      >
        <div className="space-y-12 msm:space-y-14 max-md:order-2  pt-2 md:pt-4  lsm:pt-10  max-lsm:pb-8   relative z-20 ">
          <div className="leading-snug msm:leading-tight max-msm:leading-tight  lg:space-y-3 2xl:space-y-5  ">
            {["Continues patients flow", "Appointments", "Consultation"].map(
              (item, index) => (
                <p
                  key={index}
                  className="font-medium text-lg asm:text-[22px] msm:text-[29px] sm:text-[32px] md:text-[24px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px]   "
                >
                  {" "}
                  Real time{" "}
                  <span className="text-primary underline underline-offset-4 ">
                    {item}
                  </span>
                </p>
              )
            )}
          </div>
<Link  href="https://clinic.welldonehealth.in/"
              passHref
              target="_blank" >
          <button
            type="button"
            className="mt-6 px-7 text-sm asm:text-base msm:text-lg xl:text-xl  py-2 lsm:py-3 rounded-[30px]  font-semibold  bg-primary text-white "
          >
            Start getting patients
          </button>
          </Link>
        </div>

        {/* -----------image------------- */}
        <div className="flex-1 max-md:order-1 max-msm:px-3  xl:w-[55%] 2xl:w-[58%] z-10   relative flex items-end max-border-[1px] border-white">
          <img src={header3?.src} className="w-full" alt="load..." />
        </div>
      </div>

      <div className=" w-full space-y-16  px-1 asm:px-3   lg:px-[2rem]">
        <InfoDetails />

        <SuccessStorySlider />

        <div className="w-full xl:px-28 mt-10 space-y-10">
          <FeaturesComponent
            icon={premiumIcon}
            iconHeading="Get the Prime Advantage"
            heading="Transform Your Practice with an Efficient Appointment Booking Platform"
            mainImage={feature1Iamge}
            textData={data1}
          />

          <FeaturesComponent
            icon={ckeckIcon2}
            iconHeading="Get the Verified Badge"
            heading="Get Noticed with Our Premium Appointment Booking Platform"
            mainImage={feature5Iamge}
            textData={data2}
          />

          <FeaturesComponent
            icon={adsIcon}
            iconHeading="Advertise Your Professional Profile"
            heading="Drive Patient Discovery with Our Appointment Booking Platform"
            mainImage={feature2Iamge}
            textData={data3}
          />

          <FeaturesComponent
            icon={rocketIcon2}
            iconHeading="Boost Your Profile"
            heading="Elevate Your Reach with Our Platform"
            mainImage={feature3Iamge}
            textData={data4}
          />

          <FeaturesComponent
            icon={calendarIcon2}
            iconHeading="Manage Your Schedule"
            heading="Effortlessly Keep Track of Appointments"
            mainImage={feature4Iamge}
            textData={data5}
          />
        </div>

        <div className="w-full sm:pt-10 lg:pt-24 xl:pt-40 ">
          <Banner2 />
        </div>
      </div>
    </div>
  );
}
