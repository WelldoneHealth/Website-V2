import moment from "moment";
import React from "react";

export default function CheckoutEqueueCard({ equeueInfo }) {
  return (
    <div className="space-y-3  p-5 border-b-[1px] border-[#DADADA]">
      <p>Book by e-Queue</p>
      <div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-primary ">
        <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-primary font-medium ">
          {moment().format("YYYY-MM-DD") === equeueInfo?.date
            ? "Today"
            : moment(equeueInfo?.date).format("DD MMM")}
        </p>
        <hr />
        <div className="w-full flexCenter gap-x-5 py-4">
          <div
            style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
            className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
          >
            {equeueInfo?.waiting_no}
          </div>
          <div className="space-y-1">
            <p className=" text-xs">Waiting Number</p>
            <p className="text-[#01549A] font-semibold text-lg">
              {moment().format("YYYY-MM-DD") === equeueInfo?.date
                ? moment().isBefore(
                    moment(equeueInfo?.expected_time, "HH:mm:ss")
                  )
                  ? moment(equeueInfo?.expected_time, "HH:mm:ss")
                      .add(equeueInfo?.average_time, "minutes")
                      .format("hh:mm A")
                  : moment()
                      .add(equeueInfo?.average_time, "minutes")
                      .format("hh:mm A")
                : moment(equeueInfo?.expected_time, "HH:mm:ss")
                    .add(equeueInfo?.average_time, "minutes")
                    .format("hh:mm A")}
            </p>
          </div>
        </div>
        <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">
          Given Time is approximate can vary by +/-60 Min
        </p>
      </div>
    </div>
  );
}
