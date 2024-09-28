import React from 'react'
import hospitalLogo from "@/asset/Icons/eachHospitalLogo.svg"
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import phoneCallIcon from "@/asset/Icons/phoneCall.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
import outlineClockIcon from "@/asset/Icons/outlineClock.svg";
import lunchBoxIcon from "@/asset/Icons/lunchBox.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import hospitalIcon from "@/asset/Icons/hospital_icon.svg";
import doctorBagV2Icon from "@/asset/Icons/doctorBagV2.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
import doctorImage2 from "@/asset/Images/doctorImage2.png";
import ratingIcon from "@/asset/Icons/rating.svg";
import calendarIcon from "@/asset/Icons/calendar.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import pinedIcon from "@/asset/Icons/pined.svg";
import callingIcon from "@/asset/Icons/calling.svg";
import  nursingHomeIcon from "@/asset/Icons/nursingHome.svg";
import  pathologyIcon from "@/asset/Icons/pathology.svg";
import  polyClinicIcon from "@/asset/Icons/polyClinic.svg";
import  singlePractionerIcon from "@/asset/Icons/singlePractioner.svg";
import  usgIcon from "@/asset/Icons/usg.svg";
import  xRayIcon from "@/asset/Icons/xRay.svg";
import  dayCareIcon from "@/asset/Icons/dayCare.svg";



import dragon from "@/asset/Images/dragon.jpg"
import doctorImageBig from "@/asset/Images/doctorImageBig.png";


