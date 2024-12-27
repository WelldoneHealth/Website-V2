import React from 'react'
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import outlineMobilePhone from "@/asset/Icons/outlineMobilePhone.svg";



export default function SelectPatientComp({patientData,isSelected,onChangeFunc,onOpen,patientEditFunc}) {
  console.log("the patientdata is",patientData?.last_name)
  return (
    <div
                          style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                         
                          className="w-full max-w-[900px] max-h-max p-2 msm:p-4 flex justify-start patientDatas-start gap-x-2 sm:gap-4 border-[1px] border-primary rounded-[10px]"
                        >
                          {/* ------checkout------------ */}
                          <input
                            type="radio"
                            onChange={onChangeFunc}
                            name="patientSelection"
                            value={patientData}
                            className="w-[20px] h-[20px] my-auto"
                            checked={isSelected}
                          />
                          <div className="w-full space-y-2 ">
                            <div className="w-full flex items-center gap-x-2">
                              <div className="bg-[#D9D9D9] size-[45px]  asm:size-[50px] flex justify-center items-center patientDatas-center rounded-full font-medium  ">
                              { patientData?.first_name && patientData?.first_name[0]?.toUpperCase()}{ patientData?.last_name &&  patientData?.last_name[0]?.toUpperCase()}
                              </div>
                              <div className="w-full flex-1  space-y-[2px] ">
                                <div className="w-full my-auto space-y-1 flex patientDatas-center justify-between">
                                  <div className="flex patientDatas-center gap-x-3">
                                    <p className="text-base">
                                      {patientData?.first_name ?? ''}&nbsp;
                                      {patientData?.middle_name ?? ''}&nbsp;{patientData?.last_name?? ''}
                                    </p>
                                    <p className="text-primary text-sm px-2 flexCenter border-[1px] border-primary rounded-[5px]">
                                      Me
                                    </p>
                                    {patientData?.contact  && <p className="flex max-md:hidden  gap-x-1 px-3 py-[2px] bg-[#EFEFEF] rounded-md text-[11px] asm:text-xs msm:text-[13px] sm:text-sm ">
                                      <img
                                        src={outlineMobilePhone?.src}
                                        className=""
                                        alt="load..."
                                      />
                                      {patientData?.contact}
                                    </p>}
                                  </div>
                                  {/* -----------------------patient edit----------------------- */}
                                  {/* <p  onClick={()=>{patientEditFunc();onOpen()}} className="text-primary font-medium cursor-pointer">
                                    Edit
                                  </p> */}
                                </div>

                                <p className="text-sm">{patientData?.age} years</p>
                                <p className="text-sm text-[#5A5D62] md:hidden ">
                                 +91 {patientData?.contact}
                                </p>
                              </div>
                            </div>
                           {patientData?.address && <div className="text-sm max-md:hidden px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
                              <img
                                src={outlineGeoLocationIcon?.src}
                                className=""
                                alt="load..."
                              />
                              {patientData?.address}
                            </div> }
                          </div>
                        </div>
  )
}
