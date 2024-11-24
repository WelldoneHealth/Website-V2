import React from "react";
import patientDefault from "@/asset/Icons/patientDefault.svg";
import hospital0 from "@/asset/Images/hospital0.png";
import smallDoc2 from "@/asset/Images/smallDoc2.png";
import Msg from "./Msg";
import FollowUpDateComp from "./FollowUpDateComp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAppointmentInvoice from "@/hooks/useAppointmentInvoice";

export default function SpecificAppointmentMobileView({ appointmentData }) {
  const router = useRouter();
  const { downloadInvoice, isLoading, error } = useAppointmentInvoice(
    appointmentData?.id,
    appointmentData
  );
  const appo_data1 = [
    {
      boldText: "Appointment id-",
      text: appointmentData?.id ?? "N/A",
    },
    {
      boldText: "Type -",
      text: "eQueue",
    },
  ];

  return (
    <div className=" w-full px-2   msm:px-3 sm:px-6  pt-1 py-3  rounded-[15px] flex md:hidden  flex-col border-[1px]    border-[#DADADA]">
      <div className=" w-full border-b-[1px] border-[#DADADA] pt-2 pb-4 px-1  asm:px-3  msm:px-6 flex max-ssm:flex-col  gap-y-2 max-asm:justify-between asm:gap-x-16 text-nowrap text-sm asm:text-base ">
        {appo_data1.map((item, index) => (
          <p key={index}>
            <span className="font-semibold">{item.boldText}</span> {item.text}
          </p>
        ))}
      </div>

      <div className="w-full msm:px-2 flex flex-col gap-y-2  ">
        {/* ---------patient---------------- */}
        {/* <div className="w-full px-3 sm:px-6 py-4 flex  gap-x-2 ssm:gap-x-4  mams:gap-x-6 ">
  <div className="flex items-center justify-center w-[40px] ssm:size-[50px] asm:size-[70px] msm:size-[85px]  bg-red-900 rounded-full overflow-hidden">
    <img src={patientDefault?.src} className='w-full' alt="load..."  />
  </div>
  <div className="space-y-1 flex flex-col justify-center">
    <p className='text-sm asm:text-lg msm:text-xl capitalize'>{appointmentData?.patient_first_name ?? ''} {appointmentData?.patient_middle_name ?? ''} {appointmentData?.patient_last_name ?? '' }</p>
    <p className='text-xs asm:text-sm msm:text-base capitalize'>{appointmentData?.reason?.split('_').join(' ') ?? 'N/A'}</p>
  </div>
  </div> */}
        <DataCard
          image={patientDefault}
          mainText={`${appointmentData?.patient_first_name ?? ""} ${
            appointmentData?.patient_middle_name ?? ""
          } ${appointmentData?.patient_last_name ?? ""}`}
          subText={appointmentData?.reason?.split("_").join(" ") ?? "N/A"}
          textSize="text-sm asm:text-lg msm:text-xl capitalize"
        />

        <div className="w-full flex flex-col  border-[1px] border-[#DADADA] rounded-[15px] ">
          {/* -----------doctor------------- */}
          {/* <div className="w-full px-3 sm:px-6 py-4 flex gap-x-2 ssm:gap-x-4  mams:gap-x-6 border-b-[1px] border-[#DADADA]">
  <div className="flex items-center justify-center w-[40px] ssm:size-[50px] asm:size-[70px] msm:size-[85px]  bg-red-900 rounded-full overflow-hidden">
    <img src={smallDoc2?.src} className='w-full' alt="load..."  />
  </div>
  <div className="space-y-1 flex flex-col justify-center ">
    <p className='text-sm asm:text-lg msm:text-xl'> {`${appointmentData?.doctor_suffix ?? ''} ${appointmentData?.doctor_name ?? ''} ${appointmentData?.doctor_middle_name ?? ''} ${appointmentData?.doctor_last_name ?? ''}`}</p>
    <p className='text-xs asm:text-sm msm:text-base'> {appointmentData?.doctor_specialty ?? 'N/A'}</p>
  </div>
  </div> */}
          <DataCard
            image={smallDoc2}
            mainText={`${appointmentData?.doctor_suffix ?? ""} ${
              appointmentData?.doctor_name ?? ""
            } ${appointmentData?.doctor_middle_name ?? ""} ${
              appointmentData?.doctor_last_name ?? ""
            }`}
            subText={appointmentData?.doctor_specialty ?? "N/A"}
            textSize="text-sm asm:text-lg msm:text-xl"
          />

          {/* ---------hospital----------- */}
          {/* <div className="w-full px-3 sm:px-6 py-4 flex  gap-x-2 ssm:gap-x-4  mams:gap-x-6  ">
  <div className=" flex items-center justify-center w-[40px]  ssm:size-[50px] asm:size-[70px] msm:size-[85px]  bg-red-900 rounded-full overflow-hidden">
    <img src={hospital0?.src} className='w-full' alt="load..."  />
  </div>
 
  <div className="space-y-1 flex flex-col justify-center ">
    <p className='text-sm asm:text-base msm:text-lg leading-tight '>{appointmentData?.clinic_name?.split('-')[0] ?? 'N/A'} </p>
    <p className='text-xs asm:text-sm msm:text-base leading-tight '>{appointmentData?.clinic_name?.split('-')[1] ?? 'N/A'}</p>
  </div>
  </div> */}

          <DataCard
            image={hospital0}
            mainText={appointmentData?.clinic_name?.split("-")[0] ?? "N/A"}
            subText={appointmentData?.clinic_name?.split("-")[1] ?? "N/A"}
            textSize="text-sm asm:text-base msm:text-lg leading-tight"
          />
        </div>

        <div className="mt-6 mb-2  w-full flex flex-col msm:flex-row justify-center items-center gap-x-5 gap-y-3 md:hidden text-center text-sm asm:text-base ">
          <Link
            href={appointmentData?.prescription_link ?? "/"}
            passHref
            target="_blank"
            className="block w-[95%]  msm:w-[200px] "
          >
            <button
              type="button"
              className="w-full px-5 py-2 border-[1px] border-primary rounded-[5px]"
            >
              <p className="text-primary font-medium  ">
                Prescription {!appointmentData?.prescription_link && "-N/A"}
              </p>
            </button>{" "}
          </Link>
          <button
            type="button"
            className=" px-5 py-2 border-[1px] border-primary rounded-[5px] block w-[95%]  msm:w-[200px]"
            onClick={downloadInvoice}
          >
            <p className="text-primary font-medium  ">Invoice</p>
          </button>{" "}
          <button
            onClick={() =>
              router.push(
                `/doctor-details/${appointmentData?.doctor_slug}/${appointmentData?.branch_slug}`
              )
            }
            type="button"
            className="w-[95%]  msm:w-[200px] px-5 py-2 border-[1px] border-primary rounded-[5px]"
          >
            <p className="text-primary font-medium">Book Follow-Up</p>
          </button>
        </div>

        <div className="w-full my-2 p-2 asm:p-3 space-y-3 border-[1px] border-[#DADADA] rounded-[15px]">
          {/* --------------------------follow up dates---------------------- */}
          <FollowUpDateComp followUpDate={appointmentData?.followup_date} />
          {appointmentData?.is_clinic_booking && (
            <div className="w-full max-lsm:hidden">
              {" "}
              <Msg />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const DataCard = ({ image, mainText, subText, textSize }) => (
  <div className="w-full px-3 sm:px-6 py-4 flex  gap-x-2 ssm:gap-x-4  mams:gap-x-6 border-b-[1px] ">
    <div className=" flex items-center justify-center w-[40px]  ssm:size-[50px] asm:size-[70px] msm:size-[85px]  bg-red-900 rounded-full overflow-hidden">
      <img src={image?.src} className="w-full" alt="load..." />
    </div>

    <div className="space-y-1 flex flex-col justify-center ">
      <p className={` ${textSize} `}>{mainText} </p>
      <p className="text-xs asm:text-sm msm:text-base leading-tight capitalize ">
        {subText}
      </p>
    </div>
  </div>
);
