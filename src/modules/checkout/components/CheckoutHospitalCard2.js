import React from 'react'

export default function CheckoutHospitalCard2({hospitalData}) {
  return (
    <div className="space-y-1 flex-1">
    <p className="font-semibold ">Clinic/Hospital</p>
    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-full flex-1 max-w-[900px] p-3 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
    >
      {/* ------hospital image------------ */}

      <img
        src={hospitalData?.clinic_logo}
        className="w-[60px] sm:w-[70px] md:w-[100px] "
      />
      <div className="w-full space-y-1">
        {/* <div className="w-full flex  justify-between items-center text-sm font-medium">
            <p className="max-sm:text-sm">
        {hospitalData?.clinic_name}
            </p>
          </div>  */}
        <p className="text-xs sm:text-sm font-medium">
          {hospitalData?.clinic_name}
        </p>
        <p className="text-sm max-md:hidden leading-tight">
          {hospitalData?.clinic_address}
        </p>
        <p className="text-xs sm:text-sm md:hidden">
          Surgical Oncologist
        </p>
      </div>
    </div>
  </div>
  )
}
