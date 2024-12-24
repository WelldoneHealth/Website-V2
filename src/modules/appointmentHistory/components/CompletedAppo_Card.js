"use client";
import React, { useEffect, useState } from "react";

import cardArrow from "@/asset/Icons/cardArrow.svg";
import infoIcon from "@/asset/Icons/info.svg";
import InfoBar from "./InfoBar";
import Appo_CardBtn1 from "./Appo_CardBtn1";
import Msg from "./Msg";
import moment from "moment";
import { useRouter } from "next/navigation";
import { getRemainingDays } from "../utilFunc/dateComparison";
import useIsShortScreen from "@/shared/utils/useIsShortScreen";
import defaultDoctor from "@/asset/Images/defaultDoctor.png";

export default function CompletedAppo_Cards({
  appointmentCardData,
  status,
  isSpecific = false,
  specificData1 = [],
  specificData2 = [],
}) {
  const router = useRouter();
  const remainingDays = getRemainingDays(appointmentCardData?.followup_date);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)"); // Small screen breakpoint
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);

    // Check initially
    handleResize();

    // Add listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const appo_data1 = [
    {
      boldText: "Patient-",
      text: `${appointmentCardData?.patient_first_name ?? ""} ${
        appointmentCardData?.patient_middle_name ?? ""
      } ${appointmentCardData?.patient_last_name ?? ""}`,
    },
    {
      boldText: "Appointment id-",
      text: appointmentCardData?.id ?? "",
    },
    {
      boldText: "Booking Date-",
      text: appointmentCardData?.booked_on ?? "",
    },
  ];

  const appo_data2 = [
    {
      boldText: "Reason-",
      text: appointmentCardData?.reason?.split("_").join(" ") ?? "General Consulant",
    },
    {
      boldText: "Payment Method-",
      text: "Pay on Conter",
    },
    {
      boldText: "Total-",
      text: `₹  ${Number(appointmentCardData?.amount) ?? ""} `,
    },
  ];

  return (
    <div
      onClick={() =>
        isSmallScreen &&
        router.push(`/appointment-history/${appointmentCardData?.id}`)
      }
      style={{ boxShadow: " 1px 1px 4px 2px #8383834D" }}
      className="w-full max-w-[950px] mx-auto   md:space-y-2 px-3 ssm:px-2 asm:px-4 py-2 max-asm:pb-3 asm:py-4 rounded-[15px] sm:border-[0.5px] border-[#DADADA]"
    >
      {/* --------------cards text--if not used by specific appointment page-------- */}
      {!isSpecific && (
        <div className="w-full max-lsm:hidden max-w-[800px]  capitalize max-sm:hidden flex  items-start flex-wrap  gap-x-11 gap-y-3  justify-between text-base lg:text-[13px] esm:text-sm ">
          {/* -------writing 1 st part------- */}
          <div className="font-normal text-nowrap  space-y-0 esm:space-y-1">
            {appo_data1.map((item, index) => (
              <p key={index}>
                <span className="font-semibold">{item.boldText}</span>{" "}
                {item.text}
              </p>
            ))}
          </div>
          {/* ------------writing 2 nd part-------------- */}
          <div className="font-normal text-nowrap space-y-0  esm:space-y-1">
            {appo_data2.map((item, index) => (
              <p key={index}>
                <span className="font-semibold">{item.boldText}</span>{" "}
                {item.text}
              </p>
            ))}
          </div>
          {/* ---------------writing 3 rd part----------- */}
          <button
            onClick={() =>
              router.push(`/appointment-history/${appointmentCardData?.id}`)
            }
            className="mt-1 text-[#01549A] font-medium px-2 md:px-4 py-2  rounded-[10px] border-[1px] border-[#01549A]  text-sm lg:text-xs esm:text-sm flex justify-center items-center text-nowrap "
          >
            {" "}
            <span className="block lg:hidden esm:block">
              + Show Appointment details
            </span>
            <span className="hidden lg:block esm:hidden">
              Appointment Details
            </span>
          </button>
        </div>
      )}

      {/* --------------cards text--if  used by specific appointment page-------- */}
      {isSpecific && (
        <div className="w-full max-md:hidden max-w-[800px] px-2  pb-3 capitalize  border-b-[2px]  border-[#DADADA] max-sm:hidden flex   gap-x-24 gap-y-3 text-sm ">
          {/* -------writing 1 st part------- */}
          <div className=" text-nowrap space-y-1">
            {specificData1.map((item, index) => (
              <p key={index}>
                <span className="font-semibold">{item.boldText}</span>{" "}
                {item.text}
              </p>
            ))}
          </div>
          {/* ------------writing 2 nd part-------------- */}
          <div className=" text-nowrap space-y-1">
            {specificData2.map((item, index) => (
              <p key={index}>
                <span className="font-semibold">{item.boldText}</span>{" "}
                {item.text}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* -----------main appointement section-------- */}
      <div className="w-full  lsm:p-4 lsm:border-[1px] border-[#DADADA] rounded-[15px] ">
        {/* -------small info bar----------- */}
        {/* <InfoBar  msg="Completed on "  appointmentDate={moment(appointmentCardData?.appointment_date).format("ddd DD MMM, YYYY")} appointmentStatus={appointmentCardData?.is_cancelled} /> */}
        <InfoBar
          msg={
            appointmentCardData?.prescription_link
              ? "Completed on "
              : appointmentCardData?.is_delayed
              ? "Delayed on "
              : "Open"
          }
          appointmentDate={moment(appointmentCardData?.appointment_date).format(
            "ddd DD MMM, YYYY"
          )}
          appointmentStatus={appointmentCardData?.is_cancelled}
          warning={
            appointmentCardData?.is_delayed ||
            (!appointmentCardData?.prescription_link &&
              !appointmentCardData?.is_cancelled)
          }
        />

        <div className=" w-full">
          <div className="w-full  mt-2 asm:mt-4 flex gap-x-3 sm:gap-x-7  ">
            {/* -----------1st part--------   size-[100px]  asm:size-[120px] max-sm:size-[120px]   ----- */}
            <div className=" max-ssm:hidden  max-msm:size-[90px]   msm:w-[120px] sm:w-[180px] md:w-[205px] aspect-[1/1]  bg-[#EFF8FF] overflow-hidden  rounded-full">
              <img
                src={appointmentCardData?.doctor_image ?? defaultDoctor?.src}
                className=" w-full h-full object-cover object-center "
                alt="load..."
              />
            </div>
            {/* ---------2nd part-------------- */}
            <div className=" w-full flex-1 ">
              <div className="w-full flex   gap-y-3 justify-between  max-md:flex-wrap ">
                <div className="  space-y-1  lsm:text-nowrap   md:space-y-2">
                  <p className="tet-base asm:text-lg msm:text-[20px] font-medium">
                    {`${appointmentCardData?.doctor_suffix ?? ""} ${
                      appointmentCardData?.doctor_name ?? ""
                    } ${appointmentCardData?.doctor_middle_name ?? ""} ${
                      appointmentCardData?.doctor_last_name ?? ""
                    }`}
                  </p>
                  <p className="text-xs asm:text-sm msm:text-base md:text-sm">
                    {appointmentCardData?.doctor_specialty ?? ""}
                    {/* <span className="text-red-900 text-xs">
                      {appointmentCardData?.doctor_expected_visiting_time}
                    </span> */}
                  </p>
                  <p className="text-xs asm:text-sm msm:text-base md:text-sm">
                    {appointmentCardData?.clinic_name ?? ""}
                  </p>
                  <p className="pt-1 text-xs asm:text-sm msm:text-base md:hidden">
                    Book for {appointmentCardData?.patient_first_name ?? ''} {appointmentCardData?.patient_middle_name ?? ''} {appointmentCardData?.patient_last_name ?? ''} (
                     {appointmentCardData?.patient_relation ?? " "})
                  </p>
                </div>
                {/* ------------------2 prescription buttons--------- */}
                {appointmentCardData?.prescription_link && (
                  <div className=" max-esm:hidden flex flex-col  items-center gap-x-5 gap-y-3">
                    <Appo_CardBtn1
                      text="Prescription"
                      linkTo={appointmentCardData?.prescription_link ?? "/"}
                      isNull={
                        appointmentCardData?.prescription_link ? false : true
                      }
                    />
                    {/* <Appo_CardBtn1 /> */}
                  </div>
                )}
              </div>

              <div className="mt-4 w-full max-md:hidden  space-y-2">
                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      `/doctor-details/${appointmentCardData?.doctor_slug}/${appointmentCardData?.branch_slug}`
                    )
                  }
                  className=" w-[230px] text-sm font-semibold bg-primary rounded-[20px] text-white py-[6px] text-center"
                >
                  Book Follow-Up
                </button>
                {appointmentCardData?.followup_date && <p className="flex items-center text-sm">
                  <img src={infoIcon?.src} className="mr-2 " alt="load..." />{" "}
                  {appointmentCardData?.followup_date
                    ? remainingDays !== 0
                      ? ` Follow before – ${
                          moment(appointmentCardData?.followup_date).format(
                            "DD/MM/YYYY"
                          ) ?? "N?A"
                        }, ${remainingDays} days remaining​  `
                      : "FollowUp Today"
                    : "FollowUp Date - N/A "}
                </p> }

                {/* --------------message---------------- */}
                {appointmentCardData?.is_clinic_booking && (
                  <div className="w-full max-lsm:hidden">
                    {" "}
                    <Msg />             
                  </div>
                )}
              </div>
            </div>
            {/* ------------------3rd part------------- */}
          {!isSpecific &&  <div className=" flex items-center lsm:hidden msm:pr-1 sm:pr-4  ">
              <img
                src={cardArrow?.src}
                className="block h-5 sm:h-10  cursor-pointer"
                alt="load..."
              />
            </div> }
          </div>
        </div>
      </div>
      {/* --------------------message in smallerscreen---------------- */}
      {appointmentCardData?.is_clinic_booking && (
        <div className="w-full pt-2  max-md:hidden block lsm:hidden">
          {" "}
          <Msg />
        </div>
      )}
    </div>
  );
}
