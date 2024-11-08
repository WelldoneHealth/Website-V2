import React from 'react'
import doctorImage3 from "@/asset/Images/doctor3.png"



export default function Banner2() {

    const gradientStyle = {
        background: "linear-gradient(85.56deg, #01549A 1.13%, #2D93F0 31.15%, #7AB2ED 57.73%, #8AB8DF 99.56%)",
        boxShadow:" 0px 0px 4px 0px rgba(1, 84, 154, 0.25)"
      };

  return (
    <>
    {/* -----------flex-------------- */}
    <div style={gradientStyle} className="mt-8 lg:mt-20  w-[98%] lg:w-[96%] xl:w-[92%] h-[400px] md:h-[500px] max-lg:overflow-y-auto lg:h-auto max-w-[1400px]  max-lg:pt-5 max-lg:pb-12 lg:py-0    mx-auto  max-lg:px-5  lg:pl-12 xl:pl-16   rounded-[20px] flex flex-col lg:flex-row max-lg:items-start  text-white relative">
  <div className=" max-lg:order-2  lg:py-8  space-y-12 xl:space-y-16 relative z-20    ">
    <div className=" xl:space-y-2">
      <p className=" max-xl:hidden xl:text-[42px] 2xl:text-[45px] font-bold">Become a Welldone Health Practioner </p>
      <p className='xl:hidden text-base msm:text-[28px] font-bold msm:-mb-2'>Become a</p>
      <p className='max-lg:mb-3 xl:hidden text-[24px] asm:text-[28px] msm:text-[32px] sm:text-[40px]  md:text-[45px] font-bold leading-tight'>Welldone Health Practioner</p>
      <p className="  font-medium max-w-[600px] xl:max-w-[800px] text-wrap text-sm ssm:text-lg asm:text-xl">Build your practice with millions of patients every day on Welldone Health.</p>
    </div>
    <div className="space-y-5">
    <button  type="button" className=" tet-sm ssm:text-base msm:text-xl xl:text-2xl px-6 asm:px-8  py-2 rounded-[30px]  font-semibold  bg-white text-primary"   > Start getting patients </button>
      <p>It takes only 15 minutes to setup your account</p>
    </div>
  </div>
  <div className="max-lg:order-1 relative flex-1   max-w-[350px] xl:max-w-[420px] max-lg:mx-auto lg:ml-auto max-lg:border-b-[2px] max-lg:border-white ">
    <img src={doctorImage3?.src} className="w-full  lg:absolute bottom-0" alt="load..."  />
  </div>

</div>
    
    </>
  )
}
