import React from 'react'
import doctorAppointmentImage from "@/asset/Images/doctorAppointmentImage.png"
import moment from 'moment/moment'

export default function UpcomingAppo_Card({appointmentData}) {

    const appo_data1=[
        {
          boldText: "Patient-",
          text:`${appointmentData?.patient_first_name ?? ''} ${appointmentData?.patient_middle_name ?? ''} ${appointmentData?.patient_last_name ?? ''}`
        },
        {
          boldText: "Appointment id-",
          text:appointmentData?.id ?? 'N/A'
        },
        {
          boldText: "Booking Date-",
          text:appointmentData?.booked_on ?? "N/A"
        }
      ]
      
      const appo_data2=[
        {
          boldText:"Reason-",
          text:appointmentData?.reason ?? "N/A"
        }, {
          boldText:"Payment Method-",
          text:"Pay on Conter"
        },
        {
          boldText: "Total-",
          text: `₹  ${Number(appointmentData?.amount) ?? 'N/A'} `
        }
      ]



//todo ----------------------------------left card------------------
const LeftCard=()=>(<div className="px-3  max-md:w-full minw-[180px] flexCenter ">
    <div className="space-y-3 md:space-y-7 w-full max-w-[400px]">
    
    <div className="w-full py-[6px] border-b-[1px] border-[#DADADA] text-center space-y-[6px] md:space-y-[2px]">
        <p className='font-medium text-xl  md:text-lg '>{moment(appointmentData?.appointment_date).isSame(moment(), 'day') ? 'Today' : appointmentData?.appointment_date}</p>
        <p className='text-sm md:text-xs'>Last updated: 2 Minutes ago</p>
    </div>
    <div className="flex justify-center gap-x-5">
        <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="size-[60px] msm:size-[70px] md:px-5 rounded-[10px] flexCenter text-[32px]  msm:text-[40px] lg:text-xl esm:text-[26px] font-bold text-[#FF0000]"> 2 </div>
        <div className="space-y-1 msm:space-y-2">
            <p className='font-medium text-base md:text-sm lg:text-xs  esm:text-sm'>Waiting Number</p>
            <p className='text-[25px] msm:text-3xl md:text-[22px] esm:text-2xl font-medium text-[#4472C4] tracking-wide'>{moment(appointmentData?.doctor_expected_visiting_time, 'HH:mm:ss').format('hh:mm A')}</p>
        </div>
    </div>
    {/* <div className="text-[#01549A] text-sm flex justify-center gap-x-5">
        <button type="button"  className=' w-[105px] py-1 flexCenter border-[1px] border-[#01549A] rounded-[5px]'  >Cancel</button> 
    </div> */}
    <p className='text-[#5A5D62] text-xs asm:text-[13px] md:text-xs text-center'>Given Time is approximate can vary by +/-60 Min</p>
    
    </div>
    </div>)

//todo -------------------------------right card-----------------
const RightCard=()=>(
    <div style={{boxShadow:" 0px 0px 4px 0px #01549A40"}} className="max-md:w-full   max-md:mx-auto   md:max-w-[400px] p-4  msm:p-5 rounded-[20px] space-y-3 msm:space-y-4">
<div className="w-full flex items-center gap-x-3">
    <div className="size-10 flexCenter text-lg rounded-full text-white font-medium  bg-[#01A400]">{appointmentData?.equeue_no ?? ''}</div>
    <p className='text-base font-medium'>{appointmentData?.patient_first_name ?? ''} {appointmentData?.patient_middle_name ?? ''} {appointmentData?.patient_last_name ?? ''}, ({appointmentData?.patient_relation ?? ''})</p>
</div>
<div style={{boxShadow: "0px 0px 4px 0px #01549A40"}} className="  rounded-[20px] w-full p-3 flex items-center gap-x-3 msm:gap-x-4 ">
    {/* <div className="bg-black">
<img src={doctorAppointmentImage?.src} className='max-md:w-[150px] w-auto' alt="load..."  />
    </div> */}
     <div className=" max-md:size-[120px] max-md:rounded-full max-md:flex items-center p-1 md:w-auto">
{/* <img src={ appointmentData?.doctor_image || doctorAppointmentImage?.src} className='w-full md:w-auto ' alt="load..."  /> */}
<img src={  doctorAppointmentImage?.src} className='w-full md:w-auto ' alt="load..."  />
    </div>
    <div className="space-y-1">
        <p className='text-base msm:text-xl md:text-base xl:text-[17px] font-medium'> {appointmentData?.doctor_suffix ?? ''} {appointmentData?.doctor_name ?? ''} {appointmentData?.doctor_middle_name ?? ''} {appointmentData?.doctor_last_name ?? ''} </p>
        <p className='text-sm msm:text-base md:text-sm'>{appointmentData?.clinic_name ?? ''} </p>
        <div className="tet-sm text-[#01A400]"><span className='mr-3'>a</span>Open</div>
    </div>
</div>
{/* <button className="w-[85%] mx-auto py-1 rounded-[5px] text-sm border-[1px] border-[#01549A]  font-semibold text-[#01549A] flex gap-x-2 justify-center items-center"> <img src={uploadIcon?.src} className='w-3' alt="load..."  /> Upload </button> */}
<button type="button"  className=' w-[105px] mx-auto text-[#01549A] py-1 flexCenter border-[1px] border-[#01549A] rounded-[5px]'  >Cancel</button>
</div>
)

  return (
    <div style={{boxShadow:" 1px 1px 4px 2px #8383834D"}} className="w-full max-w-[1000px] md:space-y-4  px-3 ssm:px-2 asm:px-4 py-2 max-asm:pb-3 asm:py-4  rounded-[15px] border-[2px] md:border-[0.5px] border-[#01A400] md:border-[#DADADA] ">
  
    {/* --------------cards text---------- */}
       <div className="w-full   max-md:hidden  flex   gap-x-24 gap-y-3 text-sm" >
              {/* -------writing 1 st part------- */}
              <div className=" text-nowrap space-y-1">
        {appo_data1.map((item,index)=><p key={index}>
            <span className="font-semibold">{item.boldText}</span> {item.text}
          </p>)}
        </div>
        {/* ------------writing 2 nd part-------------- */}
        <div className=" text-nowrap space-y-1">
          {appo_data2.map((item,index)=><p key={index}>
            <span className="font-semibold">{item.boldText}</span> {item.text}
          </p>)}
          
        </div>
          </div>
  
       {/* -----------main appointement section-------- */}
       <div className="w-full  flex flex-col md:flex-row gap-y-4 justify-center gap-x-4 md:px-2 md:py-3 md:border-y-[3px]  md:border-l-[10px]  md:border-r-[3px] border-[#01A400] rounded-[15px]">
          {/* ----inside card left part-------- */}
  <LeftCard/>
       {/* ----inside card right part-------- */}
  <RightCard />
       </div>
  
      </div>
  )
}
