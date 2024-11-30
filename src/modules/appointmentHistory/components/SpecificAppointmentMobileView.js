import React from "react";
import defaultPatient from "@/asset/Images/defaultPatient.png";
import defaultDoctor from "@/asset/Images/defaultDoctor.png";
import defaultClinic from "@/asset/Images/defaultClinic.png";
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
      text: appointmentData?.id ?? "",
    },
    {
      boldText: "Type -",
      text: "eQueue",
    },
  ];


// -------------------the data card component--------------------
  const DataCard = ({ image, mainText, subText, textSize,linkTo }) => (
    <div  onClick={()=>router.push(linkTo)} className="w-full cursor-pointer px-3 sm:px-6 py-4 flex  gap-x-2 ssm:gap-x-4  mams:gap-x-6 border-b-[1px] ">
      <div className=" flex items-center justify-center w-[40px]  ssm:size-[50px] asm:size-[70px] msm:size-[85px] aspect-[1/1] bg-[#EFF8FF]   rounded-full overflow-hidden">
        <img src={image} className="w-full  h-full object-cover object-center " alt="load..." />
      </div>
  
      <div className="space-y-1 flex flex-col justify-center ">
        <p className={` ${textSize} `}>{mainText} </p>
        <p className="text-xs asm:text-sm msm:text-base leading-tight capitalize ">
          {subText}
        </p>
      </div>
    </div>
  );



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
       
  {/* ----------------------painet card-------------------- */}
        <DataCard
          image={defaultPatient?.src}
          mainText={`${appointmentData?.patient_first_name ?? ""} ${
            appointmentData?.patient_middle_name ?? ""
          } ${appointmentData?.patient_last_name ?? ""}`}
          subText={appointmentData?.reason?.split("_").join(" ") ?? ""}
          textSize="text-sm asm:text-lg msm:text-xl capitalize"
        />

        <div className="w-full flex flex-col  border-[1px] border-[#DADADA] rounded-[15px] ">
         {/* -------------------------doctor card--------- */}
          <DataCard
            image={appointmentData?.doctor_image  ??  defaultDoctor?.src}
            mainText={`${appointmentData?.doctor_suffix ?? ""} ${
              appointmentData?.doctor_name ?? ""
            } ${appointmentData?.doctor_middle_name ?? ""} ${
              appointmentData?.doctor_last_name ?? ""
            }`}
            subText={appointmentData?.doctor_specialty ?? ""}
            textSize="text-sm asm:text-lg msm:text-xl"
            linkTo={`/doctor-details/${appointmentData?.doctor_slug}/${appointmentData?.branch_slug}`}

          />

        
{/* -----------------------cliic card--------------------- */}
          <DataCard
            image={defaultClinic?.src}
            mainText={appointmentData?.clinic_name?.split("-")[0] ?? ""}
            subText={appointmentData?.clinic_name?.split("-")[1] ?? ""}
            textSize="text-sm asm:text-base msm:text-lg leading-tight"
            linkTo={`/hospital-details/${appointmentData?.branch_slug}`}
          />
        </div>

        <div className="mt-6 mb-2  w-full flex flex-col msm:flex-row justify-center items-center gap-x-5 gap-y-3 md:hidden text-center text-sm sm:text-base ">
         { appointmentData?.prescription_link  && <Link
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
            </button>
          </Link> }
          <button
            type="button"
            className=" px-5 py-2 border-[1px] border-primary rounded-[5px] block w-[95%]  msm:w-[200px]"
            onClick={downloadInvoice}
          >
            <p className="text-primary font-medium  ">Invoice</p>
          </button>
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

       {appointmentData?.followup_date && <div className="w-full my-2 p-2 asm:p-3 space-y-3 border-[1px] border-[#DADADA] rounded-[15px]">
          {/* --------------------------follow up dates---------------------- */}
          <FollowUpDateComp followUpDate={appointmentData?.followup_date} />
          {appointmentData?.is_clinic_booking && (
            <div className="w-full max-lsm:hidden">
              {" "}
              <Msg />
            </div>
          )}
        </div>}
      </div>
    </div>
  );
}


