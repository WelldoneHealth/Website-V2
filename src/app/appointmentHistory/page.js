import React from 'react'
import refreshArrowIcon from "@/asset/Icons/refreshArrow.svg"
import uploadIcon from "@/asset/Icons/upload.svg"
import successTickIcon from "@/asset/Icons/successTick.svg"
import infoIcon from "@/asset/Icons/info.svg"
import rxNoteIcon from "@/asset/Icons/rxNote.svg"
import crossIcon from "@/asset/Icons/cross.svg"
import doctorAppointmentImage from "@/asset/Images/doctorAppointmentImage.png"
import doctorAppointmentImage2 from "@/asset/Images/doctorAppointmentImage2.png"


export default function page() {
  return (
   <div className="w-full max-w-[1600px] mx-auto px-1  asm:px-3 lg:px-0 flex gap-x-2">
    {/* ---------1st part--------- */}
    <div className= " w-[300px]  px-2 py-3 space-y-2 ">
<p className='text-lg font-medium text-[#01549A] text-center'>All My Family Member's</p>
<div className="flex p-2 rounded-[10px]  gap-x-3 border-[1px] border-[#01549A]">
    <div className="text-white size-12 flexCenter bg-primary rounded-full">RN</div>
    <div className="text-sm flex flex-col justify-center">
        <p>Rakesh Nandre <span className='font-medium'>(Me)</span> </p>
        <p>Mumbai​</p>
    </div>
</div>
<button className='text-[#01549A] font-medium px-4 py-2 rounded-[10px] border-[1px] border-[#01549A] text-base '>+ Add New Family Member's</button>
    </div>

    
    {/* --------2nd part------------- */}
    <div className="flex-1 border-l-[1px] border-[#545454] min-h-screen">

{/* ---------------main upcoming appointment cards------------ */}
<div className="px-5 py-2 pb-7 w-full space-y-3  border-b-[1px] border-[#545454] ">
    <p className='text-[20px]'>Upcoming Appointments</p>
    {/* -----------appointments cards sections---------- */}
    <div style={{boxShadow:" 1px 1px 4px 2px #8383834D"}} className="w-full space-y-3  px-5 py-4 rounded-[15px] border-[0.5px] border-[#DADADA]">
  {/* --------------cards text---------- */}
     <div className="w-full flex gap-x-8 text-sm">
            {/* -------writing 1 st part------- */}
            <div className="font-medium">
<p><span className='font-semibold'>Patient-</span> Rakesh Nandre, (Me)</p>
<p><span className='font-semibold' >Appointment id-</span> 123456789​</p>
<p><span className='font-semibold'>Total-</span> ₹ 700.00</p>
            </div>
            {/* ------------writing 2 nd part-------------- */}
            <div className="font-medium">
                    <p><span className='font-semibold'>Reason-</span> General Consultation</p>
                    <p><span className='font-semibold'>Payment Method-</span> Pay on Conter</p>
            </div>
        </div>
     {/* -----------main appointement section-------- */}
     <div className="w-full  flex p-4 border-y-[3px] border-l-[10px] border-r-[3px] border-[#01A400] rounded-[15px]">
        {/* ----inside card left part-------- */}
<div className="w-1/2 flexCenter ">
<div className="w-[320px] space-y-7   ">

<div className="py-[6px] border-b-[1px] border-[#DADADA] text-center space-y-[2px]">
    <p className='font-medium text-lg '>Today</p>
    <p className='text-xs'>Last updated: 2 Minutes ago</p>
</div>
<div className="flex justify-center gap-x-5">
    <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="px-5 rounded-[10px] flexCenter text-[26px] font-bold text-[#FF0000]"> 2 </div>
    <div className="space-y-2">
        <p className='font-medium text-sm'>Waiting Number</p>
        <p className='text-2xl font-medium text-[#4472C4] tracking-wide'>01:15 PM</p>
    </div>
</div>
<div className="text-[#01549A] text-sm flex justify-center gap-x-5">
    <button type="button"  className=' w-[105px] py-1 flexCenter border-[1px] border-[#01549A] rounded-[5px] flex gap-x-2 items-center ' ><img src={refreshArrowIcon?.src} className='' alt="load..."/>Refresh</button>
    <button type="button"  className=' w-[105px] py-1 flexCenter border-[1px] border-[#01549A] rounded-[5px]'  >Cancel</button>
</div>
<p className='text-[#5A5D62] text-xs text-center'>Given Time is approximate can vary by +/-60 Min</p>

</div>
</div>
     {/* ----inside card right part-------- */}
<div style={{boxShadow:" 0px 0px 4px 0px #01549A40"}} className="w-1/2 p-5 rounded-[20px] space-y-4">
<div className="w-full flex items-center gap-x-3">
    <div className="size-10 flexCenter text-lg rounded-full text-white font-medium  bg-[#01A400]">24</div>
    <p className='text-base font-medium'>Rakesh Nandre, (Me)</p>
</div>
<div style={{boxShadow: "0px 0px 4px 0px #01549A40"}} className="  rounded-[20px] w-full p-3 flex gap-x-5 items-center">
    <div className="">
<img src={doctorAppointmentImage?.src} className='' alt="load..."  />
    </div>
    <div className="">
        <p className='text-lg font-medium'>Dr.Aradhana Bhamare</p>
        <p className='text-sm'>Ram Surgical and Maternity Hospital</p>
        <div className="tet-sm text-[#01A400]"><span className='mr-3'>a</span>Open</div>
    </div>
</div>
<button className="w-[85%] mx-auto py-1 rounded-[5px] text-sm border-[1px] border-[#01549A]  font-semibold text-[#01549A] flex gap-x-2 justify-center items-center"> <img src={uploadIcon?.src} className='w-3' alt="load..."  /> Upload </button>
</div>
     </div>

    </div>
</div>


{/* -----------history cards list--------- */}
<p className='text-lg px-5 my-3 text-[#01549A] font-medium'>All Appointments</p>

<div className="px-5 py-2 pb-7 w-full space-y-3  border-b-[1px] border-[#545454]  min-h-screen ">
  



    {/* -----------history success cards ---------- */}
    <div style={{boxShadow:" 1px 1px 4px 2px #8383834D"}} className="w-full space-y-3  px-5 py-4 rounded-[15px] border-[0.5px] border-[#DADADA]">
  {/* --------------cards text---------- */}
     <div className="w-full flex  items-start gap-x-24 text-sm">
            {/* -------writing 1 st part------- */}
            <div className="font-medium">
<p><span className='font-semibold'>Patient-</span> Rakesh Nandre, (Me)</p>
<p><span className='font-semibold' >Appointment id-</span> 123456789​</p>
<p><span className='font-semibold'>Total-</span> ₹ 700.00</p>
            </div>
            {/* ------------writing 2 nd part-------------- */}
            <div className="font-medium">
                    <p><span className='font-semibold'>Reason-</span> General Consultation</p>
                    <p><span className='font-semibold'>Payment Method-</span> Pay on Conter</p>
            </div>
            {/* ---------------writing 3 rd part----------- */}
            <button className='text-[#01549A] font-medium px-4 py-1 rounded-[10px] border-[1px] border-[#01549A] text-sm flexCenter'> + Show Appointment details</button>
        </div>

     {/* -----------main appointement section-------- */}
     <div className="w-full   p-4 border-[1px] border-[#DADADA] rounded-[15px]">
      
<div className="w-full bg-[#F3FFEE] rounded-[5px] text-[#01A400] py-[10px] px-[34px] text-sm flex items-center   ">
    <img src={successTickIcon?.src}  className='w-4 mr-2'  alt="load..."  /> Completed on  &nbsp;<span className='font-semibold'> Thursday 05 Sep, 2024</span>
</div>
<div className="">
<div className="w-full mt-6 flex gap-x-7 ">
  {/* ----inside old appointment card 1 st part-------- */}
  {/* <div className="flex gap-x-8"> */}

  {/* -----------1st part------------- */}
    <div className="   overflow-hidden  rounded-full">
        <img src={doctorAppointmentImage2?.src} className='w-[205px]  ' alt="load..."  />
    </div>
{/* ---------2nd part-------------- */}
    <div className=" w-full ">

    <div className="w-full flex justify-between ">
    <div className="space-y-2">
       <p className='text-[20px] font-medium'>Dr.Aradhana Bhamare</p>
        <p className='text-sm'>Cardiologist Surgery, General Surgeon</p>
        <p className='text-sm'>Shidhivinayak Hospital - Dhule</p>
       </div>
 <div className=" space-y-3">
<button type="button" className='px-5 py-[6px] w-[250px] flex items-center gap-x-2 text-sm font-medium border-[1px] border-[#01549A]  rounded-[20px] text-[#01549A]  text-center'> <img src={rxNoteIcon?.src} className='w-[12px]' alt="load..."  />  Prescription </button>
<button type="button" className='px-5 py-[6px] w-[250px] flex items-center gap-x-2 text-sm font-medium border-[1px] border-[#01549A]  rounded-[20px] text-[#01549A]  text-center'> <img src={rxNoteIcon?.src} className='w-[12px]' alt="load..."  />  Prescription </button>
</div>
    </div>

<div className="mt-4 w-full space-y-2">
<button type="button" className=' w-[230px] text-sm font-semibold bg-primary rounded-[20px] text-white py-[6px] text-center'  >Book Follow-Up</button>
        <p className='flex items-center text-sm'><img src={infoIcon?.src} className='mr-2 ' alt="load..."  /> Follow before – 12/03/2022, 20 days remaining​</p>
        <div className='max-w-max py-1 px-5 bg-[#F0F8FF] text-sm text-[#01549A] italic rounded-[15px]'>Share by Welldone Health Doctor/Clinic/Hospital this appointment with you.</div> 
</div>

    </div>
  </div>

 
     </div>
     </div>

    </div>





{/* -------------------history failed cards  1  ----------- */}
<div style={{boxShadow:" 1px 1px 4px 2px #8383834D"}} className="w-full space-y-3  px-5 py-4 rounded-[15px] border-[0.5px] border-[#DADADA]">
  {/* --------------cards text---------- */}
     <div className="w-full flex  items-start gap-x-24 text-sm">
            {/* -------writing 1 st part------- */}
            <div className="font-medium">
<p><span className='font-semibold'>Patient-</span> Rakesh Nandre, (Me)</p>
<p><span className='font-semibold' >Appointment id-</span> 123456789​</p>
<p><span className='font-semibold'>Total-</span> ₹ 700.00</p>
            </div>
            {/* ------------writing 2 nd part-------------- */}
            <div className="font-medium">
                    <p><span className='font-semibold'>Reason-</span> General Consultation</p>
                    <p><span className='font-semibold'>Payment Method-</span> Pay on Conter</p>
            </div>
             </div>

     {/* -----------main appointement section-------- */}
     <div className="w-full   p-4 border-[1px] border-[#DADADA] rounded-[15px]">
      
<div className="w-full bg-[#FFF0F0] rounded-[5px] text-[#F10000] py-[10px] px-[34px] text-sm flex items-center   ">
    <img src={crossIcon?.src}  className='w-4 mr-2'  alt="load..."  /> Cancelled - Due to end of day on  &nbsp;<span className='font-semibold'> Thursday 05 Sep, 2024</span>
</div>
<div className="">
<div className="w-full mt-6 flex gap-x-7 ">

  {/* -----------1st part------------- */}
    <div className="   overflow-hidden  rounded-full">
        <img src={doctorAppointmentImage2?.src} className='w-[205px]  ' alt="load..."  />
    </div>
{/* ---------2nd part-------------- */}
    <div className=" w-full ">

    <div className="w-full flex justify-between ">
    <div className="space-y-2">
       <p className='text-[20px] font-medium'>Dr.Aradhana Bhamare</p>
        <p className='text-sm'>Cardiologist Surgery, General Surgeon</p>
        <p className='text-sm'>Shidhivinayak Hospital - Dhule</p>
       </div>
 <div className=" space-y-3">
<button type="button" className='px-5 py-[6px] w-[250px] justify-center flex items-center gap-x-2 text-sm font-medium border-[1px] border-[#01549A]  rounded-[20px] text-white bg-primary  '>  Book Again </button>
</div>
    </div>



    </div>
  </div>

 
     </div>
     </div>

    </div>







{/* -------------------history failed cards  2  ----------- */}
<div style={{boxShadow:" 1px 1px 4px 2px #8383834D"}} className="w-full space-y-3  px-5 py-4 rounded-[15px] border-[0.5px] border-[#DADADA]">
  {/* --------------cards text---------- */}
     <div className="w-full flex  items-start gap-x-24 text-sm">
            {/* -------writing 1 st part------- */}
            <div className="font-medium">
<p><span className='font-semibold'>Patient-</span> Rakesh Nandre, (Me)</p>
<p><span className='font-semibold' >Appointment id-</span> 123456789​</p>
<p><span className='font-semibold'>Total-</span> ₹ 700.00</p>
            </div>
            {/* ------------writing 2 nd part-------------- */}
            <div className="font-medium">
                    <p><span className='font-semibold'>Reason-</span> General Consultation</p>
                    <p><span className='font-semibold'>Payment Method-</span> Pay on Conter</p>
            </div>
             </div>

     {/* -----------main appointement section-------- */}
     <div className="w-full   p-4 border-[1px] border-[#DADADA] rounded-[15px]">
      
<div className="w-full bg-[#FFF0F0] rounded-[5px] text-[#F10000] py-[10px] px-[34px] text-sm flex items-center   ">
    <img src={crossIcon?.src}  className='w-4 mr-2'  alt="load..."  /> Cancelled - Due to end of day on  &nbsp;<span className='font-semibold'> Thursday 05 Sep, 2024</span>
</div>
<div className="">
<div className="w-full mt-6 flex gap-x-7 ">

  {/* -----------1st part------------- */}
    <div className="   overflow-hidden  rounded-full">
        <img src={doctorAppointmentImage2?.src} className='w-[205px]  ' alt="load..."  />
    </div>
{/* ---------2nd part-------------- */}
    <div className=" w-full ">

    <div className="w-full flex justify-between ">
    <div className="space-y-2">
       <p className='text-[20px] font-medium'>Dr.Aradhana Bhamare</p>
        <p className='text-sm'>Cardiologist Surgery, General Surgeon</p>
        <p className='text-sm'>Shidhivinayak Hospital - Dhule</p>
       </div>
 <div className=" space-y-3">
<button type="button" className='px-5 py-[6px] w-[250px] justify-center flex items-center gap-x-2 text-sm font-medium border-[1px] border-[#01549A]  rounded-[20px] text-white bg-primary  '>  Book Again </button>
</div>
    </div>
    <div className="mt-4 w-full space-y-2">
        <div className='max-w-max py-1 px-5 bg-[#F0F8FF] text-sm text-[#01549A] italic rounded-[15px]'>Share by Welldone Health Doctor/Clinic/Hospital this appointment with you.</div> 
</div>


    </div>
  </div>

 
     </div>
     </div>

    </div>




</div>




    </div>

   </div>
  )
}
