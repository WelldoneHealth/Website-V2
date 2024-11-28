import React from 'react'
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";



export default function SelectPatientComp({patientData,isSelected,onChangeFunc}) {
  return (
    <div
                          style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                         
                          className="w-full max-w-[900px] p-4 flex justify-start patientDatas-start gap-4 border-[1px] border-primary rounded-[10px]"
                        >
                          {/* ------checkout------------ */}
                          <input
                            type="radio"
                            onChange={onChangeFunc}
                            name="patientSelection"
                            value={patientData}
                            className="w-[20px] h-[20px]"
                            checked={isSelected}
                          />
                          <div className="w-full space-y-2">
                            <div className="w-full flex  patientDatas-start gap-x-2">
                              <div className="bg-[#D9D9D9] size-[50px] flex justify-center patientDatas-center rounded-full font-medium  ">
                                RN
                              </div>
                              <div className="w-full  space-y-[2px] ">
                                <div className="w-full my-auto space-y-1 flex patientDatas-center justify-between">
                                  <div className="flex patientDatas-center gap-x-3">
                                    <p className="text-base sm:text-lg font-medium">
                                      {patientData?.first_name}&nbsp;
                                      {patientData?.middle_name}&nbsp;{patientData?.last_name}
                                    </p>
                                    <p className="text-primary px-2 flexCenter border-[1px] border-primary rounded-[5px]">
                                      Me
                                    </p>
                                    <p className="flex max-sm:hidden patientDatas-center gap-x-1 px-3 py-[2px] bg-[#EFEFEF] rounded-md">
                                      <img
                                        src={outlineGeoLocationIcon?.src}
                                        className=""
                                        alt="load..."
                                      />
                                      {patientData?.contact}
                                    </p>
                                  </div>
                                  <p className="text-primary font-medium">
                                    Edit
                                  </p>
                                </div>

                                <p className="text-sm">{patientData?.age} years</p>
                                <p className="text-sm text-[#5A5D62] sm:hidden ">
                                  {patientData?.contact}
                                </p>
                              </div>
                            </div>
                            <div className=" max-sm:hidden px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
                              <img
                                src={outlineGeoLocationIcon?.src}
                                className=""
                                alt="load..."
                              />
                              {patientData?.address}
                            </div>
                          </div>
                        </div>
  )
}
