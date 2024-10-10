"use client"

import React, {useState } from 'react'
import doctorImage2 from "@/asset/Images/doctorImage2.png"
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import aroowIcon2 from "@/asset/Icons/arrow2.svg";
import toast from 'react-hot-toast';



export default function page() {


  // -------------------------for viewing the diffrent parts of the process when one is completed--------------
  const [statusChange,setStatusChange] = useState({
    doctorStatus:true,
    patientStatus:false,
    paymentStatus:false,
    appointmentStatus:false
  })

  const success=()=>toast.success("Appointment Booking Successful")

// -----------------------for storing the input values of the processed data------------------
const [statusData,setStatusData]=useState({
 doctorSelection:1,
 patientSelection:1, 
 paymentSelection:1,
 appointmentSelection:1
})

// --------------------- hide or view the 
const [dataVisibilityToggle,setDataVisibilityToggle]=useState({
  doctorsToggle:false,
  patientToggle:false,
  paymentToggle:false,
  appointmentToggle:false
})



const getInputDetails=(e)=>{setStatusData({...statusData,[e.target.name]:e.target.value})}



const [view,setView]=useState(false)

const [viewSliderType,setViewSliderType]=useState({
  doctor:false,
  hospital:false,
  appointment:false,
  
})


  return (


    <>
        <div className="w-full relative max-w-[1600px] mx-auto px-1   asm:px-3 lg:px-0 xl:px-8  py-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7 ">
  

  {/* ---------------appointment process-------------- */}
<div className=" w-full lg:w-[68%] space-y-5  ">

{/* -----------first card ( doctor selection)---------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full  rounded-[10px]  border-[1px] border-[#EFEFEF]">

<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full font-medium p-4  flex items-center justify-between bg-[1px] border-[#EFEFEF] "><p>1. Consult doctor and Clinic/Hospital</p> <button type="button" onClick={()=>setDataVisibilityToggle({...dataVisibilityToggle,doctorsToggle:false})}  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${!dataVisibilityToggle.doctorsToggle && "hidden"} `} >Change</button> </div>
{/* ----------------2 cards portion----------- */}
{ !dataVisibilityToggle.doctorsToggle &&  <> <div className="w-full   space-y-5 p-5">
{/* -------------------doctor card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full  max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------doctor image------------ */}

    <img src={doctorImage2?.src} className="w-[70px] hidden"  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p>Dr. Subhash V. Gupta</p>
      <button onClick={()=>{setView(true);setViewSliderType({...viewSliderType,doctor:true})}} className="text-primary">Change</button>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p classNametext="text-xs">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>
{/* ----------------hospital card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full  max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------hospital image------------ */}

    <img src={doctorImage2?.src} className="w-[70px] hidden"  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p>Dr. Subhash V. Gupta</p>
      <button type="button" onClick={()=>{setView(true);setViewSliderType({...viewSliderType,doctor:true})}} className="text-primary">Change</button>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p classNametext="text-xs">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>

</div>

<div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button" onClick={()=>(statusData.doctorSelection  &&  (setStatusChange({...statusChange,patientStatus:true}),setDataVisibilityToggle({...dataVisibilityToggle,doctorsToggle:true})))} className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Continue Appointment</button>
</div> </> }

{/* ----------------------on button click new card updated ui------------------------ */}
{ dataVisibilityToggle.doctorsToggle && <div className="w-full  flex justify-center items-center  gap-x-5 p-5">
{/* -------------------doctor card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full flex-1 max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------doctor image------------ */}

    <img src={doctorImage2?.src} className="w-[70px] "  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p >Dr. Subhash V. Gupta</p>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p className="text-sm">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>
{/* ----------------hospital card------------- */}
<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full flex-1  max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------hospital image------------ */}

    <img src={doctorImage2?.src} className="w-[70px] "  />
  <div className="w-full space-y-1">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p>Dr. Subhash V. Gupta</p>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p className="text-sm">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>

</div>}

</div>


{/* -----------second card ( patiennt selection) -------------- */}
{ statusChange.patientStatus &&  <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full  rounded-[10px]  border-[1px] border-[#EFEFEF]">

<div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full font-medium p-4  flex items-center justify-between bg-[1px] border-[#EFEFEF] "><p>2. Select a patient</p> <button type="button" onClick={()=>setDataVisibilityToggle({...dataVisibilityToggle,patientToggle:false})}  className={`text-primary px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${!dataVisibilityToggle.patientToggle && "hidden"} `} >Change</button> </div>
{/* 2 cards portion----------- */}
{!dataVisibilityToggle.patientToggle  && <> <div className={`w-full space-y-5 p-5 ` }>
{[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-start gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------checkout------------ */}
  <input type="radio" onChange={getInputDetails} name="patientSelection" value={index}  className="w-[20px] h-[20px]" checked={statusData.patientSelection==index} />

  <div className="w-full space-y-2">
<div className="w-full flex items-start gap-x-2">
  <div className="bg-[#D9D9D9] w-12  h-12 flexCenter rounded-full font-medium  ">RN</div>
  <div className="w-full space-y-[2px]">
    <div className="w-full space-y-1 flex items-center justify-between">
    <div className="flex items-center gap-x-3">
      <p className="text-lg font-medium">Rakesh Nadre {index} </p>     
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
<button type="button" onClick={()=>{setView(true);setViewSliderType({...viewSliderType,appointment:true})}} className="rounded-[20px] px-7 py-2 text-sm border-[1px] border-primary  text-primary font-medium  "  >+ Add a New Patient</button>
</div>

 <div className="p-5 py-3 bg-[#EFEFEF]">
  {/* <button type="button"   onClick={()=>(statusData.patientSelection  && (setDataVisibilityToggle({...dataVisibilityToggle,patientToggle:true}),setStatusChange({...statusChange,paymentStatus:true})))}  className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${!statusData.patientSelection?" text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]":"bg-primary text-white"} `}    disabled={!statusData.patientSelection} >Appointment for this Patient</button> */}
  <button type="button"   onClick={()=>(statusData.patientSelection  && (setDataVisibilityToggle({...dataVisibilityToggle,patientToggle:true}),setStatusChange({...statusChange,paymentStatus:true})))}  className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${!statusData.patientSelection?" text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]":"bg-primary text-white"} `}    disabled={!statusData.patientSelection} >Appointment for this Patient</button>
</div>
</>}

{dataVisibilityToggle.patientToggle  && <div className="w-full p-5  font-medium ">
<div className="w-full px-7 py-4 space-y-2 rounded-[10px] border-[1px]  border-[#DADADA]">
<div className="w-full flex items-start gap-x-2">
  <div className="bg-[#D9D9D9] w-12  h-12 flexCenter rounded-full font-medium  ">RN</div>
  <div className="w-full space-y-[2px]">
    <div className="w-full space-y-1 flex items-center justify-between">
    <div className="flex items-center gap-x-3">
      <p className="text-lg font-medium">Rakesh Nadre {statusData.patientSelection} </p>
      <p className="text-primary px-2 flexCenter border-[1px] border-primary rounded-[5px]">Me</p>
      <p className="flex items-center gap-x-1 px-3 py-[2px] bg-[#EFEFEF] rounded-md"><img src={outlineGeoLocationIcon?.src} className="" alt="load..." />8806010415</p>
    </div>
 
    </div>
   <p className="text-sm">26 Years, 4 Month Old</p>
  </div>
</div>
<div className=" px-4 py-[2px] max-w-max rounded-md flex  gap-x-2 bg-[#EFEFEF]">
  <img src={outlineGeoLocationIcon?.src} className="" alt="load..."  />
  House, street, city, landmark, state, Country, Pin Code</div>
  </div>
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
  <input type="radio" onChange={getInputDetails}  name="paymentSelection" value={index}   className="w-[20px] h-[20px]" checked={statusData.paymentSelection==index} />

  <div className="w-full space-y-1">
  <p className="text-base font-medium">Pay online {index}</p>
  <p classNametext="text-sm">Allows patients to pay for services through a secure platform, integrated with your EMR.</p>
  </div>
</div>)}


</div>

<div className="p-5 py-3 bg-[#EFEFEF]">
  <button type="button"  onClick={()=>(statusData.paymentSelection && (setDataVisibilityToggle({...dataVisibilityToggle,paymentToggle:true}),setStatusChange({...statusChange,appointmentStatus:true})))}  className={`px-8 py-3  font-semibold text-sm rounded-[10px]  ${!statusData.paymentSelection?" text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]":"bg-primary text-white"} `}   disabled={!statusData.paymentSelection} >Continue </button>
</div>
</>}

{dataVisibilityToggle.paymentToggle && <div className="w-full p-5  font-medium ">
<p className="px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA]">Pay online {statusData.paymentSelection}</p>
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

{/* ----------------checkout input----------- */}
{!dataVisibilityToggle.appointmentToggle && <div className="space-y-5 px-5">
<div className="space-y-3 text-sm">
  <p>What’s The Reson for Your Visit</p>
  <p className="border-[1px] border-[#919196] px-2 py-2 text-[#191A1B] rounded-[10px]">General Consultation</p>
</div>
 <div className="space-y-3">
  <p>Have the patient seen these Doctors?</p>
  {[1,2].map((item,index)=><div style={{boxShadow: "0px 0px 4px 0px #00000040"}} key={index} className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]">
  {/* ------checkout------------ */}
  <input type="radio" onChange={getInputDetails}  name="appointmentSelection" value={index}  className="w-[20px] h-[20px]" checked={statusData.appointmentSelection==index} />

  <div className="w-full space-y-1">
  <p className="text-base font-medium">First Consult {index} </p> 
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



{/* ---------------------steps to show in each process----------------- */}
{ !statusChange.patientStatus && <div style={{boxShadow: "0px 0px 4px 0px #00000040"}}  className="w-full px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA] font-semibold"> 2. Select a patient</div>}
{ !statusChange.paymentStatus && <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA] font-semibold">3. Payment options </div> }
{ !statusChange.appointmentStatus &&  <div style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="w-full px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA] font-semibold">4. Appointment summary </div> }



{/* -------------confirmation buton----------------------- */}
{ dataVisibilityToggle.appointmentToggle && dataVisibilityToggle.patientToggle && dataVisibilityToggle.paymentToggle && dataVisibilityToggle.doctorsToggle &&  <button type="button" onClick={success} className="my-8 px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white ">Book Appointment</button>}


</div>




{/* -----------------appointment details-------------------- */}
<div className="w-full flex-1  lg:w-[90%] max-lg:absolute    transition-all duration-150 ease-linear">
  
{/* --------------just for development purpose to show or hide the slider one----------------  */}
   {/* <button type="button" onClick={()=>setView(!view)} className="text-white px-6 py-3 bg-primary  "  >view / hide </button> */}


{/* --------main appointemnt part------------- */}
<div className="w-full  max-lg:mt-16  border-2 boreder-black rounded-[20px] pt-4 pb-0 overflow-hidden ">
<p className="text-lg font-medium  text-center">Book Your Appointment </p>
<hr className="my-3" />

<div className="px-5 py-3">
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
    <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px] mt-3 ">Given Time is approximate can vary by +/-60 Min</p>
  </div>
</div>



</div>

<p className="px-5">Convenient, real-time scheduling and reduced wait times and increased efficiency for both patients and doctors.</p>

</div>

</div>

    </div>



    { view &&  <div onClick={()=>{setView(false)}} className={`  max-w-[1600px]  h-[200%] w-full left-1/2  absolute  top-0   mx-auto overflow-hidden  transform -translate-x-1/2  z-[100000]  bg-gray-400 bg-opacity-30 transition-all duration-150 ease-linear`}>

 <div  onClick={(e)=>e.stopPropagation()}  className={` w-[450px] h-auto absolute top-0 right-0  bg-white`}>   
 

  <div className="w-full mb-3 px-5 py-4 flex items-center gap-x-5 border-borderPrimary border-b-[1px] ">
<img onClick={()=>{setView(false);setViewSliderType({ doctor:false, hospital:false, appointment:false})}}  src={aroowIcon2.src} className="w-4 cursor-pointer "  alt="load..." />
<p className="text-base font-medium">Select Doctor</p>
  </div>


 {/* ------------------------------doctors change---------------- */}
 {viewSliderType.doctor && <div onClick={(e)=>e.stopPropagation()} className=" min-h-screen px-5 space-y-4 w-full "> 
  {[1,2,3].map((item,index)=><div key={index} style={{boxShadow: "0px 0px 4px 0px #00000040"}}  className="w-full px-3 py-2 flex justify-start items-center gap-3  rounded-[10px]">
  {/* ------doctor image------------ */}
  <input type="radio"  className="size-[25px]" />

    <img src={doctorImage2?.src} className="w-[60px] "  />
  <div className="w-full space-y-[2px]">
    <div className="w-full flex  justify-between items-center text-sm font-medium">
      <p className="text-[15px]">Dr. Subhash V. Gupta</p>
    </div>
  <p className="text-sm font-medium">MBBS. MD</p>
  <p className="text-[13px]">Surgical Oncologist | Advanced Laparoscopic Surgeon | Nodules | Stomach Disorders Specialist</p>
  </div>
</div>)}
  </div> }


{/* --------------------add appointment form------------------ */}
{viewSliderType.appointment && <div onClick={(e)=>e.stopPropagation()} className="w-full px-5 space-y-2">
  {/* ----patient name------ */}
<div >
  <label class="block text-sm font-medium mb-1">
  Patient Name<span class= " text-lg text-red-600">*</span>
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>
{/* --------last name------ */}
<div >
  <label class="block text-sm font-medium mb-1">
  Last Name<span class= " text-lg text-red-600">*</span>
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>

{/* -----------------middle name------------ */}
<div className="  " >
  <label class="block text-sm font-medium mb-1">
  Middle Name <span class= "  text-[#000000CC]">(Optional)</span>
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* --------mobile number------------- */}

{/* --------------email-------------- */}
<div className="  " >
  <label class="block text-sm font-medium mb-1">
  Email Address
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* ----------------age--------------------- */}
<div >
  <label class="block text-sm font-medium mb-1">
  Age<span class= " text-lg text-red-600">*</span>
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>

{/* ------------gender--------------- */}
<div>
  <label for="selection" className="block text-sm font-medium mb-1">
   Gender<span className="text-lg text-red-600">*</span>
  </label>  
  <select id="selection"    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" required>
    <option value="">Select</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>

{/* ---------------blood group--------------- */}
<div>
  <label for="selection" className="block text-sm font-medium mb-1">
  Blood Group
  </label>  
  <select id="selection"    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" required>
    <option value="">Select</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>

{/* --------------language-------------- */}
<div>
  <label for="selection" className="block text-sm font-medium mb-1">
  Primry Language
  </label>  
  <select id="selection"    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" required>
    <option value="">English (Practice Default)</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>

{/* ------------------address-------------------- */}
<div className="  " >
  <label class="block text-sm font-medium mb-1">
  Address of Patient
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* --------------------------pincode---------------- */}
<div >
  <label class="block text-sm font-medium mb-1">
  Pincode<span class= " text-lg text-red-600">*</span>
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
</div>

{/* --------------city-------------- */}
<div className="  " >
  <label class="block text-sm font-medium mb-1">
  City
  </label>
  <input
    type="text"
    class="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

{/* ---------------relationship-------------------- */}
<div >
  <label class="block text-sm font-medium mb-1">
  Your Relationship<span class= " text-lg text-red-600">*</span>
  </label>
  <select id="selection"    className="w-full h-[45px]  border-[1px] border-[#C4C4C4] rounded-md  px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" required>
    <option value="">Select</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>

<div className="w-full">
<button type="button" className="my-7 rounded-[10px] w-full bg-primary text-white font-medium p-3 "  >Submit</button>
</div>
</div>}




    </div>
</div>}











 {/* { view &&  <div className={`  max-w-[1600px] w-full left-1/2  absolute  top-0   mx-auto overflow-hidden  transform -translate-x-1/2  z-[100000] h-screen bg-gray-400 bg-opacity-30 transition-all duration-150 ease-linear`}>
    <button type="button" onClick={()=>setView(!view)} className="text-white px-6 py-3 bg-primary  "  >click me </button>
 <div className={` w-[400px] absolute top-0 right-0  h-full border-blue-800 border-2 bg-red-900`}>         xz    </div>
</div>} */}



{/* <div className={`  max-w-[1600px]  absolute  top-0   ${!view? "w-full left-1/2" :" -right-[200%] w-0"}  mx-auto overflow-hidden  transform -translate-x-1/2  z-[100000] h-screen bg-green-900 transition-all duration-150 ease-linear`}>
    <button type="button" onClick={()=>setView(!view)} className="text-white px-6 py-3 bg-primary  "  >click me </button>
 <div className={` w-[30%] absolute top-0 right-0  h-full border-blue-800 border-2 bg-red-900`}>         xz    </div>
</div> */}

    </>

  )
}
