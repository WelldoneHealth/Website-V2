import useAppointmentInvoice from "@/hooks/useAppointmentInvoice";
import Link from "next/link";
import React from "react";

export default function PaymentBoxDetails({ appointmentData }) {
  const { downloadInvoice, isLoading, error } = useAppointmentInvoice(
    appointmentData?.id,
    appointmentData
  );
  return (
    <>
      {/* ----------payment information ------- after 756px-------------- */}
      <div className="w-full   py-6  rounded-[15px] hidden  md:flex flex-col sm:flex-row gap-y-6 border-[1px]    border-[#DADADA] ">
        <div className="w-full sm:w-1/2 px-11   ">
          <p className="text-lg sm:text-base  mb-3 font-medium ">
            Payment information
          </p>
          <div className="w-full sm:w-[90%] text-base sm:text-sm font-normal space-y-2">
            {appointmentData?.services_opted &&
              JSON.parse(appointmentData?.services_opted).map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start capitalize"
                >
                  {" "}
                  <p className="">{item?.service} :</p> <p>₹ {item?.charge}</p>{" "}
                </div>
              ))}
            <div className="flex justify-between items-start capitalize font-medium">
              {" "}
              <p className="">Total :</p>{" "}
              <p className="text-red-800">
                ₹{" "}
                {appointmentData?.services_opted
                  ? Number(
                      JSON.parse(appointmentData?.services_opted)?.reduce(
                        (sum, item) => sum + (item?.charge || 0),
                        0
                      ) || 0
                    )
                  : 0}
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2  px-11 sm:border-l-[1px]    border-[#DADADA]">
          <p className="text-lg sm:text-base mb-3 font-medium">More actions</p>
          <div className="w-full flex flex-col gap-3">
            {appointmentData?.prescription_link && (
              <div className="flex justify-between items-center">
                {" "}
                <p className="max-md:hidden tex-base"> Prescription :</p>{" "}
                <Link
                  href={appointmentData?.prescription_link ?? "/"}
                  passHref
                  target="_blank"
                  className="w-[105px]"
                >
                  {" "}
                  <button
                    type="button"
                    className="w-full py-1 flexCenter text-[#01549A] text-sm border-[1px] border-[#01549A] rounded-[5px]"
                  >
                    {" "}
                    {appointmentData?.prescription_link ? "View" : ""}{" "}
                  </button>{" "}
                </Link>
              </div>
            )}
            {/* {appointmentData?.payment_history?.length > 0 && (
              <div className="flex justify-between items-center">
                {" "}
                <p className="max-md:hidden tex-base"> Invoice :</p>{" "}
                <button
                  type="button"
                  className="w-[105px] py-1 flexCenter text-[#01549A] text-sm border-[1px] border-[#01549A] rounded-[5px]"
                  onClick={downloadInvoice}
                >
                  View
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* ---------------payment info below 756px--------------- */}
      <div className="w-full px-2 sm:px-5  md:hidden space-y-3">
        <p className="text-sm ssm:text-base msm:text-lg ">
          Payment information
        </p>
        <div className="w-full mx-auto max-w-[550px] border-[1px] border-[#DADADA] rounded-[10px]">
          <div className="w-full px-3 asm:px-6 py-3 border-b-[1px] border-[#DADADA] flex justify-start gap-x-2">
            <p className="font-medium text-sm asm:text-base">Payment methods</p>
            {/* <div className="text-sm asm:text-base">
              <p>Pay on Counter</p>
              <p>{moment(appointmentData?.payment_history[0]?.created_at).format("DD/MM/YYYY, h:mm A")}</p>
            </div> */}
          </div>
          <div className="px-4 asm:px-6 py-3 flex flex-col gap-y-2 text-sm ssm:text-base">
            {appointmentData?.services_opted &&
              JSON.parse(appointmentData?.services_opted).map((item, index) => (
                <div key={index} className=" w-full flex justify-between">
                  <p>{item?.service} :</p>
                  <p>₹ {item?.charge} </p>
                </div>
              ))}
            <div className=" w-full flex justify-between font-medium">
              <p className="">Total :</p>
              <p className="text-red-800">
                ₹{" "}
                {appointmentData?.services_opted
                  ? Number(
                      JSON.parse(appointmentData?.services_opted)?.reduce(
                        (sum, item) => sum + (item?.charge || 0),
                        0
                      ) || 0
                    )
                  : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
