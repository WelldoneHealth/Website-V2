import React from 'react'
import Tracking from './components/Tracking'
import CompletedAppo_Cards from './components/CompletedAppo_Card'
import PaymentBoxDetails from './components/PaymentBoxDetails'

export default function SpecificAppointmentHistoryModule() {
  return (
    <div className="w-full mt-16 lg:max-w-[940px] mx-auto px-1  space-y-3 asm:px-3 lg:px-0">


{/* <CompletedAppo_Cards /> */}

{/* -------------------------payment details------------- */}
<PaymentBoxDetails />

{/* ---------------tracking status-------------- */}
<Tracking /> 

<div className="w-full flex flex-col msm:flex-row justify-center items-center gap-x-5 gap-y-3 md:hidden text-center text-sm asm:text-base ">
<div className="w-[95%] msm:w-[200px] px-5 py-2 border-[1px] border-primary rounded-[5px]">
    <p className='text-primary font-medium  '>View Invoice</p>
</div>

<div className="w-[95%] msm:w-[200px] px-5 py-2 border-[1px] border-primary  rounded-[5px] ">
    <p className='text-primary font-medium' >Track Appointment</p>
</div>
</div>


   </div>
  )
}
