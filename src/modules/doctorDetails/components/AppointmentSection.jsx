"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

import moment from "moment";
import { getEqueue } from "../apis";
import { useRouter } from "next/navigation";
import { useAppointmentStore } from "../data/appointmentStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const AppointmentSection = ({
  doctorSlug = "",
  branchSlug = "",
  doctorInfo = null,
}) => {
  const router = useRouter();
  const setAppointmentData = useAppointmentStore(
    (state) => state.setAppointmentData
  );
  const [selectedEqueue, setSelectedEqueue] = useState(null);
  const [focusableIndex, setFocusableIndex] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState(
    doctorInfo?.establishment[0]?.branch_slug ?? null
  );
  const [showAll, setShowAll] = useState(false); // State to track expand/collapse
  const maxVisibleCards = 2; // Number of cards to show initially

  const { data: equeueDataList, isLoading: isEqueueLoading } = useQuery({
    queryKey: ["equeDetails", selectedBranch],
    queryFn: () =>
      getEqueue({
        slug: doctorSlug,
        branch: selectedBranch,
      }),
    enabled: true,
    staleTime: 3000,
  });

  useEffect(() => {
    if (equeueDataList?.length > 0) {
      setSelectedEqueue(equeueDataList[0]);
    }
  }, [equeueDataList]);

  if (isEqueueLoading) return <Loader />;

  return (
    <div
      className={`w-full   flex-1 lg:w-full   bg-white   transition-all duration-150 ease-linear`}
    >
      <div className="w-full bg-white    lg:border-2 border-black rounded-[20px] lg:pt-4 pb-0 lg:overflow-hidden ">
        <p className=" text-lg font-medium  text-center hidden lg:block">
          Book Your Appointment{" "}
        </p>

        <hr className="my-3 hidden lg:block" />

        <div className="px-2 sm:px-4 w-full">
          <p className="mb-2 font-medium ">Select office</p>
          <Select
            className="w-full max-w-[100%]"
            onValueChange={setSelectedBranch}
            value={selectedBranch}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Branches</SelectLabel>
                {doctorInfo?.establishment?.map((branch) => (
                  <SelectItem
                    key={branch?.id}
                    value={branch?.branch_slug}
                    //  className="[&[aria-selected=true]]:text-green-600 [&[aria-selected=true] svg]:text-green-600"
                    //  className="[&[aria-selected=true] svg]:text-red-900"
                  >
                    {branch?.clinic_name} <br />
                    {branch?.clinic_name && (
                      <p className="mt-1 text-[11px] w-full text-wrap">
                        {branch?.clinic_address}
                      </p>
                    )}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div
            className={` mt-5 w-full ${
              equeueDataList.length > 0
                ? "h-[calc(100vh-290px)] lg:h-[500px]"
                : "h-auto"
            } overflow-y-scroll flex flex-col items-center gap-y-5  `}
          >
            {isEqueueLoading ? (
              <Loader />
            ) : equeueDataList?.length > 0 ? (
              <>
                {equeueDataList
                  ?.slice(0, showAll ? equeueDataList.length : maxVisibleCards) // Show limited or all cards
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setFocusableIndex(index);
                        setSelectedEqueue(item);
                        console.log("the item is", item);
                      }}
                      className={` w-[95%]  rounded-[10px] border-[1px] border-l-[5px]  ${
                        item?.is_active
                          ? focusableIndex !== index
                            ? "bg-[#F7FFF6] border-[#919196] cursor-pointer"
                            : "bg-[#F7FFF6] border-[#01A400] cursor-pointer"
                          : "  pointer-events-none border-red-700 "
                      } `}
                    >
                      <p
                        className={`py-1 px-3 text-sm font-normal border-b-[1px] ${
                          item?.is_active
                            ? "border-[#919196] "
                            : "border-red-700"
                        }  font-medium`}
                      >
                        {moment().format("YYYY-MM-DD") === item?.date
                          ? "Today"
                          : moment(item?.date).format("DD MMM")}
                      </p>
                      <hr />
                      <div className="w-full flexCenter gap-x-5 py-4">
                        <div
                          style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                          className="text-red-700 rounded-[10px] px-4 py-[6px] text-[22px] font-bold"
                        >
                          {item?.waiting_no}
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-[#5A5D62]">
                            Waiting Number
                          </p>
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
                      {item?.is_active && (
                        <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">
                          Given Time is approximate can vary by +/-60 Min
                        </p>
                      )}

                      {!item?.is_active && (
                        <div className="w-full py-2 px-3  text-sm border-t-[2px] border-red-700 text-red-700 font-medium flex justify-center items-center gap-x-2">
                          {" "}
                          <p className="pulse-ball size-[5px]  bg-red-700 rounded-full"></p>
                          {item?.reason || "Out for Lunch"}
                        </div>
                      )}
                    </div>
                  ))}

                {/* Expand/Collapse Button */}
                {equeueDataList.length > maxVisibleCards && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-1 px-4 underline mb-10"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                )}
              </>
            ) : (
              <div>No Equeues</div>
            )}
          </div>

          <div className="mt-5 max-lg:fixed max-lg:left-1/2 transform max-lg:-translate-x-1/2 max-lg:bottom-0 py-3 flex max-lg:bg-gray-300 flex-col items-center  w-full border-t-[1px] lg:border-[#919196] space-y-2">
            <button
              type="button"
              disabled={!selectedBranch || equeueDataList?.length < 1}
              className={`w-[95%] max-lg:hidden py-3 text-center text-white ${
                equeueDataList?.length < 1
                  ? " bg-[#A8A8A8] "
                  : " bg-[#01549A]  "
              }  font-semibold rounded-[10px]`}
              onClick={() => {
                router.push(`/checkout`);
                setAppointmentData({
                  equeueData: selectedEqueue,
                  doctorData: doctorInfo,
                  branchData:
                    doctorInfo?.establishment?.filter(
                      (e) => e?.branch_slug === selectedBranch
                    )[0] ?? null,
                });
              }}
            >
              Appointment Booking
            </button>
            <button
              type="button"
              onClick={() => {
                router.push(`/checkout`);
                setAppointmentData({
                  equeueData: selectedEqueue,
                  doctorData: doctorInfo,
                  branchData:
                    doctorInfo?.establishment?.filter(
                      (e) => e?.branch_slug === selectedBranch
                    )[0] ?? null,
                });
              }}
              className={`w-[95%]  lg:hidden py-3 text-center  text-white ${
                equeueDataList?.length < 1 ? " bg-[#A8A8A8] " : " bg-[#01549A] "
              }  font-semibold rounded-[10px]`}
              disabled={equeueDataList?.length < 1}
            >
              Checkout
            </button>
            <p className="text-xs text-center font-normal">
              No charges for appointment booking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
