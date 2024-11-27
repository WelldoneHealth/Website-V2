import React from 'react'
import { useRouter } from 'next/navigation';
import smallHospital3 from "@/asset/Images/smallHospital3.png";



export default function CheckoutHospitalCard({hospitalInfo}) {
    const router=useRouter()
  return (
    <div className="space-y-1">
    <p className="font-semibold ">Clinic/Hospital</p>
    <div
      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
      className="w-full  max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
    >
      {/* ------hospital image------------ */}
      <div className="size-[100px] rounded-xl overflow-hidden ">
        <img
          src={
            hospitalInfo?.clinic_logo ??
            smallHospital3?.src
          }
          className="w-full "
        />
      </div>

      <div className="flex-1 space-y-1">
        <div className="w-full flex  justify-between items-start text-sm font-medium">
          <div className="">
            <p className="text-sm font-medium">
              {hospitalInfo?.clinic_name}
            </p>
            <p className="text-xs">
              {hospitalInfo?.clinic_address}
            </p>
          </div>
          <button
            onClick={() => {
              router.back();
            }}
            className="text-primary"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
