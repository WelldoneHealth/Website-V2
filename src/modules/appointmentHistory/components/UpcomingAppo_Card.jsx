import React, { useState } from "react";
import doctorAppointmentImage from "@/asset/Images/doctorAppointmentImage.png";
import moment from "moment/moment";
import { Dot } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelAppointment } from "../apis";
import { toast } from "sonner";
import { PopConfirm } from "@/shared/components/Popconfirm";

export default function UpcomingAppo_Card({ appointmentData, currentPage }) {
  const queryClient = useQueryClient();

  const [popconfirm, setPopconfirm] = useState(false);

  const handleClosePopconfirm = () => {
    setPopconfirm(false);
  };

  const cancelAppointmentMutation = useMutation({
    mutationFn: cancelAppointment,
    onSuccess: () => {
      toast("Appointment successfully canceled");
      queryClient.invalidateQueries(["appointmentHistoryList", currentPage]);
    },
    onError: () => {
      toast("Something went wrong while canceling the appointment.");
    },
  });

  const handleCancelAppointment = () => {
    const formValues = {
      no_payment: true,
      amount: 0,
      appointment: appointmentData?.id,
      is_appointment_cancelled: true,
      cancellation_reason: "by_patient",
    };
    cancelAppointmentMutation.mutate(formValues);
  };

  const appo_data1 = [
    {
      boldText: "Patient-",
      text: `${appointmentData?.patient_first_name ?? ""} ${
        appointmentData?.patient_middle_name ?? ""
      } ${appointmentData?.patient_last_name ?? ""}`,
    },
    {
      boldText: "Appointment id-",
      text: appointmentData?.id ?? "N/A",
    },
    {
      boldText: "Booking Date-",
      text: appointmentData?.booked_on ?? "N/A",
    },
  ];

  const appo_data2 = [
    {
      boldText: "Reason-",
      text: appointmentData?.reason ?? "N/A",
    },
    {
      boldText: "Payment Method-",
      text: "Pay on Counter",
    },
    {
      boldText: "Total-",
      text: `₹  ${Number(appointmentData?.amount) ?? "N/A"} `,
    },
  ];

  // Left Card Section
  const LeftCard = () => (
    <div className="px-3 w-full md:w-1/2 flexCenter flex-1">
      <div className="space-y-3 md:space-y-7 w-full max-w-[400px]">
        <div className="w-full py-[6px] border-b-[1px] border-[#DADADA] text-center space-y-[6px] md:space-y-[2px]">
          <p className="font-medium text-xl md:text-lg ">
            {moment(appointmentData?.appointment_date).isSame(moment(), "day")
              ? "Today"
              : appointmentData?.appointment_date}
          </p>
          <p className="text-sm md:text-xs">Last updated: 2 Minutes ago</p>
        </div>
        <div className="flex justify-center gap-x-5">
          <div
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="size-[60px] msm:size-[70px] md:px-5 rounded-[10px] flexCenter text-[32px] msm:text-[40px] lg:text-xl esm:text-[26px] font-bold text-[#FF0000]"
          >
            {" "}
            2{" "}
          </div>
          <div className="space-y-1 msm:space-y-2">
            <p className="font-medium text-base md:text-sm lg:text-xs esm:text-sm">
              Waiting Number
            </p>
            <p className="text-[25px] msm:text-3xl md:text-[22px] esm:text-2xl font-medium text-[#4472C4] tracking-wide">
              {moment(
                appointmentData?.doctor_expected_visiting_time,
                "HH:mm:ss"
              ).format("hh:mm A")}
            </p>
          </div>
        </div>
        <p className="text-[#5A5D62] text-xs asm:text-[13px] md:text-xs text-center">
          Given Time is approximate can vary by +/-60 Min
        </p>
      </div>
    </div>
  );

  // Right Card Section
  const RightCard = () => (
    <div
      style={{ boxShadow: " 0px 0px 4px 0px #01549A40" }}
      className="w-full md:w-1/2 flex-1 max-md:mx-auto p-4 msm:p-5 rounded-[20px] space-y-3 msm:space-y-4"
    >
      <div className="w-full flex items-center gap-x-3">
        <div className="size-10 flexCenter text-lg rounded-full text-white font-medium bg-[#01A400]">
          {appointmentData?.equeue_no ?? ""}
        </div>
        <p className="text-base font-medium">
          {appointmentData?.patient_first_name ?? ""}{" "}
          {appointmentData?.patient_middle_name ?? ""}{" "}
          {appointmentData?.patient_last_name ?? ""}, (
          {appointmentData?.patient_relation ?? ""})
        </p>
      </div>
      <div
        style={{ boxShadow: "0px 0px 4px 0px #01549A40" }}
        className="rounded-[20px] w-full p-3 flex items-center gap-x-3 msm:gap-x-4 "
      >
        <div className=" max-md:size-[120px] max-md:rounded-full max-md:flex items-center p-1 md:w-auto">
          <img
            src={appointmentData?.doctor_image ?? doctorAppointmentImage?.src}
            className="size-20 object-cover rounded-full"
            alt="load..."
          />
        </div>
        <div className="space-y-1">
          <p className="text-base msm:text-xl md:text-base xl:text-[17px] font-medium">
            {" "}
            {appointmentData?.doctor_suffix ?? ""}{" "}
            {appointmentData?.doctor_name ?? ""}{" "}
            {appointmentData?.doctor_middle_name ?? ""}{" "}
            {appointmentData?.doctor_last_name ?? ""}{" "}
          </p>
          <p className="text-sm msm:text-base md:text-sm">
            {appointmentData?.clinic_name ?? ""}{" "}
          </p>
          {!appointmentData?.is_cancelled && (
            <div className="tet-sm text-[#01A400] flex items-center">
              <Dot size={40} />
              Open
            </div>
          )}
        </div>
      </div>
      {!appointmentData?.is_cancelled && (
        <button
          type="button"
          className="w-[105px] mx-auto text-[#01549A] py-1 flexCenter border-[1px] border-[#01549A] rounded-[5px]"
          onClick={() => {
            setPopconfirm(true);
          }}
        >
          Cancel
        </button>
      )}
      {appointmentData?.is_cancelled && (
        <p className="text-red-500 font-semibold">
          Cancelled by{" "}
          {appointmentData?.cancellation_reason === "by_patient"
            ? "You"
            : "Doctor"}
        </p>
      )}
    </div>
  );

  return (
    <div
      style={{ boxShadow: " 1px 1px 4px 2px #8383834D" }}
      className="w-full md:space-y-4 px-3 ssm:px-2 asm:px-4 py-2 max-asm:pb-3 asm:py-4 rounded-[15px] border-[2px] md:border-[0.5px] border-[#01A400] md:border-[#DADADA] "
    >
      <div className="hidden md:flex">
        <div className="div md:w-1/2  w-full">
          {appo_data1.map((item, index) => (
            <p key={index} className="text-sm">
              <span className="font-semibold">{item.boldText}</span> {item.text}
            </p>
          ))}
        </div>
        <div className="div md:w-1/2  w-full">
          {appo_data2.map((item, index) => (
            <p key={index} className="text-sm">
              <span className="font-semibold">{item.boldText}</span> {item.text}
            </p>
          ))}
        </div>
      </div>
      <div className=" text-nowrap space-y-1 border-b-2"></div>
      <div className="w-full flex flex-wrap gap-4">
        {/* Left card section */}
        <LeftCard />
        {/* Right card section */}
        <RightCard />
      </div>
      <PopConfirm
        title="Are you absolutely sure?"
        description={
          <div>
            This action cannot be undone. This will cancel your appointment.
          </div>
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleCancelAppointment}
        onCancel={handleClosePopconfirm}
        variant="destructive"
        visible={popconfirm}
        loading={cancelAppointmentMutation.isPending}
      />
    </div>
  );
}
