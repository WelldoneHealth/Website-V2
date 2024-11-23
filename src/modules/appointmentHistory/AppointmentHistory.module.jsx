



"use client"
import React, { useState } from 'react'
import refreshArrowIcon from "@/asset/Icons/refreshArrow.svg"
import uploadIcon from "@/asset/Icons/upload.svg"
import successTickIcon from "@/asset/Icons/successTick.svg"
import infoIcon from "@/asset/Icons/info.svg"
import rxNoteIcon from "@/asset/Icons/rxNote.svg"
import crossIcon from "@/asset/Icons/cross.svg"
import doctorAppointmentImage from "@/asset/Images/doctorAppointmentImage.png"
import doctorAppointmentImage2 from "@/asset/Images/doctorAppointmentImage2.png"
import CanceledAppo_Card from '@/modules/appointmentHistory/components/CancelledAppo_Card'
import CompletedAppo_Card from '@/modules/appointmentHistory/components/CompletedAppo_Card'
import { useQuery } from '@tanstack/react-query'
import { getAppointmentHistory } from './apis'


export default function AppointmentHistoryModule() {
    const {
        data: appointmentHistoryList,
        isLoading,
        error,
      } = useQuery({
        queryKey: ["appointmentHistoryList"],
        queryFn:getAppointmentHistory,
      });

    const [view,setView]=useState(1)




    if (isLoading) return <div>Loading...</div>;
    if (!isLoading) console.log("ok",appointmentHistoryList)


  return ( 
   <div className="w-full max-w-[1600px] mx-auto px-1 pt-[1px]  asm:px-3    gap-x-2  lg:px-[2rem]">

{/* <div className="w-full lsm:hidden my-3 mb-5 flex bg-green-900 justify-between gap-x-16 text-[13px]  sm:text-sm" >
    <button onClick={()=>setView(1)}  type="button" className='flex-1 px-6 py-2 bg-primary font-medium text-white rounded-[10px]' >All Appointments</button>
    <button onClick={()=>setView(2)}  type="button" className='flex-1 px-6 py-2 bg-primary font-medium text-white rounded-[10px]' >All family members</button>
</div> */}

 {view===1 && <div className="flex ">




       {/* ---------1st part--------- */}
       <div className= " max-lg:hidden w-[240px]  esm:w-[300px] h-screen  px-2 py-3 space-y-2 ">
<p className='text-base xl:text-lg font-medium text-[#01549A] text-center'>All My Family Member's</p>
<div className="flex p-2 rounded-[10px]  gap-x-3 border-[1px] border-[#01549A]">
    <div className=" text-white text-sm esm:text-base size-9  esm:size-12 flexCenter bg-primary rounded-full">RN</div>
    <div className="text-xs lsm:text-sm flex flex-col justify-center">
        <p>Rakesh Nandre <span className='font-medium'>(Me)</span> </p>
        <p>Mumbai​</p>
    </div>
</div>
<button className=' max-xl:hidden text-[#01549A] font-medium px-4 py-2 rounded-[10px] border-[1px] border-[#01549A] text-base '>+ Add New Family Member's</button>
<button className='xl:hidden text-[#01549A] font-medium px-4 py-2 rounded-[10px] border-[1px] border-[#01549A] text-sm xl:text-base '>+ Family Member's</button>
    </div>


    {/* --------2nd part------------- */}
    <div className=" max-md:w-full px-1  flex-1 md:border-l-[1px] border-[#545454] h-screen overflow-y-scroll custom-scrollbar">

 
{/* ---------------main upcoming appointment cards------------ */}
{/* <UpcomingAppo_Card /> */}


{/* -----------history cards list--------- */}
<p className='text-lg  md:px-5 my-3 text-[#01549A] font-medium'>All Appointments</p>
          
<div className="w-full md:px-5  py-2 pb-7  space-y-5  border-b-[1px] border-[#545454]  min-h-screen ">
       
{ appointmentHistoryList?.results?.map((item,index)=>!item?.is_cancelled ? (<CompletedAppo_Card key={index} appointmentCardData={item} status={true} />) : (<CanceledAppo_Card key={index} appointmentCardData={item} status={false} />) ) }
</div>




    </div>
 </div>}



{view===2 && <div className="w-full bg-gray-300 h-screen">
 hello   </div>}


   </div>
  )
}

