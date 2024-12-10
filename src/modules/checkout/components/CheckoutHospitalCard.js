import React from 'react'
import { useRouter } from 'next/navigation';
import smallHospital3 from "@/asset/Images/smallHospital3.png";
import { capitalCase } from 'change-case';


export default function CheckoutHospitalCard({hospitalInfo}) {
    const router=useRouter()
  return (
    <div className=" sm:space-y-1">
<p className=" max-sm:my-2 font-semibold flex justify-between items-center  asm:text-lg ">Clinic/Hospital    <button
            onClick={() => {
              router.back();
            }}
            className="text-primary  text-xs msm:text-sm  sm:hidden " 
          >
            Change
          </button></p>    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-full   max-w-[900px] p-2 msm:p-4 flex justify-start items-center gap-3 msm:gap-4 border-[1px] border-primary rounded-[10px]"
    >
      {/* ------hospital image------------ */}
      {/* <div className="w-[80px]  sm:w-[100px] aspect-[1/1] overflow-hidden "> */}
        <img
          src={
            hospitalInfo?.clinic_logo ??
            smallHospital3?.src
          }
          className="w-[80px]  sm:w-[100px] aspect-[1/1] object-center object-cover overflow-hidden rounded-[10px]"
        />
      {/* </div> */}

      <div className="flex-1 space-y-1 md:space-y-2">
        <div className="w-full flex  justify-between items-start text-sm ">
          <div className="">
            <p className="text-[13px]  asm:text-sm msm:text-base">
              {hospitalInfo?.clinic_name}
            </p>
            <p className="text-[11px] asm:text-xs msm:text-[13px] sm:text-sm">
              {capitalCase(hospitalInfo?.clinic_address)}
            </p>
          </div>
          <button
            onClick={() => {
              router.back();
            }}
            className="text-primary max-sm:hidden  text-base font-medium"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
