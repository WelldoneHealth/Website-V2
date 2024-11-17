"use client";

import React, { useEffect, useRef, useState } from "react";

import doctorImage2 from "@/asset/Images/doctorImage2.png";
import smallHospital3 from "@/asset/Images/smallHospital3.png";

import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import aroowIcon2 from "@/asset/Icons/arrow2.svg";
// import toast from "react-hot-toast";
import {
  appointmentOptions,
  paymentOptions,
} from "@/Utilities/extraDetails/checkoutDetails";
import axiosInstance from "@/shared/apis/axiosInstance";

export default function page() {
  // -------------------------for viewing the diffrent parts of the process when one is completed or when the button is pressed to move next step--------------
  const [statusChange, setStatusChange] = useState({
    doctorStatus: true,
    patientStatus: false,
    paymentStatus: false,
    appointmentStatus: false,
  });

  const success = () => console.log("Appointment Booking Successful");

  // -----------------------for storing the input values of the processed data------------------
  const [statusData, setStatusData] = useState({
    doctorSelection: 1,
    patientSelection: 1,
    paymentSelection: paymentOptions[0],
    appointmentSelection: appointmentOptions[0],
  });

  // --------------------- hide or view the
  const [dataVisibilityToggle, setDataVisibilityToggle] = useState({
    doctorsToggle: false,
    patientToggle: false,
    paymentToggle: false,
    appointmentToggle: false,
  });

  const getInputDetails = (e) => {
    setStatusData({ ...statusData, [e.target.name]: e.target.value });
  };

  // ---------------------referncing the  steps for scrolloing intothe view port----------------------
  const stepRef = Array.from({ length: 3 }, () => useRef(null));
  const handleScrollToBox = (index) => {
    stepRef[index].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const [view, setView] = useState(false);
  const [sliderHeading, setSliderHeading] = useState("Select Doctor");
  const [viewSliderType, setViewSliderType] = useState({
    doctor: false,
    hospital: false,
    appointment: false,
  });


const [patientList,setPatientList]=useState([])
 const getPatients = async () => {
  // console.log("ok hello")
    try {
      const response = await axiosInstance.get("apiV1/patient/");
      console.log("the data returned from respone is",response.data)
      setPatientList(response.data)
      return response.data;
    } catch (error) {
      console.log("error fetching equeue list in  doctor profile page");
    }
  };


  // useEffect(()=>getPatients(),[])
  


  return (
    <>
      <div
        className={`w-full relative max-w-[1600px] ${
          view
            ? "h-[calc(100vh-60px)]  md:h-[calc(100vh-70px)] overflow-hidden"
            : " "
        }   mx-auto px-1   asm:px-3 lg:px-0 xl:px-8  py-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7 `}
      >
        {/* ---------------appointment process-------------- */}
        <div className=" w-full  lg:w-[68%] space-y-5  ">
          {/* -----------first card ( doctor selection)---------------- */}
          <div
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="w-full  rounded-[10px]  border-[1px] border-[#EFEFEF]"
          >
            <div
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full font-medium p-4  flex items-center justify-between bg-[1px] border-[#EFEFEF] "
            >
              <p>1. Office details</p>{" "}
              <button
                type="button"
                onClick={() =>
                  setDataVisibilityToggle({
                    ...dataVisibilityToggle,
                    doctorsToggle: false,
                  })
                }
                className={`text-primary  px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${
                  !dataVisibilityToggle.doctorsToggle && "hidden"
                }  `}
              >
                Change
              </button>{" "}
            </div>
            {/* ----------------2 cards portion----------- */}
            {!dataVisibilityToggle.doctorsToggle && (
              <>
                {" "}
                <div className="w-full   space-y-4 p-5">
                  {/* -------------------doctor card------------- */}
                  <div className="space-y-1">
                    <p className="font-semibold ">Doctor</p>
                    <div
                      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                      className="w-full  max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                    >
                      {/* ------doctor image------------ */}
                      <img
                        src={doctorImage2?.src}
                        className="w-[100px] hidden"
                      />
                      <div className="w-full space-y-1">
                        <div className="w-full flex  justify-between items-center text-sm font-medium">
                          <p className="text-sm">Dr. Subhash V. Gupta</p>
                          <button
                            onClick={() => {
                              setView(true);
                              setViewSliderType({
                                ...viewSliderType,
                                doctor: true,
                              });
                            }}
                            className="text-primary"
                          >
                            Change
                          </button>
                        </div>
                        <p className="text-sm font-medium">MBBS. MD</p>
                        <p classNametext="text-xs">
                          Surgical Oncologist | Advanced Laparoscopic Surgeon |
                          Nodules | Stomach Disorders Specialist
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ----------------hospital card------------- */}
                  <div className="space-y-1">
                    <p className="font-semibold ">Clinic/Hospital</p>
                    <div
                      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                      className="w-full  max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                    >
                      {/* ------doctor image------------ */}
                      <div className="size-[100px] rounded-xl overflow-hidden hidden">
                        <img src={smallHospital3?.src} className="w-full " />
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="w-full flex  justify-between items-center text-sm font-medium">
                          <p className="text-sm">Office-1</p>
                          <button
                            onClick={() => {
                              setView(true);
                              setViewSliderType({
                                ...viewSliderType,
                                doctor: true,
                              });
                            }}
                            className="text-primary"
                          >
                            Change
                          </button>
                        </div>
                        <p className="text-sm font-medium">Hospital Name</p>
                        <p classNametext="text-xs">
                          00 Ram Nagar, Near Mahadev Temple, Satpur,
                          Nashik-422008
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 py-3 bg-[#EFEFEF]">
                  {!statusChange.patientStatus && (
                    <button
                      type="button"
                      onClick={() =>
                        statusData.doctorSelection &&
                        (setStatusChange({
                          ...statusChange,
                          patientStatus: true,
                        }),
                        setDataVisibilityToggle({
                          ...dataVisibilityToggle,
                          doctorsToggle: true,
                        }),
                        handleScrollToBox(0))
                      }
                      className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
                    >
                      Continue Appointment1
                    </button>
                  )}
                  {statusChange.patientStatus && (
                    <button
                      type="button"
                      onClick={() =>
                        statusData.doctorSelection &&
                        (setDataVisibilityToggle({
                          ...dataVisibilityToggle,
                          doctorsToggle: true,
                          patientToggle: false,
                        }),
                        handleScrollToBox(0))
                      }
                      className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
                    >
                      Continue Appointment2
                    </button>
                  )}
                </div>{" "}
              </>
            )}

            {/* ----------------------on button click new updated card ui------------------------ */}
            {dataVisibilityToggle.doctorsToggle && (
              <div className="w-full  flex flex-col sm:flex-row justify-center items-center gap-y-4  gap-x-5 p-5">
                {/* -------------------doctor card------------- */}
                {[1, 2].map((item) => (
                  <div className="space-y-1">
                    <p className="font-semibold ">Clinic/Hospital</p>
                    <div
                      key={item}
                      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                      className="w-full flex-1 max-w-[900px] p-3 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                    >
                      {/* ------doctor image------------ */}

                      <img
                        src={doctorImage2?.src}
                        className="w-[60px] sm:w-[70px] md:w-[100px] "
                      />
                      <div className="w-full space-y-1">
                        <div className="w-full flex  justify-between items-center text-sm font-medium">
                          <p className="max-sm:text-sm">Dr. Subhash V. Gupta</p>
                        </div>
                        <p className="text-xs sm:text-sm font-medium">
                          MBBS. MD
                        </p>
                        <p className="text-sm max-md:hidden leading-tight">
                          {" "}
                          Surgical Oncologist | Advanced Laparoscopic Surgeon |
                          Nodules{" "}
                        </p>
                        <p className="text-xs sm:text-sm md:hidden">
                          Surgical Oncologist
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>



          <button onClick={getPatients}
                        type="button"
                        className="px-8 py-3  font-semibold text-sm rounded-[10px]  bg-primary text-white"  >
                        Appointment for this Patient
                      </button>



          {/* -----------second card ( patient selection) -------------- */}
          {statusChange.patientStatus && (
            <div
              ref={stepRef[0]}
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full   rounded-[10px]  border-[1px] border-[#EFEFEF]"
            >
              <div
                style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                className="w-full font-medium p-4  flex items-center justify-between bg-[1px] border-[#EFEFEF] "
              >
                <p>2. Select a patient</p>{" "}
                <button
                  type="button"
                  onClick={() =>
                    setDataVisibilityToggle({
                      ...dataVisibilityToggle,
                      patientToggle: false,
                    })
                  }
                  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${
                    !dataVisibilityToggle.patientToggle && "hidden"
                  } `}
                >
                  Change
                </button>{" "}
              </div>

              {/* 2 cards portion----------- */}
              {!dataVisibilityToggle.patientToggle && (
                <>
                  {" "}
                  <div className={`w-full space-y-5 p-5 `}>
                    {patientList.length>0 && patientList.map((item, index) => (
                      <div
                        style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                        key={index}
                        className="w-full max-w-[900px] p-4 flex justify-start items-start gap-4 border-[1px] border-primary rounded-[10px]"
                      >
                        {/* ------checkout------------ */}
                        <input
                          type="radio"
                          onChange={getInputDetails}
                          name="patientSelection"
                          value={index}
                          className="w-[20px] h-[20px]"
                          checked={statusData.patientSelection == index}
                        />
                        <div className="w-full space-y-2">
                          <div className="w-full flex  items-start gap-x-2">
                            <div className="bg-[#D9D9D9] size-[50px] flex justify-center items-center rounded-full font-medium  ">
                              RN
                            </div>
                            <div className="w-full  space-y-[2px] ">
                              <div className="w-full my-auto space-y-1 flex items-center justify-between">
                                <div className="flex items-center gap-x-3">
                                  <p className="text-base sm:text-lg font-medium">
                                   {item?.first_name}&nbsp;{item?.middle_name}&nbsp;{item?.last_name}
                                  </p>
                                  <p className="text-primary px-2 flexCenter border-[1px] border-primary rounded-[5px]">
                                    Me
                                  </p>
                                  <p className="flex max-sm:hidden items-center gap-x-1 px-3 py-[2px] bg-[#EFEFEF] rounded-md">
                                    <img
                                      src={outlineGeoLocationIcon?.src}
                                      className=""
                                      alt="load..."
                                    />
                                    {item?.contact}
                                  </p>
                                </div>
                                <p className="text-primary font-medium">Edit</p>
                              </div>

                              <p className="text-sm">{item?.age}</p>
                              <p className="text-sm text-[#5A5D62] sm:hidden ">
                              {item?.contact}
                              </p>
                            </div>
                          </div>
                          <div className=" max-sm:hidden px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
                            <img
                              src={outlineGeoLocationIcon?.src}
                              className=""
                              alt="load..."
                            />
                            House, street, city, landmark, state, Country, Pin
                            Code
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* --------------------add patient button---------------------- */}
                    <button
                      type="button"
                      onClick={() => {
                        setView(true);
                        setViewSliderType({
                          ...viewSliderType,
                          appointment: true,
                        });
                      }}
                      className="rounded-[20px] px-7 py-2 text-sm border-[1px] border-primary  text-primary font-medium  "
                    >
                      + Add a New Patient
                    </button>
                  </div>
                  <div className="p-5 py-3 bg-[#EFEFEF]">
                    {!statusChange.paymentStatus && (
                      <button
                        type="button"
                        onClick={() =>
                          statusData.patientSelection &&
                          (setDataVisibilityToggle({
                            ...dataVisibilityToggle,
                            patientToggle: true,
                          }),
                          setStatusChange({
                            ...statusChange,
                            paymentStatus: true,
                          }),
                          handleScrollToBox(1))
                        }
                        className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${
                          !statusData.patientSelection
                            ? " text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]"
                            : "bg-primary text-white"
                        } `}
                        disabled={!statusData.patientSelection}
                      >
                        Appointment for this Patient
                      </button>
                    )}
                    {statusChange.paymentStatus && (
                      <button
                        type="button"
                        onClick={() =>
                          statusData.patientSelection &&
                          (setDataVisibilityToggle({
                            ...dataVisibilityToggle,
                            patientToggle: true,
                            paymentToggle: false,
                          }),
                          handleScrollToBox(1))
                        }
                        className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${
                          !statusData.patientSelection
                            ? " text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]"
                            : "bg-primary text-white"
                        } `}
                        disabled={!statusData.patientSelection}
                      >
                        Appointment for this Patient
                      </button>
                    )}
                  </div>
                </>
              )}

              {dataVisibilityToggle.patientToggle && (
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
                              Rakesh Nadre {statusData.patientSelection}{" "}
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
                              8806010415
                            </p>
                          </div>
                        </div>

                        <p className="text-sm">26 Years, 4 Month Old</p>
                        <p className="text-sm text-[#5A5D62] sm:hidden ">
                          +91-9876543210{" "}
                        </p>
                      </div>
                    </div>
                    <div className=" max-sm:hidden  px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
                      <img
                        src={outlineGeoLocationIcon?.src}
                        className=""
                        alt="load..."
                      />
                      House, street, city, landmark, state, Country, Pin Code
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* -----------third card (payment option)------------------- */}
          {statusChange.paymentStatus && (
            <div
              ref={stepRef[1]}
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full  rounded-[10px]  border-[1px] border-[#EFEFEF]"
            >
              {console.log("---", paymentOptions)}
              <div
                style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                className="w-full font-medium p-4 flex items-center justify-between bg-[1px] border-[#EFEFEF]"
              >
                <p>3. Payment options</p>{" "}
                <button
                  type="button"
                  onClick={() =>
                    setDataVisibilityToggle({
                      ...dataVisibilityToggle,
                      paymentToggle: false,
                    })
                  }
                  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${
                    !dataVisibilityToggle.paymentToggle && "hidden"
                  } `}
                >
                  Change
                </button>
              </div>

              {/*----------- 2 checkbox portion-----------  */}
              {!dataVisibilityToggle.paymentToggle && (
                <>
                  <div className="space-y-5 p-5">
                    {paymentOptions.map((item, index) => (
                      <div
                        style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                        key={index}
                        className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                      >
                        {/* ------checkout------------  */}
                        <input
                          type="radio"
                          onChange={() =>
                            setStatusData((prev) => ({
                              ...prev,
                              paymentSelection: item,
                            }))
                          }
                          name="paymentSelection"
                          value={item.id}
                          className="w-[20px] h-[20px]"
                          checked={statusData.paymentSelection?.id === item.id}
                        />

                        <div className="w-full space-y-1">
                          <p className="text-base font-medium ">
                            {item?.primaryText}
                          </p>
                          <p classNametext="text-[4px] sm:text-sm bg-red-900 ">
                            {item?.subText}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 py-3 bg-[#EFEFEF]">
                    {!statusChange.appointmentStatus && (
                      <button
                        type="button"
                        onClick={() =>
                          statusData.paymentSelection &&
                          (setDataVisibilityToggle({
                            ...dataVisibilityToggle,
                            paymentToggle: true,
                          }),
                          setStatusChange({
                            ...statusChange,
                            appointmentStatus: true,
                          }))
                        }
                        className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${
                          !statusData.paymentSelection
                            ? " text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]"
                            : "bg-primary text-white"
                        } `}
                        disabled={!statusData.paymentSelection}
                      >
                        Continue{" "}
                      </button>
                    )}
                    {statusChange.appointmentStatus && (
                      <button
                        type="button"
                        onClick={() =>
                          statusData.paymentSelection &&
                          setDataVisibilityToggle({
                            ...dataVisibilityToggle,
                            paymentToggle: true,
                            appointmentToggle: false,
                          })
                        }
                        className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${
                          !statusData.paymentSelection
                            ? " text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]"
                            : "bg-primary text-white"
                        } `}
                        disabled={!statusData.paymentSelection}
                      >
                        Continue{" "}
                      </button>
                    )}
                  </div>
                </>
              )}

              {dataVisibilityToggle.paymentToggle && (
                <div className="w-full p-5  font-medium ">
                  <p className="px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA]">
                    {" "}
                    {statusData.paymentSelection.primaryText}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ----------fourth card( appointment summary)------------------- */}
          {statusChange.appointmentStatus && (
            <div
              ref={stepRef[2]}
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full  rounded-[10px]   border-[1px] border-[#EFEFEF]"
            >
              <div
                style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                className="w-full font-medium p-4 flex items-center justify-between bg-[1px] border-[#EFEFEF]"
              >
                <p>4. Appointment summary</p>{" "}
                <button
                  type="button"
                  onClick={() =>
                    setDataVisibilityToggle({
                      ...dataVisibilityToggle,
                      appointmentToggle: false,
                    })
                  }
                  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${
                    !dataVisibilityToggle.appointmentToggle && "hidden"
                  } `}
                >
                  Change
                </button>
              </div>
              {/* 2 checkbox portion----------- */}
              <div className="space-y-5 py-5">
                {/* ------------appointment----------------- */}
                <div className="space-y-3  p-5 border-b-[1px] border-[#DADADA]">
                  <p>Book by e-Queue</p>
                  <div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-primary ">
                    <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-primary font-medium ">
                      Today
                    </p>
                    <hr />
                    <div className="w-full flexCenter gap-x-5 py-4">
                      <div
                        style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                        className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
                      >
                        2
                      </div>
                      <div className="space-y-1">
                        <p className=" text-xs">Waiting Number</p>
                        <p className="text-[#01549A] font-semibold text-lg">
                          01:15 PM
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">
                      Given Time is approximate can vary by +/-60 Min
                    </p>
                  </div>
                </div>

                {/* ----------------checkout input----------- */}
                {!dataVisibilityToggle.appointmentToggle && (
                  <div className="space-y-5 px-5">
                    <div className="space-y-3 text-sm">
                      <p>What’s The Reson for Your Visit</p>
                      <p className="border-[1px] border-[#919196] px-2 py-2 text-[#191A1B] rounded-[10px]">
                        General Consultation
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p>Have the patient seen these Doctors?</p>
                      {appointmentOptions.map((item, index) => (
                        <div
                          style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                          key={index}
                          className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                        >
                          {/* ------checkout------------ */}
                          <input
                            type="radio"
                            onChange={() =>
                              setStatusData({
                                ...statusData,
                                appointmentSelection: item,
                              })
                            }
                            name="appointmentSelection"
                            value={item.id}
                            className="w-[20px] h-[20px]"
                            checked={
                              statusData.appointmentSelection.id == item.id
                            }
                          />

                          <div className="w-full space-y-1">
                            <p className="text-base font-medium">
                              {item?.mainInfo}{" "}
                            </p>
                            <p classNametext="text-sm">₹{item?.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {!dataVisibilityToggle.appointmentToggle && (
                <div className="w-full gap-y-3 p-5 py-3 max-sm:text-xs flex flex-col sm:flex-row justify-between items-center bg-[#EFEFEF]">
                  <p>
                    Appointment confirmation WhatsApp Massage will be sent to{" "}
                    <span className="font-medium">+91 9876543210</span>{" "}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      statusData.appointmentSelection &&
                      setDataVisibilityToggle({
                        ...dataVisibilityToggle,
                        appointmentToggle: true,
                      })
                    }
                    className={`px-8 py-3 max-sm:w-full  font-semibold text-sm rounded-[10px]  ${
                      !statusData.appointmentSelection
                        ? " text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]"
                        : "bg-primary text-white"
                    } `}
                    disabled={!statusData.appointmentSelection}
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          )}

          {/* --------------------------mobile view button for moving to next processes-------------- */}
          <div className="w-full sm:hidden fixed left-0 -bottom-[10px] flex justify-center items-center border-t-[2px] border-[#DADADA] ">
            <button
              type="button"
              onClick={success}
              className="w-[80%] my-8 px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
            >
              Book Appointment
            </button>
          </div>

          {/* ---------------------steps to show in each process----------------- */}
          {!statusChange.patientStatus && (
            <div
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full max-sm:hidden px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA] font-semibold"
            >
              {" "}
              2. Select a patient
            </div>
          )}
          {!statusChange.paymentStatus && (
            <div
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full max-sm:hidden px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA] font-semibold"
            >
              3. Payment options{" "}
            </div>
          )}
          {!statusChange.appointmentStatus && (
            <div
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full max-sm:hidden px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA] font-semibold"
            >
              4. Appointment summary{" "}
            </div>
          )}

          {/* -------------confirmation buton for final appointment subission----------------------- */}
          {dataVisibilityToggle.appointmentToggle &&
            dataVisibilityToggle.patientToggle &&
            dataVisibilityToggle.paymentToggle &&
            dataVisibilityToggle.doctorsToggle && (
              <button
                type="button"
                onClick={success}
                className="my-8 px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
              >
                Book Appointment
              </button>
            )}
        </div>

        {/* -----------------appointment details-------------------- */}
        <div className="w-full flex-1  lg:w-[90%] max-lg:absolute  hidden   transition-all duration-150 ease-linear">
          {/* --------------just for development purpose to show or hide the slider one----------------  */}
          {/* <button type="button" onClick={()=>setView(!view)} className="text-white px-6 py-3 bg-primary  "  >view / hide </button> */}

          {/* --------main appointemnt part------------- */}
          <div className="w-full  max-lg:mt-16  border-2 boreder-black rounded-[20px] pt-4 pb-0 overflow-hidden ">
            <p className="text-lg font-medium  text-center">
              Book Your Appointment{" "}
            </p>
            <hr className="my-3" />

            <div className="px-5 py-3">
              <p>Book by e-Queue</p>

              <div className="">
                <div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-[#01A400] ">
                  <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-[#01A400] font-medium ">
                    Today
                  </p>
                  <hr />
                  <div className="w-full flexCenter gap-x-5 py-4">
                    <div
                      style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                      className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
                    >
                      2
                    </div>
                    <div className="space-y-1">
                      <p className=" text-xs">Waiting Number</p>
                      <p className="text-[#01549A] font-semibold text-lg">
                        01:15 PM
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px] mt-3 ">
                    Given Time is approximate can vary by +/-60 Min
                  </p>
                </div>
              </div>
            </div>

            <p className="px-5">
              Convenient, real-time scheduling and reduced wait times and
              increased efficiency for both patients and doctors.
            </p>
          </div>
        </div>
      </div>

      {view && (
        <div
          onClick={() => {
            setView(false),
              setViewSliderType({
                doctor: false,
                hospital: false,
                appointment: false,
              });
          }}
          className={`inset-0      max-w-[1600px] h-full overflow-y-scroll  2xl:h-[200%] w-full left-1/2  fixed  top-0   mx-auto overflow-hidden  transform -translate-x-1/2  z-[100000] bg-yellow-800  2xl:bg-gray-400 bg-opacity-30 transition-all duration-150 ease-linear`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={` w-[450px] h-auto absolute top-0 right-0  bg-white`}
          >
            {/* ----------------heading of the slider which cmae out------------------- */}
            <div className="w-full mb-3 px-5 py-4 flex items-center gap-x-5 border-borderPrimary border-b-[1px] ">
              <img
                onClick={() => {
                  setView(false);
                  setViewSliderType({
                    doctor: false,
                    hospital: false,
                    appointment: false,
                  });
                }}
                src={aroowIcon2.src}
                className="w-4 cursor-pointer "
                alt="load..."
              />
              <p className="text-base font-medium">{sliderHeading}</p>
            </div>

            {/* ------------------------------doctors change slider---------------- */}
            {viewSliderType.doctor && (
              <div
                onClick={(e) => e.stopPropagation()}
                className=" min-h-screen px-5 space-y-4 w-full bg-green-900"
              >
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                    className="w-full px-3 py-2 flex justify-start items-center gap-3  rounded-[10px]"
                  >
                    {/* ------doctor image------------ */}
                    <input type="radio" className="size-[25px]" />

                    <img src={doctorImage2?.src} className="w-[60px] " />
                    <div className="w-full space-y-[2px]">
                      <div className="w-full flex  justify-between items-center text-sm font-medium">
                        <p className="text-[15px]">Dr. Subhash V. Gupta</p>
                      </div>
                      <p className="text-sm font-medium">MBBS. MD</p>
                      <p className="text-[13px]">
                        Surgical Oncologist | Advanced Laparoscopic Surgeon |
                        Nodules | Stomach Disorders Specialist
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* --------------------add patient form  slider------------------- */}
            {viewSliderType.appointment && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-red-800 px-5 space-y-2"
              >
                {/* ----patient name------ */}
                <div>
                  <label class="block text-sm font-medium mb-1">
                    Patient Name<span class=" text-lg text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* --------last name------ */}
                <div>
                  <label class="block text-sm font-medium mb-1">
                    Last Name<span class=" text-lg text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* -----------------middle name------------ */}
                <div className="  ">
                  <label class="block text-sm font-medium mb-1">
                    Middle Name{" "}
                    <span class="  text-[#000000CC]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* --------mobile number------------- */}

                {/* --------------email-------------- */}
                <div className="  ">
                  <label class="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* ----------------age--------------------- */}
                <div>
                  <label class="block text-sm font-medium mb-1">
                    Age<span class=" text-lg text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* ------------gender--------------- */}
                <div>
                  <label
                    for="selection"
                    className="block text-sm font-medium mb-1"
                  >
                    Gender<span className="text-lg text-red-600">*</span>
                  </label>
                  <select
                    id="selection"
                    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                {/* ---------------blood group--------------- */}
                <div>
                  <label
                    for="selection"
                    className="block text-sm font-medium mb-1"
                  >
                    Blood Group
                  </label>
                  <select
                    id="selection"
                    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                {/* --------------language-------------- */}
                <div>
                  <label
                    for="selection"
                    className="block text-sm font-medium mb-1"
                  >
                    Primry Language
                  </label>
                  <select
                    id="selection"
                    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">English (Practice Default)</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                {/* ------------------address-------------------- */}
                <div className="  ">
                  <label class="block text-sm font-medium mb-1">
                    Address of Patient
                  </label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* --------------------------pincode---------------- */}
                <div>
                  <label class="block text-sm font-medium mb-1">
                    Pincode<span class=" text-lg text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* --------------city-------------- */}
                <div className="  ">
                  <label class="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* ---------------relationship-------------------- */}
                <div>
                  <label class="block text-sm font-medium mb-1">
                    Your Relationship
                    <span class=" text-lg text-red-600">*</span>
                  </label>
                  <select
                    id="selection"
                    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="w-full">
                  <button
                    type="button"
                    className="my-7 rounded-[10px] w-full bg-primary text-white font-medium p-3 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

     
    </>
  );
}
