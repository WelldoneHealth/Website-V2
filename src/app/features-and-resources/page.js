import React from 'react'
import authentication from "@/asset/Icons/authentication.svg";
import backup from "@/asset/Icons/backup.svg";
import ipIcon from "@/asset/Icons/ip.svg";
import sslIcon from "@/asset/Icons/ssl.svg";
import webService from "@/asset/Icons/webService.svg";
import pediatric2 from "@/asset/Icons/pediatric2.svg";
import  gas  from "@/asset/Icons/gas.svg";
import  uro  from "@/asset/Icons/uro.svg";
import  dentist2  from "@/asset/Icons/dentist2.svg";
import  lungs2  from "@/asset/Icons/lungs2.svg";
import  neurology  from "@/asset/Icons/neurology.svg";
import  generalMedicine  from "@/asset/Icons/generalMedicine.svg";
import  otolary  from "@/asset/Icons/otolary.svg";
import   hiv from "@/asset/Icons/hiv.svg";
import  allergy  from "@/asset/Icons/allergy.svg";
import infectious   from "@/asset/Icons/infectious.svg";
import  dermatology2  from "@/asset/Icons/dermatology2.svg";
import arrow4 from "@/asset/Icons/arrow4.svg";
import frontArrow from "@/asset/Icons/frontArrow.svg";
import player from "@/asset/Icons/player.svg";


import doctor7 from "@/asset/Images/doctor7.png"


import body from "@/asset/Images/body.png"
import Banner2 from '@/components/Banner2';
import InfoDetails from '@/components/InfoDetails';



export default function page() {

  const data1=[
    {
      image:sslIcon ,
      text: "256-bit End-to-end encryption "
    },
    {
      image:webService ,
      text: " HIPAA Compliant data center"
    },
    {
      image: backup,
      text: " Automated Multiple backups"
    },
    {
      image:authentication ,
      text: "2 factor authentication "
    },
    {
      image:ipIcon ,
      text: "IP whitelisting "
    },    

  ]



  const speacilaityData=[
    {
      image : dermatology2,
      text: "Dermatology "
    }, {
      image : lungs2,
      text: " Internal Medicine"
    },  {
      image : neurology,
      text: " Neurology"
    }, {
      image : generalMedicine,
      text: " General Medicine"
    }, {
      image : dentist2,
      text: "Dentisty "
    }, {
      image : otolary,
      text: " Otolaryngology"
    }, {
      image : hiv,
      text: " HIV/AIDS"
    }, {
      image : uro,
      text: "Urology "
    }, {
      image : allergy,
      text: " Allergy"
    }, {
      image : pediatric2,
      text: " Paediatrics"
    }, {
      image : gas,
      text: " Gastroenterology"
    }, {
      image : infectious,
      text: "Infectous Disease "
    }
  ] 

  return (
    <div className="w-full  relative  max-w-[1600px] mx-auto space-y-8 md:space-y-14    pt-[1px]  ">


{/* ------------------main header---------------- */}
<div style={{ background: "linear-gradient(180deg, #4CA9F6 0%, #E2F2FF 100%)" }} className="mt-4 mx-auto w-full xl:w-[98%]  pt-5 lg:pt-10  lg:rounded-3xl flex flex-col md:flex-row  md:justify-between items-center md:items-end">
<div className="space-y-10 sm:space-y-16 max-md:order-2 lsm:space-y-20   max-md:px-5 md:pl-10 lg:pl-[70px] xl:pl-24 pt-2  md:pt-5 lsm:pt-10 xl:pt-16 pb-6 sm:pb-10  flex flex-col justify-center  w-full   md:w-1/2 xl:w-auto h-full">
<div className="text-white space-y-5 md:space-y-8">
  <p className='text-[32px] asm:text-[36px] sm:text-[38px] lsm:text-[42px] xl:text-[50px]  font-bold   leading-[30px] xl:max-w-[720px]  asm:leading-[38px] md:leading-[47px] max-md:text-center'>We take care of the most valuable</p>
  <p className=' max-w-[550px] xl:max-w-[560px] max-md:mx-auto md:max-w-[380px] leading-snug max-asm:text-sm xl:text-xl max-md:text-center'>Our medical professionals are dedicated to providing you with personalized attention</p>
</div>
<div className="mt-auto flex max-asm:text-sm  max-md:justify-start items-center gap-x-3 text-primary font-medium">
  <img src={player?.src} className='max-asm:w-[25px]' alt="load..."  /> Watch Video About Us
</div> 

</div>


<div className=" max-md:order-1   w-[85%] md:w-[56%]  lsm:w-auto flex items-end  border-b-[1px] border-white">
  <img src={doctor7?.src} className='   w-full  lsm:w-[530px] xl:w-auto' alt="load..."  />
</div>



</div>




{/* --------------------other parts------------------ */}
<div className="w-full space-y-16 ">


{/* --------------uptoo the video portion------------ */}
<div className="w-full space-y-16 px-1   asm:px-3 lg:px-[2rem]">

<div className="w-full "><InfoDetails /></div>



{/* -----------------section 1------------------ */}
<div className="w-full xl:w-[90%]    mx-auto px-4  sm:px-6 xl:px-10 py-4 sm:py-5  border-[1px] border-[#DADADA] rounded-3xl ">
<p className='text-primary text-center text-[21px] sm:text-[30px] md:text-[34px] lg:text-[36px] font-bold leading-tight' >Your Data, Secure and Private.</p>
<p className='mt-4 mb-8 text-center text-sm msm:text-base xl:text-[20px] leading-snug'>With <span className='font-medium' >Welldone Health,</span> your privacy comes first. You control what to share, backed by the latest encryption and full compliance with the <span className='font-medium' >NDHM Act 2018.</span> Your health data is always in safe hands.</p>
    
<div className="flex max-lg:justify-center max-lg:flex-wrap  mb-5 gap-4 sm:gap-6">
  {data1.map((item,index)=> <div key={index} className=' w-[90%] ssm:w-[145px] sm:w-[162px] lg:flex-1  py-3 px-4 xl:px-6 border-[1px] border-[#DADADA] rounded-3xl space-y-1' > 
    <img src={item?.image?.src} className='block mx-auto' alt="load..."  />
    <p className='text-center text-sm md:text-base leading-tight'>{item.text}</p>
     </div> )}
</div>

</div>





{/* ------------------------------section 2------------------------ */}
<div className="w-full xl:w-[90%]    mx-auto px-4  sm:px-6 xl:px-10 py-4 sm:py-5  border-[1px] border-[#DADADA] rounded-3xl ">

<p className='text-primary  text-[21px] sm:text-[30px] md:text-[34px] xl:text-[36px] font-bold leading-tight' >Serve your specialty with ease and efficiency.</p>
<p className='mt-4 mb-8 text-sm msm:text-base xl:text-[20px] leading-snug' >Elevate your practice with our EMR software, designed to cater to the unique needs of every specialty. Enjoy a user-friendly interface that streamlines workflows, enhances patient interactions, and boosts overall efficiency. Focus on what you do best—delivering exceptional care!</p>

<div className="w-full mb-5 flex flex-wrap items-center justify-center gap-4 asm:gap-7">

{speacilaityData.map((item,index)=> <div key={index} style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }} className='min-w-[95px] w-[46%] asm:w-[115px] sm:w-[120px] lg:w-[16%] px-1 lg:px-4 py-3 border-[1px] border-[#DADADA] rounded-3xl flex flex-col items-center space-y-2' > 
  <div className="bg-secondary size-[50px] ssm:size-[60px] flexCenter max-lg:flex-wrap rounded-full">
    <img src={item?.image?.src} className='max-ssm:w-[35px]' alt="load..."  />
  </div>
  <p className='font-medium text-[10px] ssm:text-xs xl:text-base'>{item?.text}</p>
    </div>)}

