"use client";
import React, { useEffect, useState } from "react";
import InfoBar from "./InfoBar";
import Msg from "./Msg";
import moment from "moment";
import { useRouter } from "next/navigation";
import defaultDoctor from "@/asset/Images/defaultDoctor.png";

export default function CanceledAppo_Card({ appointmentCardData, status }) {
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Small screen breakpoint
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
      style={{ boxShadow: " 1px 1px 4px 2px #8383834D" }}  
      onClick={() =>
        isSmallScreen &&
        router.push(
          `/doctor-details/${appointmentCardData?.doctor_slug}/${appointmentCardData?.branch_slug}`
        )
      }
      className="w-full max-w-[950px] mx-auto   md:space-y-2 px-3 ssm:px-2 asm:px-4 py-2 max-asm:pb-3 asm:py-4 rounded-[15px] sm:border-[0.5px] border-[#DADADA]"
    >
      {/* --------------cards text---------- */}
      <div className="w-full max-lsm:hidden max-w-[800px] max-sm:hidden flex  items-start flex-wrap  gap-x-11 gap-y-3  justify-between  text-base lg:text-[13px] esm:text-sm">
        {/* -------writing 1 st part------- */}
        <div className="font-normal text-nowrap space-y-1">
          {appo_data1.map((item, index) => (
            <p key={index}>
              <span className="font-semibold">{item.boldText}</span> {item.text}
            </p>
          ))}
        </div>
        {/* ------------writing 2 nd part-------------- */}
        <div className="font-normal text-nowrap space-y-1">
          {appo_data2.map((item, index) => (
            <p key={index}>
              <span className="font-semibold">{item.boldText}</span> {item.text}
            </p>
          ))}
        </div>
      </div>

      {/* -----------main appointement section-------- */}
      <div className="w-full  lsm:p-4 lsm:border-[1px] border-[#DADADA] rounded-[15px]">
        {/* -----------------info bar------------ */}

        {appointmentCardData?.is_delayed ? (
          <InfoBar
            msg={`Cancelled by ${
              appointmentCardData?.cancellation_reason === "by_patient"
                ? "you"
                : "doctor"
            }`}
            appointmentDate={moment(
              appointmentCardData?.appointment_date
            ).format("ddd DD MMM, YYYY")}
            appointmentStatus={appointmentCardData?.is_cancelled}
          />
        ) : (
          <InfoBar
            msg="by you on"
            appointmentDate={moment(
              appointmentCardData?.appointment_date
            ).format("ddd DD MMM, YYYY")}
            appointmentStatus={appointmentCardData?.is_cancelled}
          />
        )}

        <div className="w-full">
          <div className="w-full mt-2 asm:mt-4 flex gap-x-3 sm:gap-x-7  ">
            {/* -----------1st part------------- */}
            <div className=" max-ssm:hidden w-[120px]  asm:w-[150px] sm:w-[180px] md:w-[205px] aspect-[1/1]  bg-[#EFF8FF] overflow-hidden  rounded-full">
              <img
                src={appointmentCardData?.doctor_image ?? defaultDoctor?.src}
                className=" w-full h-full object-cover object-center "
                alt="load..."
              />
            </div>
            {/* ---------2nd part-------------- */}
            <div className=" w-full flex-1">
              <div className="w-full flex justify-between flex-wrap gap-x-16 gap-y-3 ">
                <div className="  space-y-1  lsm:text-nowrap   md:space-y-2">
                  <p className="tet-base asm:text-lg msm:text-[20px] font-medium">
                    {`${appointmentCardData?.doctor_suffix} ${appointmentCardData?.doctor_name} ${appointmentCardData?.doctor_middle_name} ${appointmentCardData?.doctor_last_name}`}
                  </p>
                  <p className="text-xs asm:text-sm msm:text-base md:text-sm">
                    {appointmentCardData?.doctor_specialty ?? ""}
                  </p>
                  <p className="text-xs asm:text-sm msm:text-base md:text-sm">
                    {appointmentCardData?.clinic_name ?? ""}{" "}
                  </p>
                  <p className="pt-1 text-xs asm:text-sm msm:text-base md:hidden">
                    Book for Rakesh Nandre (
                    {appointmentCardData?.patient_relation ?? ""})
                  </p>
                </div>
                <div className="max-md:hidden space-y-3">
                  <button
                    type="button"
                    onClick={() =>
                      router.push(
                        `/doctor-details/${appointmentCardData?.doctor_slug}/${appointmentCardData?.branch_slug}`
                      )
                    }
                    className="px-5 py-[6px] w-[250px] justify-center flex items-center gap-x-2 text-sm font-medium border-[1px] border-[#01549A]  rounded-[20px] text-white bg-primary  "
                  >
                    {" "}
                    Book Again{" "}
                  </button>
                </div>
              </div>

              {appointmentCardData?.is_clinic_booking && (
                <div className="w-full max-lsm:hidden">
                  {" "}
                  <Msg />
                </div>
              )}
            </div>
            {/* <div className=" flex items-center md:hidden msm:pr-1 sm:pr-4 ">
<img src={cardArrow?.src} className="block h-5 sm:h-10  cursor-pointer" alt="load..."  />
</div> */}
          </div>
        </div>
      </div>
      {appointmentCardData?.is_clinic_booking && (
        <div className="w-full pt-2  max-md:hidden block lsm:hidden">
          {" "}
          <Msg />
        </div>
      )}
    </div>
  );
}