export default function page() {

const servicesAvailable=[
{
    serviceText: "Single Practitioner",
    img:singlePractionerIcon
},{
    serviceText:  "Polyclinic ",
    img:polyClinicIcon
},{
    serviceText:  "Day Care Center ",
    img:dayCareIcon
},{
    serviceText:  " Nursing Home",
    img:nursingHomeIcon
},{
    serviceText: " X Ray",
    img:xRayIcon
},{
    serviceText: " Ultra Sound",
    img:usgIcon
},{
    serviceText: " Pathology",
    img:pathologyIcon
}
]
  return (
    <>
    <div className="w-full max-w-[1600px] mx-auto px-1  asm:px-3 lg:px-0 ">
<div className="w-full relative">
    <img src={dragon?.src} className=' h-[400px] w-full' alt="load..." />  
    <img style={{boxShadow: "0px 0px 4px 0px #00000040"}} src={hospitalLogo?.src} className=' size-[200px] absolute top-[300px] left-[110px]  ' alt="load..." />  
</div>
<div className="w-full min-h-screen flex gap-x-7 ">
    {/* -----------------1st part--------------------- */}
<div className="w-full py-1 lg:w-[68%]   ">

<div className="w-full mt-32 mb-2  flex justify-between items-center">
<h3 className= "  text-[#01549A] font-medium text-[26px] ">
Dr. B.D. Ahirrao Memorial Hospital, Sakri
              </h3>     
</div>
<p className=" my-3 text-lg flex ">
                    <img
                      src={hospitalOutlineIcon?.src}
                      className="w-5 mr-3"
                      alt="load..."
                    />
                 Dr. B.D.Ahirrao Memorial Hospital (Baba Ahirrao) Dhule Road, 424304.
                  </p>
<div className=" w-[90%]  flex justify-between items-center">
<div className="space-y-3">
<p className="space-y-3  font-normal text-lg flex items-end gap-x-5 ">
                  <span className=" relative w-[14px] h-[20px] inline-block">
                    <img className="w-full h-full" src={redGeoLocationIcon?.src} />
                  </span>
                  Pune, Maharashtra
                </p>
                <div className="bg-[#EFEFEF] rounded-[20px] px-5 py-[6px] flex items-center gap-x-2">
                    <div  className="flex gap-x-1">
{[1,2,3,4,5].map((item,index)=><img key={index} src={ratingIcon?.src} className='w-5' alt="load..."  />)}
                    </div>
                    <p>4.8 (234 Review)</p>
                    
                </div>
</div>
<img src={callingIcon?.src} className="" alt="load..."  />
</div>


{/* -----------------------safety precautions-------- */}
<div className="mt-16 w-full flex gap-x-2 bg-[#F4F4F4] rounded-[20px] px-5 py-3  ">
            <img src={pinedIcon?.src} className="w-10" alt="load..." />

            <div className="space-y-1">
              <p className="font-medium text-lg">Office Safety Precautions</p>
              <p className=" text-[#80858E] text-sm">
                {" "}
                Message from the Office of Dr. Rakesh Nandre
              </p>
              <p className="font-medium text-sm">
                We follow all CDC guidelines, including sterilization,
                protective equipment and maintaining social distancing of
                interest.
              </p>
            </div>
          </div>
{/* ------------2nd safety para------------ */}
<div className="my-7 w-full space-y-2 bg-[#F4F4F4] rounded-[20px] px-5 py-4 ">
<p className='text-[20px] font-medium'>Statement</p>
<div className='text-sm'>
    <p >Board certified dermatologist with over 10 years experience</p>
    <p >Knowledgeable, professional staff available. Most insurances accepted. Cosmetic menu of services include, fillers, cool sculpt, laser hair removal, varicose veins</p>
</div>
</div>
{/* -------------list of dicotrs in hospital-------- */}
<div className="my-12 w-full  ">
   <p className='text-[20px] px-4 font-medium '>Doctors at Dr. B.D. Ahirrao Memorial Hospital, Sakri (2)</p> 
   <div className="w-full px-2">
    {[1,2,3].map((item,index)=>   <div key={index}
            style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
            className="w-[96%] px-6 py-4 mx-auto my-8 border-[1px] border-gray-500 rounded-[20px] flex items-center gap-x-16 "
          >
            {/* -----------left part------ */}
            <div className=" flex gap-x-8">
              {/* ----------image----------- */}
              <div className="rounded-full w-40 flexCenter ">
                <img
                  src={doctorImageBig?.src}
                  className="w-full "
                  alt="load...."
                />
              </div>
              {/* ------details portion beside image---- */}
              <div className="flex flex-col gap-y-1">
                {/* -------------rating ------- */}
                <div className=" mt-5 ssm:mt-0  text-xs font-medium bg-[#F5F5F5]   px-2 asm:px-3 py-[5px]  rounded-[20px] flex items-center max-w-max ">
                  <img
                    src={ratingIcon?.src}
                    className="w-[14px] mr-2"
                    alt="load..."
                  />
                  4.8 (234 Review)
                </div>

                <p className="font-medium text-xl ssm:text-base asm:text-xl leading-tight text-center ssm:text-left">
                  Dr. Nilesh Bhamare
                </p>

                <p className="flex flex-wrap gap-y-2 justify-start  items-center ssm:flex-col asm:flex-row  gap-x-3 asm:gap-x-0 text-sm font-semibold ">
                  Gynecologist
                </p>

                <p className="text-sm mt-1 font-medium flex items-center ">
                  <img
                    src={smallHatIcon?.src}
                    className="h-[18px] mr-2"
                    alt="load..."
                  />
                  M.B.B.S., M.D
                </p>

                <p className="text-sm mt-1 font-medium flex items-center">
                  <img
                    src={doctorBagV2Icon?.src}
                    className="w-[18px] mr-2"
                    alt="load..."
                  />
                  7 + Years experience
                </p>

                <p className="text-sm mt-1 font-medium flex items-center">
                  <img
                    src={hospitalIcon?.src}
                    className="w-[18px] mr-2"
                    alt="load..."
                  />
                  Bhamare Hospital
                </p>

                <p className="text-sm font-medium flex items-center">
                  <img
                    src={redGeoLocationIcon?.src}
                    className="w-[12px] mr-2"
                    alt="load..."
                  />
                  Kolkata, West Bangal
                </p>
              </div>
            </div>
            {/* ------------------right part------ */}
            <div className=" flexCenter  flex-col gap-y-2">
              <p className="text-[#01A400] font-medium text-xs">
                {" "}
                Available now book in Seconds
              </p>
              <button
                type="button"
                className="w-[190px] cursor-pointer py-[6px] flex items-center justify-center bg-[#01549A] text-base text-white font-medium rounded-[20px] "
              >
                Book Appointment
              </button>
              <button
                type="button"
                className="w-[190px] cursor-pointer  py-[6px] flex items-center justify-center font-medium bg-[#EFF8FF] text-base rounded-[20px]"
              >
                <img
                  src={redGeoLocationIcon?.src}
                  className="w-[12px] mr-2"
                  alt="load..."
                />{" "}
                View in map
              </button>
            </div>
          </div>)}

   </div>
</div>

              {/*--------------map part----------------  */}
<div className="my-12">
    <p className='text-[20px] px-4 font-medium'>Hospital branches and Location​</p>

    <div className="mt-7 mb-2 flex flex-col">
{/* ---------------timings---------- */}
<div className="w-full p-3  ">
        <p className="font-medium text-lg"> Timings</p>
        <div className="my-4 flex gap-x-3 overflow-x-auto whitespace-nowrap custom-scrollbar-hide">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className="border-[1px] border-[#CFCFCF] rounded-[10px] overflow-hidden flex-shrink-0">
              <p className=" w-full text-sm bg-[#EFF8FF] py-1 font-medium text-center">
                Monday
              </p>
              <div className="w-full p-2 space-y-1">
                <div className="flex gap-x-2 text-xs font-normal">
                  <img
                    src={outlineClockIcon?.src}
                    className=" w-[14px]"
                    alt="load..."
                  />
                  09:00 AM - 08:00 PM
                </div>
                <div className="flex gap-x-2 text-xs font-normal">
                  <img
                    src={lunchBoxIcon?.src}
                    className="w-[12px] "
                    alt="load..."
                  />
                  09:00 AM - 08:00 PM
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
{/* ------------maps---------------- */}
<div className="w-full my-2 h-[400px] relative rounded-[20px] overflow-hidden">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13900.252752700126!2d79.95980878916262!3d29.42694955218887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0dd9bfc5bd7ed%3A0x516f7f48dcd10c4a!2sSundungra%2C%20Uttarakhand%20262528!5e0!3m2!1sen!2sin!4v1726923728002!5m2!1sen!2sin"
//   width="600"
//   height="450"
className="w-full h-full"
style={{ border: 0 }}

//   loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
{/* -------list of doctors on map--------- */}
<div className="w-full absolute bottom-0 z-40 flexCenter gap-x-3 whitespace-nowrap overflow-x-auto ">
  {[1,2,3,45].map((item,index)=><div key={index}   style={{ boxShadow: "0px 0px 4px 1px #00000040" }}  className="w-[42%] max-w-[270px] p-3 bg-[#FFFFFF] text-black rounded-[20px] flex flex-col items-start  gap-y-[2px] flex-shrink-0">
  <img src={doctorImage2?.src} className="w-20 rounded-full" alt="load..." />
  <p className="font-medium text-sm">Dr. Nilesh Bhamare</p>
  <p className="text-xs text-[#646464]" >MBBS</p>
  <p className="text-xs text-[#646464]">Ophthalmic Doctor</p>
  <p className="text-xs text-[#646464]">Shivaji Nagar, pune​</p>
</div>)} 


</div>
</div>

</div>

</div>


{/* -----------------services available---------- */}
<div  className="my-12 w-full  rounded-[20px]  px-4 py-5 space-y-5">
    <p className='text-[20px]  font-medium '>Convenience services available​</p>
 <div className="w-full flex gap-x-4 items-center flex-wrap gap-y-5">
 {servicesAvailable.map((item,index)=><div key={index} style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="py-[10px] px-4  flex justify-center items-center gap-x-2 rounded-[10px]  text-sm "> 
    <img src={item.img?.src} className='w-4' alt="load..."  />
   {item.serviceText}
    </div>)} 
 </div>
</div>

{/* --------------------other services------------- */}
<div  className="my-12 w-full  rounded-[20px]  px-4 py-5 space-y-5">
    <p className='text-[20px]  font-medium '>Convenience services available​</p>
 <div className="w-full flex gap-x-4 gap-y-5 items-center flex-wrap">
 {[
  "24/7 Emergency & Critical care",
  "ICU/NICU",
  "State of Art Modeler OTs",
  "Digital x-ray",
  "24/7 Pharmacy",
  "Psychotherapy & counseling",
  "2D ECHO",
  "ECG & PFT",
  "Pathology Laboratory",
  "Children And Adolescent Mental Health"
].map((item,index)=><div key={index} style={{boxShadow: "0px 0px 4px 0px #00000040"}} className="py-[10px] px-4  flex justify-center items-center rounded-[20px]  text-sm ">
   {item}
    </div>)} 
 </div>
</div>



</div>


{/* ------------------2nd appointement part---------- */}
<div styele={{boxShadow: "0px 0px 4px 0px #00000040"}} className="my-7 flex-1   lg:w-[90%] ">
<div className="w-full  border-2 boreder-black rounded-[20px] pt-4 pb-0 overflow-hidden ">

<p className="text-lg font-medium  text-center">Book Your Appointment </p>
<hr className="my-3" />

<div className="px-2 sm:px-4 ">

    <div className="space-y-3 ">
  <p className="font-medium  ">Appointments details </p>
  <div className="px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start">
    <div className="">
    All specialties
    </div>
    <button type="button"  className=''></button>
  </div>

  <div className= "px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start ">
    <div className="">
    Select reason
    </div>
    <button type="button"  className=''></button>
  </div>
    </div>
 

    <div className="mt-5 mb-16 space-y-3 ">
  <p className="font-medium  ">Appointments appointments </p>
  <div className="px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start">
    <div className="">
<p className='font-medium '>Dr. B.D. Ahirrao Memorial Hospital, Sakri</p>
<p className='text-sm text-[#333333]'>Dr. B.D.Ahirrao Memorial Hospital (Baba Ahirrao) Dhule Road, 424304.</p>
    </div>
    <button type="button"  className='w-[50px]'></button>
  </div>


  <div className= "px-4 py-2 w-full rounded-[10px] border-[1px] border-[#B0B0B0] flex justify-between items-start ">
    <div className="">
    All doctor availability
    </div>
    <button type="button"  className=''></button>
  </div>


    </div>




<div className="mt-5 py-3  w-full border-t-[1px] border-[#919196] space-y-2">
<button type="button" className="w-[95%] py-3 text-center bg-[#01549A] text-white font-semibold rounded-[10px] text-[20px]">Appointment Booking</button>
<p className="text-xs text-center font-normal">No charges for appointment booking.</p>
</div>

</div>




          </div>
</div>
</div>


    </div>    
    </>
  )
}
