import React from 'react'
import successTickIcon from "@/asset/Icons/successTick.svg"
import doctorAppointmentImage2 from "@/asset/Images/doctorAppointmentImage2.png"
import refreshArrowIcon from "@/asset/Icons/refreshArrow.svg"
import uploadIcon from "@/asset/Icons/upload.svg"
import infoIcon from "@/asset/Icons/info.svg"
import rxNoteIcon from "@/asset/Icons/rxNote.svg"


export default function page() {
  return (
   <div className="w-full max-w-[940px] mx-auto px-1  space-y-3 asm:px-3 lg:px-0">
<div style={{boxShadow:" 1px 1px 4px 2px #8383834D"}} className="mt-6 w-full  space-y-3  px-5 py-4 rounded-[15px] border-[0.5px] border-[#DADADA]">
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
<button type="button" className=' w-[230px] text-sm font-semibold bg-[#01549A] rounded-[20px] text-white py-[6px] text-center'  >Book Follow-Up</button>
        <p className='flex items-center text-sm'><img src={infoIcon?.src} className='mr-2 ' alt="load..."  /> Follow before – 12/03/2022, 20 days remaining​</p>
        <div className='max-w-max py-1 px-5 bg-[#F0F8FF] text-sm text-[#01549A] italic rounded-[15px]'>Share by Welldone Health Doctor/Clinic/Hospital this appointment with you.</div> 
</div>

    </div>
  </div>

 
     </div>
     </div>

    </div>


{/* ----------payment information----------- */}
<div className="w-full  py-6  rounded-[15px] flex border-[1px]    border-[#DADADA]">
    <div className="w-1/2 px-11   ">
<p className='text-base  mb-3 font-medium '>Payment information</p>
<div className="w-[90%] text-sm font-normal space-y-2">
    <div className="flex justify-between items-start">   <p>Consultation :</p>  <p>₹ 500</p> </div>
    <div className="flex justify-between items-start">   <p>Consultation :</p>  <p>₹ 500</p> </div>
    <div className="flex justify-between items-start">   <p>Consultation :</p>  <p>₹ 500</p> </div>
    <div className="flex justify-between items-start font-medium">   <p className=''>Consultation :</p>  <p>₹ 500</p> </div>
</div>
    </div>
    <div className="w-1/2  px-11 border-l-[1px]    border-[#DADADA]">
<p className='text-base mb-3 font-medium'>More actions</p>
<div className="w-full">
    <div className="flex justify-between items-center">   <p className='tex-base'>Download Invoice :</p>  <button  type="button"  className='w-[105px] py-1 flexCenter text-[#01549A] text-sm border-[1px] border-[#01549A] rounded-[5px]' >View Invoice</button> </div>
</div>
    </div>

</div>



{/* ---------------tracking status-------------- */}
<div className="border-[1px] border-[#DADADA] px-8 py-5 rounded-[15px]">
<p className='text-base  mb-6 font-medium '>Track appointment</p>
<div className="w-full space-y-3">
    <div className="w-full flex gap-x-28 text-sm text-wrap text-center items-start leading-tight">
        <p>Appointment place</p>
        <p>Schedule for</p>
        <p>Visit on Office</p>
        <p>Treatement Procedure</p>
        <p>Complete</p>
    </div>
    <div className="w-[90%] mx-auto  flex items-center">
{/* <div className="size-[18px] bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[3px] border-[#01A400]"></div> */}
<div className="size-[18px] bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  bg-[#01A400] rounded-full"></div>

    </div>
     <div className="w-full flex gap-x-[110px]  text-sm text-wrap text-center items-start leading-tight">
        <p>11:48 aM Tue, 01 Feb </p>
        <p>11:48 amTue, 01 Feb</p>
        <p>11:48 amTue, 01 Feb</p>
        <p>01:13 PM Wed, 24 Nov</p>
        <p>01:13 PM Wed, 24 Nov</p>
    </div>
</div>
</div>


{/* <div className="w-[90%] mx-auto bg-blue-700 flex items-center">
 <div className="size-[18px] bg-[#01A400] rounded-full"></div>
<div className="w-[185px] border-[3px] border-[#01A400]"></div>
<div className="size-[18px] border-[2px] bg-transparent border-red-700 rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  border-[2px] bg-transparent border-red-700 rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  border-[2px] bg-transparent border-red-700 rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  border-[2px] bg-transparent border-red-700 rounded-full"></div>
<div className="w-[185px] border-[1.5px] border-[#01A400]"></div>
<div className="size-[18px]  border-[2px] bg-transparent border-red-700 rounded-full"></div>
    </div> */}




   </div>
  )
}
