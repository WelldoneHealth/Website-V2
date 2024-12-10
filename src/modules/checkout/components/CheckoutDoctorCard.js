import React from 'react'
import { useRouter } from 'next/navigation'
import defaultDoctor from "@/asset/Images/defaultDoctor.png"


export default function CheckoutDoctorCard({doctorInfo}) {
    const router=useRouter()


  return (
    <div className=" sm:space-y-1">
    <p className=" max-sm:my-2 font-semibold flex justify-between items-center  asm:text-lg ">Doctor    <button
            onClick={() => {
              router.back();
            }}
            className="text-primary  text-xs msm:text-sm  sm:hidden " 
          >
            Change
          </button></p>
    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-full   max-w-[900px] p-2 msm:p-4 flex justify-start items-center gap-3 msm:gap-4 border-[1px] border-primary rounded-[10px]"
    >
      {/* ------doctor image------------ */}
      <img
        src={doctorInfo?.profile_picture ?? defaultDoctor?.src }
        // src={ defaultDoctor?.src }
        className=" w-[80px]  sm:w-[100px] aspect-[1/1] object-center object-cover rounded-full overflow-hidden "
      />
      <div className="w-full space-y-[2px] asm:space-y-1">
        <div className="w-full flex  justify-between items-center text-sm font-medium">
          <p className="text-[13px]  asm:text-sm msm:text-base">
            {doctorInfo?.first_name}&nbsp;
            {doctorInfo?.middle_name}&nbsp;  
            {doctorInfo?.last_name} 
          </p>
          <button
            onClick={() => {
              router.back();
            }}
            className="text-primary max-sm:hidden  text-base" 
          >
            Change
          </button>
        </div>
        <p className="text-[11px] asm:text-xs msm:text-[13px] sm:text-sm">
          {doctorInfo?.education_and_background
            ?.map((item) => item.qualification)
            .join(" / ")}{" "}
        </p>
        <p className=" text-[11px] asm:text-xs msm:text-[13px] sm:text-sm ">
       {doctorInfo?.practice_specialty ?? ''}
        </p>
      </div>
    </div>
  </div>
  )
}
