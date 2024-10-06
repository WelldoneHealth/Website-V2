"use client"

import React, {useState } from 'react'
import doctorImage2 from "@/asset/Images/doctorImage2.png"
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import toast from 'react-hot-toast';



export default function page() {

  const [statusChange,setStatusChange] = useState({
    doctorStatus:true,
    patientStatus:false,
    paymentStatus:false,
    appointmentStatus:false
  })

  const success=()=>toast.success("Appointment Booking Successful")


const [statusData,setStatusData]=useState({
  doctorSelection:1,
  patientSelection:null,
  paymentSelection:null,
  appointmentSelection:null
})


const [dataVisibilityToggle,setDataVisibilityToggle]=useState({
  doctorsToggle:true,
  patientToggle:false,
  paymentToggle:false,
  appointmentToggle:false
})



const getInputDetails=(e)=>{setStatusData({...statusData,[e.target.name]:e.target.value})}








  return (
    <div className="w-full relative max-w-[1600px] mx-auto px-1 py-6   asm:px-3 lg:px-0 xl:px-8  mt-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7 ">
  

  {/* ---------------appointment process-------------- */}
<div className=" w-full lg:w-[68%] space-y-5  ">

{/* -----------first card ( doctor selection)---------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full  rounded-[10px]  border-[1px] border-[#EFEFEF]">

<p style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="font-medium p-4 bg-[1px] border-[#EFEFEF]">1. Consult doctor and Clinic/Hospital</p>
{/* 2 cards portion----------- */}
<div className="space-y-5 p-5">
{/* -------------------doctor card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------doctor image------------ */}

    <img src={doctorImage2?.src} className="w-[70px]"  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p>Dr. Subhash V. Gupta</p>
      <p className="text-primary">Change</p>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p classNametext="text-xs">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>
{/* ----------------hospital card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------hospital image------------ */}

    <img src={doctorImage2?.src} className="w-[70px]"  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p>Dr. Subhash V. Gupta</p>
      <p className="text-primary">Change</p>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p classNametext="text-xs">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>

</div>

<div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button" onClick={()=>(statusData.doctorSelection  &&  setStatusChange({...statusChange,patientStatus:true}))} className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Continue Appointment</button>
</div>

</div>


{/* -----------second card ( patiennt selection) -------------- */}
{ statusChange.patientStatus &&  <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full  rounded-[10px]  border-[1px] border-[#EFEFEF]">

<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full font-medium p-4  flex items-center justify-between bg-[1px] border-[#EFEFEF] "><p>2. Select a patient/Patient Review</p> <button type="button" onClick={()=>setDataVisibilityToggle({...dataVisibilityToggle,patientToggle:false})}  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${!dataVisibilityToggle.patientToggle && "hidden"} `} >Change</button> </div>
{/* 2 cards portion----------- */}
{!dataVisibilityToggle.patientToggle  && <> <div className={`w-full space-y-5 p-5 ` }>
{[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-start gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------checkout------------ */}
  <input type="radio" onChange={getInputDetails} name="patientSelection" value={index}  className="w-[20px] h-[20px]" />

  <div className="w-full space-y-2">
<div className="w-full flex items-start gap-x-2">
  <div className="bg-[#D9D9D9] w-12  h-12 flexCenter rounded-full font-medium  ">RN</div>
  <div className="w-full space-y-[2px]">
    <div className="w-full space-y-1 flex items-center justify-between">
    <div className="flex items-center gap-x-3">
      <p className="text-lg font-medium">Rakesh Nadre</p>
      <p className="text-primary px-2 flexCenter border-[1px] border-primary rounded-[5px]">Me</p>
      <p className="flex items-center gap-x-1 px-3 py-[2px] bg-[#EFEFEF] rounded-md"><img src={outlineGeoLocationIcon?.src} className="" alt="load..." />8806010415</p>
    </div>
    <p className="text-primary font-medium">Edit</p>
    </div>
   <p className="text-sm">26 Years, 4 Month Old</p>
  </div>
</div>
<div className=" px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
  <img src={outlineGeoLocationIcon?.src} className="" alt="load..."  />
  House, street, city, landmark, state, Country, Pin Code</div>
  </div>
</div>)}
</div>

 <div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button"   onClick={()=>(statusData.patientSelection  && (setDataVisibilityToggle({...dataVisibilityToggle,patientToggle:true}),setStatusChange({...statusChange,paymentStatus:true})))}  className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${!statusData.patientSelection?" text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]":"bg-primary text-white"} `}    disabled={!statusData.patientSelection} >Appointment for this Patient</button>
</div>
</>}

{dataVisibilityToggle.patientToggle  && <div className="w-full p-5  font-medium ">
<p className="px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA]">hello it is good</p>
</div> }

</div>}


{/* -----------third card (payment option)------------------- */}
{ statusChange.paymentStatus && <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full  rounded-[10px]  border-[1px] border-[#EFEFEF]">

<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full font-medium p-4 flex items-center justify-between bg-[1px] border-[#EFEFEF]"><p>3. Payment options</p> <button type="button" onClick={()=>setDataVisibilityToggle({...dataVisibilityToggle,paymentToggle:false})}  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${!dataVisibilityToggle.paymentToggle && "hidden"} `}  >Change</button></div>
 {/*----------- 2 checkbox portion-----------  */}
{ !dataVisibilityToggle.paymentToggle  &&   <>
  <div className="space-y-5 p-5">
{[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
 {/* ------checkout------------  */}
  <input type="radio" onChange={getInputDetails}  name="paymentSelection" value={index}   className="w-[20px] h-[20px]" />

  <div className="w-full space-y-1">
  <p className="text-base font-medium">Pay online</p>
  <p classNametext="text-sm">Allows patients to pay for services through a secure platform, integrated with your EMR.</p>
  </div>
</div>)}


</div>

<div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button"  onClick={()=>(statusData.paymentSelection && (setDataVisibilityToggle({...dataVisibilityToggle,paymentToggle:true}),setStatusChange({...statusChange,appointmentStatus:true})))}  className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${!statusData.paymentSelection?" text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]":"bg-primary text-white"} `}   disabled={!statusData.paymentSelection} >Continue </button>
</div>
</>}

{dataVisibilityToggle.paymentToggle && <div className="w-full p-5  font-medium ">
<p className="px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA]">hello it is good</p>
</div> }

</div>}



{/* ----------fourth card( appointment summary)------------------- */}
{statusChange.appointmentStatus && <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full rounded-[10px]   border-[1px] border-[#EFEFEF]">

<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full font-medium p-4 flex items-center justify-between bg-[1px] border-[#EFEFEF]"><p>4. Appointment summary</p> <button type="button" onClick={()=>setDataVisibilityToggle({...dataVisibilityToggle,appointmentToggle:false})}  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${!dataVisibilityToggle.appointmentToggle && "hidden"} `}  >Change</button></div>
{/* 2 checkbox portion----------- */}
<div className="space-y-5 py-5">

{/* ------------appointment----------------- */}
<div className="space-y-3  p-5 border-b-[1px] border-[#DADADA]">
<p>Book by e-Queue</p>
<div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-primary " >
    <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-primary font-medium ">Today</p>
    <hr />
    <div className="w-full flexCenter gap-x-5 py-4">
      <div style={{boxShadow: "0px 0px 4px 2px #00000040"
}} className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold ">
        2
      </div>
      <div className="space-y-1">
        <p className=" text-xs">Waiting Number</p>
        <p className="text-[#01549A] font-semibold text-lg">01:15 PM</p>
      </div>
    </div>
    <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">Given Time is approximate can vary by +/-60 Min</p>
  </div>
</div>

{/* ----------------checkout----------- */}
{!dataVisibilityToggle.appointmentToggle && <div className="space-y-5 px-5">
<div className="space-y-3 text-sm">
  <p>What’s The Reson for Your Visit</p>
  <p className="border-[1px] border-[#919196] px-2 py-2 text-[#191A1B] rounded-[10px]">General Consultation</p>
</div>
 <div className="space-y-3">
  <p>Have the patient seen these Doctors?</p>
  {[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------checkout------------ */}
  <input type="radio" onChange={getInputDetails}  name="appointmentSelection" value={index}  className="w-[20px] h-[20px]" />

  <div className="w-full space-y-1">
  <p className="text-base font-medium">First Consult</p>
  <p classNametext="text-sm">₹100</p>
  </div>
</div>)}
</div>
</div> }



</div>

{!dataVisibilityToggle.appointmentToggle && <div className="p-5 py-3 flex justify-between items-center bg-[#EFEFEF]">
  <p>Appointment confirmation WhatsApp Massage will be sent to <span className="font-medium">+91 9876543210</span> </p>
  <button type="button" onClick={()=>(statusData.appointmentSelection &&  setDataVisibilityToggle({...dataVisibilityToggle,appointmentToggle:true}) )} className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${!statusData.appointmentSelection?" text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]":"bg-primary text-white"} `} disabled={!statusData.appointmentSelection}  >Confirm</button>
</div>}

</div>}




{ dataVisibilityToggle.appointmentToggle && dataVisibilityToggle.patientToggle && dataVisibilityToggle.paymentToggle && dataVisibilityToggle.doctorsToggle &&  <button type="button" onClick={success} className="my-8 px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Book Appointment</button>}


</div>


{/* -----------------appointment details-------------------- */}
<div className="w-full flex-1 hidden lg:w-[90%] max-lg:absolute bg-red-900    transition-all duration-150 ease-linear">
<div className="w-full max-lg:mt-16  border-2 boreder-black rounded-[20px] pt-4 pb-0 overflow-hidden ">
<p className="text-lg font-medium  text-center">Book Your Appointment </p>
<hr className="my-3" />

<div className="">
  <p>Book by e-Queue</p>

<div className="">
<div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-[#01A400] " >
    <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-[#01A400] font-medium ">Today</p>
    <hr />
    <div className="w-full flexCenter gap-x-5 py-4">
      <div style={{boxShadow: "0px 0px 4px 2px #00000040"
}} className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold ">
        2
      </div>
      <div className="space-y-1">
        <p className=" text-xs">Waiting Number</p>
        <p className="text-[#01549A] font-semibold text-lg">01:15 PM</p>
      </div>
    </div>
    <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">Given Time is approximate can vary by +/-60 Min</p>
  </div>
</div>



</div>

<p>Convenient, real-time scheduling and reduced wait times and increased efficiency for both patients and doctors.</p>

</div>


</div>


    </div>
  )
}
