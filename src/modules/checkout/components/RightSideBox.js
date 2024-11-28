import React from 'react'
import moment from 'moment'

export default function RightSideBox({appointmentInfo}) {
  return (
    <div className="w-full max-lg:hidden flex-1  lg:w-[90%] max-lg:absolute     transition-all duration-150 ease-linear">
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
            appointmentInfo?.date
              ? "Today"
              : moment(appointmentInfo?.date).format(
                  "DD MMM"
                )}
          </p>
          <hr />
          <div className="w-full flexCenter gap-x-5 py-4">
            <div
              style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
              className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
            >
              {appointmentInfo?.current_equeue + 1}
            </div>
            <div className="space-y-1">
              <p className=" text-xs">Waiting Number</p>
              <p className="text-[#01549A] font-semibold text-lg">
                {moment().format("YYYY-MM-DD") ===
                appointmentInfo?.date
                  ? moment().isBefore(
                      moment(
                        appointmentInfo?.expected_time,
                        "HH:mm:ss"
                      )
                    )
                    ? moment(
                        appointmentInfo?.expected_time,
                        "HH:mm:ss"
                      )
                        .add(
                          appointmentInfo?.average_time,
                          "minutes"
                        )
                        .format("hh:mm A")
                    : moment()
                        .add(
                          appointmentInfo?.average_time,
                          "minutes"
                        )
                        .format("hh:mm A")
                  : moment(
                      appointmentInfo?.expected_time,
                      "HH:mm:ss"
                    )
                      .add(
                        appointmentInfo?.average_time,
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
  )
}
