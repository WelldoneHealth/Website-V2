"use client"
import React from 'react'
import Tracking from './components/Tracking'
import CompletedAppo_Cards from './components/CompletedAppo_Card'
import PaymentBoxDetails from './components/PaymentBoxDetails'
import { getSpecificHistory } from './apis'
import { useQuery } from '@tanstack/react-query'
import SpecificAppointmentMobileView from './components/SpecificAppointmentMobileView'
import AuthenticatedLayout from '@/shared/layouts/AuthenticatedLayout'


export default function SpecificAppointmentHistoryModule({appointmentId}) {

  const {
    data: specificHistoryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["specificHistoryData"],
    queryFn:()=>getSpecificHistory(appointmentId),
  });

  const data1=[
    {
      boldText: "Patient-",
      text:`${specificHistoryData?.patient_first_name ?? ''} ${specificHistoryData?.patient_middle_name ?? ''} ${specificHistoryData?.patient_last_name ?? ''}`
    },
    {
      boldText: "Age-",
      text:specificHistoryData?.patient_age ?? ''
    },
    {
      boldText: "Booking Date-",
      text:specificHistoryData?.booked_on ?? ""
    }
  ]
  
  const data2=[
    {
      boldText:"Appointment id-",
     text:specificHistoryData?.id ?? ''
    },{
      boldText:"Reason-",
      text:specificHistoryData?.reason?.split('_').join(' ') ?? "General Consulant"
    },{
      boldText:"Payment Method-",
      text:"Pay on Conter"
    },
  ]



//  if(!isLoading) console.log("--s",specificHistoryData)
 
  return ( 
    <AuthenticatedLayout>
    <div className="w-full mt-[85px] lg:max-w-[940px] mx-auto px-1  space-y-5 asm:px-3 lg:px-0">

{/* --------------------card--------after 720px-------- */}
<div className="w-full max-md:hidden">
<CompletedAppo_Cards appointmentCardData={specificHistoryData} status={true}  isSpecific={true} specificData1={data1} specificData2={data2}  />
</div>

{/* ----------------card---------below 720 px------ */}
<div className="space-y-2  w-full">
<p className='text-lg sm:text-base'>Appointment Details</p>
<SpecificAppointmentMobileView  appointmentData={specificHistoryData}  />
</div>


{/* -------------------------payment details------------- */}
<PaymentBoxDetails appointmentData={specificHistoryData} />


{/* ---------------tracking status-------------- */}
{/* <Tracking />  */}




            
   </div>
   </AuthenticatedLayout>
  )
}
