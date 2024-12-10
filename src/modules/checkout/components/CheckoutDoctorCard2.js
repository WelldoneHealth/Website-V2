import React from 'react'

export default function CheckoutDoctorCard2({doctorData}) {
  return (
    <div className=" max-md:w-full space-y-1 flex-1">
    <p className="font-semibold ">Doctor</p>
    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-full flex-1 max-w-[900px] p-3 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
    >
      {/* ------doctor image------------ */}

      <img
        src={doctorData?.profile_picture}
        className="w-[60px] sm:w-[70px] md:w-[100px] aspect-[1/1] object-center object-cover rounded-full overflow-hidden "
      />
      <div className="w-full space-y-1">
        <div className="w-full flex  justify-between items-center text-sm font-medium">
          <p className="text-base msm:text-lg md:text-base">
            {doctorData?.first_name}&nbsp;
            {doctorData?.middle_name}&nbsp;
            {doctorData?.last_name}; 
          </p>
        </div>
        <p className="text-sm md:text-[13px]">
          {doctorData?.education_and_background
            ?.map((item) => item.qualification)
            .join(" / ")}
        </p>
        <p className="text-sm md:text-[13px] max-md:hidden leading-tight">
        {doctorData?.specialty_treatment ?? ''}

        </p>
        <p className="text-xs sm:text-sm md:hidden">
          {doctorData?.practice_specialty ?? ''}
        </p>
      </div>
    </div>
  </div>
  )
}
