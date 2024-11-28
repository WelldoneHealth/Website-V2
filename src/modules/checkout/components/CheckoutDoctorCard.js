import React from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutDoctorCard({doctorInfo}) {
    const router=useRouter()


  return (
    <div className="space-y-1">
    <p className="font-semibold ">Doctor</p>
    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-full  max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
    >
      {/* ------doctor image------------ */}
      <img
        src={doctorInfo?.profile_picture}
        className="w-[100px] "
      />
      <div className="w-full space-y-1">
        <div className="w-full flex  justify-between items-center text-sm font-medium">
          <p className="text-sm">
            {doctorInfo?.first_name}&nbsp;
            {doctorInfo?.middle_name}&nbsp;
            {doctorInfo?.last_name}
          </p>
          <button
            onClick={() => {
              router.back();
            }}
            className="text-primary"
          >
            Change
          </button>
        </div>
        <p className="text-sm font-medium">
          {doctorInfo?.education_and_background
            ?.map((item) => item.qualification)
            .join(" / ")}{" "}
        </p>
        <p className="text-xs">
          Surgical Oncologist | Advanced Laparoscopic Surgeon |
          Nodules | Stomach Disorders Specialist ------
        </p>
      </div>
    </div>
  </div>
  )
}