</div>


<button type="button"  className='my-6 max-sm:text-sm md:text-lg px-6 sm:px-10 mx-auto py-2  flex items-center gap-x-3 rounded-[30px]  font-semibold  bg-primary text-white'  > See More  <img src={arrow4?.src} className=''  alt="load..."  />  </button>

</div> 




{/* ---------------------section3----------------------- */}
<div className="w-full xl:w-[90%]    mx-auto px-4  sm:px-6 xl:px-10  py-3  border-[1px] border-[#DADADA] rounded-3xl">

<div className="w-full flex flex-col xl:flex-row items-center justify-between ">
  <p className='text-primary  text-[21px] sm:text-[30px] md:text-[34px] xl:text-[36px] font-bold leading-tight '>3D Human Anatomy: Elevate Patient Care</p>
  <button type="button"  className='  my-6 text-lg px-10  py-2 hidden   xl:flex items-center gap-x-3 rounded-[30px] border-[2px] border-primary font-semibold  bg-white text-primary'  > Anatomy Explorer <img src={frontArrow?.src} className='mt-[3px]'  alt="load..."  />  </button>
</div>

<p className='mt-2 mb-8 text-sm msm:text-base xl:text-[20px] leading-snug '>Our EMR software's 3D Human Anatomy feature provides an interactive, detailed view of the human body, allowing for more accurate diagnoses and improved patient understanding. Its user-friendly interface simplifies complex explanations, enhancing communication and trust.</p>

<div className="rounded-3xl overflow-hidden">
  <img src={body?.src} className='' alt="load..."   /> 
</div>

<button type="button"  className='xl:hidden my-6  text-sm asm:text-base lg:text-lg px-3 asm:px-6 lg:px-10  py-2  flex items-center  gap-x-1 asm:gap-x-3 rounded-[30px] border-[2px] border-primary font-semibold  bg-white text-primary'  > Anatomy Explorer <img src={frontArrow?.src} className='mt-[3px]'  alt="load..."  />  </button>


</div>




</div>

{/* ------------------------section4------------------- */}
<div className="w-full ">
<video src="/videoFiles/whatsappVideo.mp4"  autoPlay muted loop className="w-full " />
</div>




{/* ----------------after the video portion---------------- */}
<div className="w-full  sm:pt-12  lg:pt-28 xl:pt-48 space-y-16 px-1   asm:px-3 lg:px-[2rem]  ">
<Banner2 />
</div>

</div>

    </div>

  )
}
