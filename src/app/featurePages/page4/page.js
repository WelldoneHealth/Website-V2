// "use client"

import React from 'react'
// import receptionist from "@/asset/Icons/receptionist.svg";
import page4Image1 from "@/asset/Icons/page4Image1.svg";
// import language2 from "@/asset/Icons/language2.svg";
import dashboard6 from "@/asset/Icons/dashboard6.svg";
import prescription4 from "@/asset/Icons/prescription4.svg";
import prescription5 from "@/asset/Icons/prescription5.svg";
import prescription6 from "@/asset/Icons/prescription6.svg";

import receptionist from "@/asset/Images/receptionist.png"
import language2 from "@/asset/Images/language2.png"
import w1 from "@/asset/Images/w1.png"

import Banner2 from '@/components/Banner2';

// import dashboard6Video from '@/asset/Video/dashboard6Video.mp4';
// import video1 from "@/asset/VideoFiles/video1.mp4"
  
 

export default function page() {
    // console.log("the video is",dashboard6Video)

const newFeaturesData=[
    {
        video:"/videoFiles/receptionistVideo.mp4" ,
        heading: "  Real time appointment booking smart Receptionist Module" ,
        subText: " Simplify your clinic or hospital's front desk with our Receptionist Module—fast, user-friendly, and designed for smooth appointment booking, patient check-ins, and billing. Empower your reception team to work effortlessly while improving patient experience!"
    },
    {
        video: "/videoFiles/rxVideo.mp4",
        heading: " Smart & Fast Rx in 30 seconds with Print & send Rx " ,
        subText: "Create prescriptions in just **30 seconds** with our EMR software—fast, user-friendly, and designed for doctors in clinics and hospitals. Streamline the entire process with a few clicks, saving time and improving patient care. Focus more on treating patients, not paperwork! "
    },
    {
        video:"/videoFiles/languageVideo.mp4" ,
        heading: "No state boundaries with Multi-languages Rx  " ,
        subText: " Break language barriers with our EMR software, supporting **13+ languages & Print Rx** for seamless use across clinics and hospitals. No state boundaries—easily create and print prescriptions in multiple languages. Enhance communication and provide better care, no matter where you are!"
    },
    {
        video:"/videoFiles/video1.mp4" ,
        heading: " Smart Dashboard for Reports & Analytics " ,
        subText: "Experience unparalleled efficiency with our EMR software's Smart Dashboard, providing instant access to insightful reports and analytics. Designed for ease of use, it empowers clinics and hospitals to visualize key data effortlessly. Make data-driven decisions and enhance patient care with a user-friendly interface! "
    },
]

const SmallBox =({image,heading,subText})=>(
    <div className='  asm:min-w-[120px] w-[96%] ssm:w-[90%] asm:w-[70%] msm:w-[40%] sm:w-[50%] max-w-[350px]  msm:max-w-[400px]   overflow-hidden   space-y-2' >
<img src={image?.src} className='block mx-auto w-[55px] sm:w-[65px] lsm:w-auto' alt="load..."  />
<p className=' text-xl   msm:text-sm sm:text-base lsm:text-xl xl:text-2xl  text-wrap sm:text-nowrap text-primary font-medium text-center leading-tight'>{heading}</p>
<p className='leading-tight text-center  text:sm msm:text-[11px]   sm:text-sm lsm:text-base max-msm:leading-tight'>{subText}</p>
    </div>
)     

  return (
    <div className="w-full relative  max-w-[1600px] mx-auto space-y-16 sm:space-y-10   mt-20  pt-[1px]   lg:px-0">



{/* -----------------------main banner header-------------------- */}
<div className="w-full flex  overflow-hidden">


<div className=" w-full flex justify-center overflow-hidden ">

<img src={w1?.src} className='max-asm:w-[600px] block mx-auto' alt="load..."  />

</div>



</div>




<div className="w-full space-y-16 px-1   asm:px-3 lg:px-[2rem]">


{/* -----------------1st part------------flex------ */}
<div className="w-full px-2 sm:px-6 py-2 md:py-4 border-[1px] border-[#DADADA] rounded-3xl flex  flex-col lg:flex-row justify-between items-center gap-y-2">
    <p className=' text-sm asm:text-base sm:text-lg lg:text-xl  xl:text-2xl font-bold text-nowrap '>Doctors Practice Guide Steps</p>
    <div className="flex items-center max-lg:justify-center flex-wrap  gap-3 ">
        {[["Reception","#F1F9FE"],["Consult","#F2F6E1"],["Multi-languages","#FDF4D8"],["Dashboard","#FAEBF5"]].map((item,index)=><div key={index} style={{ backgroundColor: item[1] }} className={`px-6 py-2 text-xs  asm:text-sm md:text-base lg:text-lg xl:text-[20px]  font-medium rounded-[10px] `}> 
           {item[0]}
        </div>)}
    </div>
  </div>
    



{/* ---------2nd part--------------- */}
{newFeaturesData.map((item,index)=><div key={index} className='w-full   xl:w-[90%]   mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-5 md:py-9  border-[1px] border-[#DADADA] rounded-3xl' >
    <p className='text-[22px] asm:text-[25px] sm:text-3xl md:text-[36px] font-medium leading-snug'>{item?.heading}</p>
    <p className='mt-3 md:mt-5 mb-6 md:mb-8 text-sm asm:text-base sm:text-lg leading-snug'>{item.subText}</p>
    <div className="w-full py-3 md:border-[1px]  border-[#DADADA] rounded-3xl">
<video src={item?.video}  autoPlay muted loop className="w-full border-none h-auto  rounded-2xl" />

    </div>
     </div>)} 

 
{/* --------------------3rd part------------------- */}
<div className="  w-full xl:w-[95%] px-3  md:px-6  lg:px-14 pt-3 sm:pt-6 pb-10 mx-auto  border-[1px] border-[#DADADA] rounded-3xl  space-y-8  ">
    <p className='font-bold   text-[22px]  asm:text-[24px] msm:text-[28px]  md:text-[36px] text-center leading-tight'>Working with <span className='text-primary'>Welldone Health is simple and seamless</span></p>


<div className="w-full flex flex-col msm:flex-row max-msm:items-center  justify-center sm:justify-between gap-y-3  gap-x-2 md:gap-x-5">

<SmallBox image={prescription4} heading="Add Patients" subText="Easily add patient details via the reception module or directly from the EMR." /> 
<div className="flex items-center overflow-hidden">
<p className='font-medium text-nowrap max-msm:rotate-90 '>------------------  </p>
</div>
<SmallBox image={prescription5} heading="Generate Prescriptions" subText="Consult and create a prescription in just seconds." /> 
<div className="flex items-center  overflow-hidden  ">
<p className='font-medium text-nowrap max-msm:rotate-90 '>------------------</p>
</div>
<SmallBox image={prescription6} heading="Share Rx" subText="Patients can access their e-Rx on the Welldone Health app or web portal." /> 

</div>


<div className="max-msm:pt-8 w-full flexCenter">
<button type="button"  className='text-[15px]  sm:text-lg px-6 md:px-10  py-2 rounded-[30px]  font-semibold  bg-primary text-white'  >Start getting patients</button>
</div>
</div>



{/* ------------------------4th part---------------------- */}
<div className="w-full sm:pt-10 lg:pt-24 xl:pt-40 ">
<Banner2 />
</div>


</div>



        
    </div>
  )
}
