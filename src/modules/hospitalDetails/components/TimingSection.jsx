import React from "react";
import moment from "moment"; // Import moment.js
import outlineClockIcon from "@/asset/Icons/outlineClock.svg";
import lunchBoxIcon from "@/asset/Icons/lunchBox.svg";

const TimingSection = ({ timings }) => {
  const formatTime = (time) => {
    // Convert the time to 12-hour format without seconds
    return moment(time, "HH:mm:ss").format("hh:mm A");
  };

  return (
    <div className="my-12">
      <div className="w-full p-3">
        <p className="font-medium text-lg">Timings</p>
        <div className="my-4 flex whitespace-nowrap gap-x-3 overflow-x-scroll">
          {timings.map((timing, index) => (
            <div
              key={index}
              className="border-[1px] border-[#CFCFCF] rounded-[10px] "
            >
              <p className="w-full text-sm bg-[#EFF8FF] py-1 font-medium text-center">
                {timing.day ? timing.day : "Closed"}
              </p>
              <div className="p-2 px-4 ">
                {timing.is_open ? (
                  <>
                    {/* Opening hours */}
                    {timing.start_time && timing.end_time && (
                      <div className="flex gap-x-2 text-xs whitespace-nowrap">
                        <img
                          src={outlineClockIcon.src}
                          className="w-[14px]"
                          alt="Clock Icon"
                        />
                        {`${formatTime(timing.start_time)} - ${formatTime(
                          timing.end_time
                        )}`}
                      </div>
                    )}

                    {/* Lunch break */}
                    {timing.is_lunch_break &&
                      timing.lunch_start_time &&
                      timing.lunch_end_time && (
                        <div className="flex gap-x-2 text-xs">
                          <img
                            src={lunchBoxIcon.src}
                            className="w-[12px]"
                            alt="Lunch Box Icon"
                          />
                          {`${formatTime(
                            timing.lunch_start_time
                          )} - ${formatTime(timing.lunch_end_time)}`}
                        </div>
                      )}
                  </>
                ) : (
                  <p className="text-xs text-center text-red-500">Closed</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimingSection;
