import React from 'react'
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";



export default function SelectPatientComp2({patientInfo}) {
  return (
    <div className="w-full p-5  font-medium ">
    <div className="w-full px-7 py-4 space-y-2 rounded-[10px] border-[1px]  border-[#DADADA]">
      <div className="w-full flex items-start gap-x-2">
        <div className="bg-[#D9D9D9] w-12  h-12 flexCenter rounded-full font-medium  ">
          RN
        </div>
        <div className="w-full space-y-[2px]">
          <div className="w-full space-y-1 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <p className="text-lg font-medium">
                {patientInfo?.first_name}&nbsp;
                {patientInfo?.middle_name}&nbsp;
                {patientInfo?.last_name}
              </p>
              <p className="text-primary px-2 flexCenter border-[1px] border-primary rounded-[5px]">
                Me
              </p>
              <p className="max-sm:hidden  flex items-center gap-x-1 px-3 py-[2px] bg-[#EFEFEF] rounded-md ">
                <img
                  src={outlineGeoLocationIcon?.src}
                  className=""
                  alt="load..."
                />
                {patientInfo?.contact}
              </p>
            </div>
          </div>

          <p className="text-sm">
            {patientInfo?.age} years
          </p>
          <p className="text-sm text-[#5A5D62] sm:hidden ">
            {patientInfo?.contact}
          </p>
        </div>
      </div>
      <div className=" max-sm:hidden  px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
        <img
          src={outlineGeoLocationIcon?.src}
          className=""
          alt="load..."
        />
        {patientInfo?.address}
      </div>
    </div>
  </div>
  )
}
