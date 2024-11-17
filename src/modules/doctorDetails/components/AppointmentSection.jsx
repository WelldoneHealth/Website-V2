"use client";
import React, { useState } from "react";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import calendarIcon from "@/asset/Icons/calendar.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

import moment from "moment";
import { getEqueue } from "../apis";
const AppointmentSection = ({ doctorSlug = "", branchSlug = "" }) => {
  const [selectedEqueue, setSelectedEqueue] = useState(null);
  const [focusableIndex, setFocusableIndex] = useState(0);

  const { data: equeueDataList, isLoading: isEqueueLoading } = useQuery({
    queryKey: ["equeDetails"],
    queryFn: () =>
      getEqueue({
        slug: doctorSlug,
        branch: branchSlug,
      }),
    enabled: true,
    staleTime: 3000,
  });

  if (isEqueueLoading) return <Loader />;

  return (
    <div
      className={`w-full flex-1 lg:w-[90%] max-lg:absolute  max-lg:bg-white   transition-all duration-150 ease-linear`}
    >
      {/* {setTimeout(() => {
        console.log("the equeye data list is",equeueDataList)
      }, 5000)} */}
      <div className="w-full max-lg:mt-16  border-2 boreder-black rounded-[20px] pt-4 pb-0 overflow-hidden ">
        <p className="text-lg font-medium  text-center">
          Book Your Appointment{" "}
        </p>
        <hr className="my-3" />

        <div className="px-2 sm:px-4 ">
          <p className="mb-2 font-medium ">Select office</p>
          <div className="w-full border-[1px] border-[#919196] rounded-xl flex ">
            <div className="flex-1 text-center space-y-1  py-2  ">
              <p className="font-medium ">Hospital Name, Branch</p>
              <p className="text-[13px]">
                Plot No, 00 Ram Nagar, Near Mahadeo Temple,satpur, Nashik-422008
              </p>
            </div>
            <div className="w-[60px] flexCenter bg-[#F5F5F5] border-l-2 border-black">
              <img
                src={sliderArrowIcon?.src}
                className="rotate-90 h-4 "
                alt="load..."
              />
            </div>
          </div>

          <div className="w-full flex items-center gap-x-4 bg-[#F0F0F0] my-7 px-3 rounded-[10px] p-1">
            <button
              type="button"
              className="bg-white p-1  cursor-pointer flex items-center rounded-md text-[#01549A]  text-sm font-medium"
            >
              Book by e-Queue{" "}
              <img
                src={rotatingArrowIcon?.src}
                className="ml-2"
                alt="load..."
              />
            </button>
            <button
              type="button"
              className="bg-[#F0F0F0] p-1 flex items-center rounded-md text-[#919196] text-sm  font-medium"
            >
              Book by slot{" "}
              <img
                src={rotatingArrowIcon?.src}
                className="hidden ml-2"
                alt="load..."
              />
            </button>
          </div>

          <div className="w-full h-[500px] overflow-y-scroll flex flex-col items-center gap-y-5 ">
            {/* --------calendar cards------- */}
            {/* <div className="w-[95%]  rounded-[10px] border-[1px] border-l-[5px]  ">
              <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-[#01A400] font-medium ">
              hello
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
            </div> */}

            {isEqueueLoading ? (
              <Loader />
            ) : (
              equeueDataList?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setFocusableIndex(index);
                    console.log("the item is", item);
                  }}
                  className={` w-[95%]  cursor-pointer  rounded-[10px] border-[1px] border-l-[5px]  ${
                    focusableIndex !== index
                      ? " bg-[#F7FFF6] border-[#919196]"
                      : "bg-[#F7FFF6] border-[#01A400]  "
                  } `}
                >
                  <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-[#919196] font-medium ">
                    {moment().format("YYYY-MM-DD") === item?.date
                      ? "Today"
                      : moment(item?.date).format("DD MMM")}
                  </p>
                  <hr />
                  <div className="w-full flexCenter gap-x-5 py-4">
                    <div
                      style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                      className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
                    >
                      {item?.current_equeue + 1}
                    </div>
                    <div className="space-y-1">
                      <p className=" text-xs text-[#5A5D62]">Waiting Number</p>
                      <p className="text-[#01549A] font-semibold text-lg">
                        {moment().format("YYYY-MM-DD") === item?.date
                          ? moment().isBefore(
                              moment(item?.expected_time, "HH:mm:ss")
                            )
                            ? moment(item?.expected_time, "HH:mm:ss")
                                .add(item?.average_time, "minutes")
                                .format("hh:mm A")
                            : moment()
                                .add(item?.average_time, "minutes")
                                .format("hh:mm A")
                          : moment(item?.expected_time, "HH:mm:ss")
                              .add(item?.average_time, "minutes")
                              .format("hh:mm A")}
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">
                    Given Time is approximate can vary by +/-60 Min
                  </p>
                </div>
              ))
            )}

            <div className=" w-[95%] flex justify-between items-center py-1 px-3  rounded-[10px] border-[1px] border-l-[5px] border-[#919196]">
              <p className=" font-medium text-lg text-[#5A5D62] ">Future</p>
              <img src={calendarIcon?.src} className="w-[22px]" alt="load..." />
            </div>
          </div>

          <div className="mt-5 py-3 flex flex-col items-center  w-full border-t-[1px] border-[#919196] space-y-2">
            <button
              type="button"
              className="w-[95%] border-[1px] border-[#01549A] py-2 text-center text-[#01549A] rounded-[10px] font-medium"
            >
              Add to family doctor
            </button>
            <button
              type="button"
              className="w-[95%] max-lg:hidden py-3 text-center bg-[#01549A] text-white font-semibold rounded-[10px]"
            >
              Appointment Booking
            </button>
            <button
              type="button"
              className="w-[95%] lg:hidden py-3 text-center bg-[#01549A] text-white font-semibold rounded-[10px]"
            >
              Checkout
            </button>
            <p className="text-xs text-center font-normal">
              No charges for appointment booking.
            </p>
          </div>
        </div>

        {/* <div className="my-5 space-y-6 w-full">
              <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
                <img src={clockIcon?.src} className="w-4" />
                <input
                  type="date"
                  className="text-[#B6B6B6] outline-none"
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
                <img src={clockIcon?.src} className="w-4" />
                <input
                  type="text"
                  className="text-[#B6B6B6] outline-none"
                  placeholder="08:00 AM"
                />
              </div>
              <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
                <img src={clockIcon?.src} className="w-4" />
                <input
                  type="text"
                  className="text-[#B6B6B6] outline-none"
                  placeholder="Patient Name"
                />
              </div>
              <button
                type="button"
                className="w-full flexCenter  rounded-md bg-[#01549A] font-normal hover:bg-opacity-90 text-white px-7 py-5 cursor-pointer"
              >
                Book Appointement
              </button>
            </div>
            <div className="">
              <h6 className="text-[#023C77] font-medium">Select Service</h6>
              <div className="flex my-3 gap-x-5 ">
                {[1, 2, 3].map((item, index) => (
                  <span
                    key={index}
                    className="  px-2 py-1 rounded-md  hover:bg-[#01549A] hover:text-white cursor-pointer transitiona-all linear duration-300   text-[13px]   border-[1px] hover:border-transparent border-[#898989]"
                  >
                    Consult
                  </span>
                ))}
              </div>
            </div> */}
      </div>

      {/* -----------------social icons-------- */}
      {/* <div className="my-5 w-full  border-[1px] border-[#A7A7A7] rounded-md px-4 sm:px-7 py-5 ">
            <p className="text-[26px]  font-medium text-[#023C77]">
              Social Icon
            </p>
            <div className="my-2 flex flex-wrap gap-x-4 gap-y-2 ">
              <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
            </div>
          </div> */}
    </div>
  );
};

export default AppointmentSection;
