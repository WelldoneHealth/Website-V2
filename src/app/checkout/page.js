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
import { useAppointmentStore } from "@/modules/doctorDetails/data/appointmentStore";
import moment from "moment";
import AddPatientDrawer from "@/shared/atoms/addPatientDrawer";
import { addAppointment } from "@/modules/checkout/apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import AuthenticatedLayout from "@/shared/layouts/AuthenticatedLayout";
import { toast } from "sonner";

export default function page() {
  const appointmentData = useAppointmentStore((state) => state.appointmentData);

  console.log(appointmentData);

  const router = useRouter();

  const [statusChange, setStatusChange] = useState({
    doctorStatus: true,
    patientStatus: false,
    paymentStatus: false,
    appointmentStatus: false,
  });

  // -----------------------for storing the input values of the processed data------------------
  const [statusData, setStatusData] = useState({
    doctorSelection: appointmentData.doctorData,
    patientSelection: 1,
    paymentSelection: paymentOptions[0],
    appointmentSelection: appointmentOptions[0],
  });

  console.log("the doctor is", statusData.doctorSelection);

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

  const [patientList, setPatientList] = useState([]);
  const getPatients = async () => {
    try {
      const response = await axiosInstance.get("apiV1/patient/");
      setStatusData({ ...statusData, patientSelection: response.data[0] });
      setPatientList(response.data);
      return response.data;
    } catch (error) {
      console.log("error fetching equeue list in  doctor profile page");
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  const appointmentMutation = useMutation({
    mutationFn: addAppointment,
    onSuccess: () => {
      router.push(`/checkout/appointmentConfirmation`);
      toast("Appointment has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    },
    onError: (error) => {
      toast("Something went wrong!", {
        description: "Try again later!",
      });
      console.error("Error adding appointment:", error);
    },
  });

  const handleBookAppointment = () => {
    let formData = {
      ...{
        doctor: appointmentData?.doctorData?.id,
        slot: null,
        branch: appointmentData?.branchData?.branch_id,
        is_first_visit: statusData.appointmentSelection?.isFirstVisit,
        is_equeue: true,
        amount: statusData.appointmentSelection?.charge ?? 0,
        payment_method: "cash",
        date: moment().format("YYYY-MM-DD"),
        appointment_date: moment().format("YYYY-MM-DD"),
        patient: statusData.patientSelection.id,
      },
      payment_method: "cash",
    };
    appointmentMutation.mutate(formData);
  };

  return (
    <AuthenticatedLayout>
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
                        src={appointmentData.doctorData?.profile_picture}
                        className="w-[100px] "
                      />
                      <div className="w-full space-y-1">
                        <div className="w-full flex  justify-between items-center text-sm font-medium">
                          <p className="text-sm">
                            {appointmentData?.doctorData?.first_name}&nbsp;
                            {appointmentData?.doctorData?.middle_name}&nbsp;
                            {appointmentData?.doctorData?.last_name}
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
                          {appointmentData?.doctorData?.education_and_background
                            ?.map((item) => item.qualification)
                            .join(" / ")}{" "}
                        </p>
                        <p classNametext="text-xs">
                          Surgical Oncologist | Advanced Laparoscopic Surgeon |
                          Nodules | Stomach Disorders Specialist ------
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
                      {/* ------hospital image------------ */}
                      <div className="size-[100px] rounded-xl overflow-hidden ">
                        <img
                          src={
                            appointmentData?.branchData?.clinic_logo ??
                            smallHospital3?.src
                          }
                          className="w-full "
                        />
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="w-full flex  justify-between items-start text-sm font-medium">
                          <div className="">
                            <p className="text-sm font-medium">
                              {appointmentData?.branchData?.clinic_name}
                            </p>
                            <p classNametext="text-xs">
                              {appointmentData?.branchData?.clinic_address}
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
                </div>
                <div className="p-5 py-3 bg-[#EFEFEF]">
                  {!statusChange.patientStatus && (
                    <button
                      type="button"
                      onClick={() => {
                        setStatusChange({
                          ...statusChange,
                          patientStatus: true,
                        }),
                          setDataVisibilityToggle({
                            ...dataVisibilityToggle,
                            doctorsToggle: true,
                          }),
                          handleScrollToBox(0);
                      }}
                      className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
                    >
                      Continue Appointment
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
                      Continue Appointment
                    </button>
                  )}
                </div>{" "}
              </>
            )}

            {/* ----------------------on button click new updated card ui------------------------ */}
            {dataVisibilityToggle.doctorsToggle && (
              <div className="w-full  flex flex-col sm:flex-row justify-center items-center gap-y-4  gap-x-5 p-5">
                {/*------------------new doctor card---------------- */}
                <div className="space-y-1 flex-1">
                  <p className="font-semibold ">Doctor</p>
                  <div
                    style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                    className="w-full flex-1 max-w-[900px] p-3 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                  >
                    {/* ------doctor image------------ */}

                    <img
                      src={statusData.doctorSelection?.profile_picture}
                      className="w-[60px] sm:w-[70px] md:w-[100px] "
                    />
                    <div className="w-full space-y-1">
                      <div className="w-full flex  justify-between items-center text-sm font-medium">
                        <p className="max-sm:text-sm">
                          {statusData.doctorSelection?.first_name}&nbsp;
                          {statusData.doctorSelection?.middle_name}&nbsp;
                          {statusData.doctorSelection?.last_name};
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm font-medium">
                        {statusData.doctorSelection?.education_and_background
                          ?.map((item) => item.qualification)
                          .join(" / ")}
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

                {/* ------------------------new hospital card-------------------- */}
                <div className="space-y-1 flex-1">
                  <p className="font-semibold ">Clinic/Hospital</p>
                  <div
                    style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                    className="w-full flex-1 max-w-[900px] p-3 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                  >
                    {/* ------hospital image------------ */}

                    <img
                      src={appointmentData?.branchData?.clinic_logo}
                      className="w-[60px] sm:w-[70px] md:w-[100px] "
                    />
                    <div className="w-full space-y-1">
                      {/* <div className="w-full flex  justify-between items-center text-sm font-medium">
                          <p className="max-sm:text-sm">
                      {appointmentData?.branchData?.clinic_name}
                          </p>
                        </div>  */}
                      <p className="text-xs sm:text-sm font-medium">
                        {appointmentData?.branchData?.clinic_name}
                      </p>
                      <p className="text-sm max-md:hidden leading-tight">
                        {appointmentData?.branchData?.clinic_address}
                      </p>
                      <p className="text-xs sm:text-sm md:hidden">
                        Surgical Oncologist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

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
                  <div
                    className={`w-full space-y-5 p-5 max-h-[400px] overflow-y-scroll`}
                  >
                    {patientList.length > 0 &&
                      patientList.map((item, index) => (
                        <div
                          style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                          key={index}
                          className="w-full max-w-[900px] p-4 flex justify-start items-start gap-4 border-[1px] border-primary rounded-[10px]"
                        >
                          {/* ------checkout------------ */}
                          <input
                            type="radio"
                            onChange={() =>
                              setStatusData((prev) => ({
                                ...prev,
                                patientSelection: item,
                              }))
                            }
                            name="patientSelection"
                            value={item}
                            className="w-[20px] h-[20px]"
                            checked={statusData.patientSelection.id == item.id}
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
                                      {item?.first_name}&nbsp;
                                      {item?.middle_name}&nbsp;{item?.last_name}
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
                                  <p className="text-primary font-medium">
                                    Edit
                                  </p>
                                </div>

                                <p className="text-sm">{item?.age} years</p>
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
                              {item?.address}
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
                              {statusData.patientSelection?.first_name}&nbsp;
                              {statusData.patientSelection?.middle_name}&nbsp;
                              {statusData.patientSelection?.last_name}
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
                              {statusData.patientSelection?.contact}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm">
                          {statusData.patientSelection?.age} years
                        </p>
                        <p className="text-sm text-[#5A5D62] sm:hidden ">
                          {statusData.patientSelection?.contact}
                        </p>
                      </div>
                    </div>
                    <div className=" max-sm:hidden  px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
                      <img
                        src={outlineGeoLocationIcon?.src}
                        className=""
                        alt="load..."
                      />
                      {statusData.patientSelection?.address}
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
                      {moment().format("YYYY-MM-DD") ===
                      appointmentData?.equeueData?.date
                        ? "Today"
                        : moment(appointmentData?.equeueData?.date).format(
                            "DD MMM"
                          )}
                    </p>
                    <hr />
                    <div className="w-full flexCenter gap-x-5 py-4">
                      <div
                        style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                        className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
                      >
                        {appointmentData?.equeueData?.current_equeue + 1}
                      </div>
                      <div className="space-y-1">
                        <p className=" text-xs">Waiting Number</p>
                        <p className="text-[#01549A] font-semibold text-lg">
                          {moment().format("YYYY-MM-DD") ===
                          appointmentData?.equeueData?.date
                            ? moment().isBefore(
                                moment(
                                  appointmentData?.equeueData?.expected_time,
                                  "HH:mm:ss"
                                )
                              )
                              ? moment(
                                  appointmentData?.equeueData?.expected_time,
                                  "HH:mm:ss"
                                )
                                  .add(
                                    appointmentData?.equeueData?.average_time,
                                    "minutes"
                                  )
                                  .format("hh:mm A")
                              : moment()
                                  .add(
                                    appointmentData?.equeueData?.average_time,
                                    "minutes"
                                  )
                                  .format("hh:mm A")
                            : moment(
                                appointmentData?.equeueData?.expected_time,
                                "HH:mm:ss"
                              )
                                .add(
                                  appointmentData?.equeueData?.average_time,
                                  "minutes"
                                )
                                .format("hh:mm A")}
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
                                appointmentSelection: {
                                  ...item,
                                  charge:
                                    appointmentData?.doctorData[item?.key],
                                },
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
                            <p classNametext="text-sm">
                              ₹{appointmentData?.doctorData[item?.key]}
                            </p>
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
              onClick={handleBookAppointment}
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
                onClick={handleBookAppointment}
                className="my-8 px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
              >
                Book Appointment
              </button>
            )}
        </div>

        {/* -----------------appointment details-------------------- */}
        <div className="w-full flex-1  lg:w-[90%] max-lg:absolute     transition-all duration-150 ease-linear">
          {/* --------------just for development purpose to show or hide the slider one----------------  */}
          {/* <button type="button" onClick={()=>setView(!view)} className="text-white px-6 py-3 bg-primary  "  >view / hide </button> */}

          {/* --------main appointemnt part------------- */}
          <div className="w-full  hidden md:block  max-lg:mt-16  border-2 boreder-black rounded-[20px] py-4 overflow-hidden ">
            <p className="text-lg font-medium  text-center">
              Book Your Appointment{" "}
            </p>
            <hr className="my-3" />

            <div className="px-5 py-3">
              <p>Book by e-Queue</p>

              <div className="">
                <div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-[#01A400] ">
                  <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-[#01A400] font-medium ">
                    {moment().format("YYYY-MM-DD") ===
                    appointmentData?.equeueData?.date
                      ? "Today"
                      : moment(appointmentData?.equeueData?.date).format(
                          "DD MMM"
                        )}
                  </p>
                  <hr />
                  <div className="w-full flexCenter gap-x-5 py-4">
                    <div
                      style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                      className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
                    >
                      {appointmentData?.equeueData?.current_equeue + 1}
                    </div>
                    <div className="space-y-1">
                      <p className=" text-xs">Waiting Number</p>
                      <p className="text-[#01549A] font-semibold text-lg">
                        {moment().format("YYYY-MM-DD") ===
                        appointmentData?.equeueData?.date
                          ? moment().isBefore(
                              moment(
                                appointmentData?.equeueData?.expected_time,
                                "HH:mm:ss"
                              )
                            )
                            ? moment(
                                appointmentData?.equeueData?.expected_time,
                                "HH:mm:ss"
                              )
                                .add(
                                  appointmentData?.equeueData?.average_time,
                                  "minutes"
                                )
                                .format("hh:mm A")
                            : moment()
                                .add(
                                  appointmentData?.equeueData?.average_time,
                                  "minutes"
                                )
                                .format("hh:mm A")
                          : moment(
                              appointmentData?.equeueData?.expected_time,
                              "HH:mm:ss"
                            )
                              .add(
                                appointmentData?.equeueData?.average_time,
                                "minutes"
                              )
                              .format("hh:mm A")}
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">
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

      <AddPatientDrawer
        isOpen={view}
        onClose={() => {
          setView(false);
        }}
        successCallback={(item) => {
          setStatusData((prev) => ({
            ...prev,
            patientSelection: item,
          }));
          setDataVisibilityToggle((prev) => ({
            ...prev,
            patientToggle: true,
          }));
          setStatusChange({
            ...statusChange,
            paymentStatus: true,
          }),
            handleScrollToBox(1);
        }}
      />
    </AuthenticatedLayout>
  );
}
