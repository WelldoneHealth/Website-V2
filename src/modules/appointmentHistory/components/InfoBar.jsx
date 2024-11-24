import React from "react";
import successTickIcon from "@/asset/Icons/successTick.svg";
import crossIcon from "@/asset/Icons/cross.svg";

export default function InfoBar({
  appointmentStatus,
  msg,
  appointmentDate,
  warning = false,
}) {
  console.log("the appo is", msg);

  if (warning) {
    return (
      <>
        {/* ------------after 400px--------------- */}
        <div
          className="w-full rounded-[5px] py-2 px-2 asm:px-[34px] text-xs asm:text-sm md:text-base max-asm:hidden flex items-center"
          style={{ background: "#fff2c0" }}
        >
          {msg} &nbsp;
          <span className="font-semibold "> {appointmentDate}</span>
        </div>
        {/* --------------------------below 400px-------------------- */}
        <div className="w-full  rounded-[5px]   py-2 px-2 asm:px-[34px] text-xs  flex  items-center asm:hidden">
          {msg} - &nbsp;
          <span className="font-semibold "> {appointmentDate}</span>
        </div>
      </>
    );
  }
  return (
    <>
      {/* ------------after 400px--------------- */}
      <div
        className={` w-full    rounded-[5px] ${
          !appointmentStatus
            ? "bg-[#F3FFEE] text-[#01A400]"
            : " bg-[#FFF0F0] text-[#F10000]"
        } py-2 px-2 asm:px-[34px] text-xs asm:text-sm md:text-base max-asm:hidden flex items-center `}
      >
        <img
          src={!appointmentStatus ? successTickIcon?.src : crossIcon?.src}
          className="w-4 mr-2"
          alt="load..."
        />{" "}
        {msg} &nbsp;
        <span className="font-semibold "> {appointmentDate}</span>
      </div>
      {/* --------------------------below 400px-------------------- */}
      <div
        className={` w-full  rounded-[5px] ${
          !appointmentStatus
            ? "bg-[#F3FFEE] text-[#01A400]"
            : " bg-[#FFF0F0] text-[#F10000]"
        } py-2 px-2 asm:px-[34px] text-xs  flex  items-center asm:hidden  `}
      >
        <img
          src={!appointmentStatus ? successTickIcon?.src : crossIcon?.src}
          className="w-4 mr-2"
          alt="load..."
        />{" "}
        {msg} - &nbsp;
        <span className="font-semibold "> {appointmentDate}</span>
      </div>
    </>
  );
}
