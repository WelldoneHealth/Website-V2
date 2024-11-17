import React from 'react'
import dragonEye from "@/asset/Images/dragonEye.jpg"
import smallImage from "@/asset/Images/smallImage.png"
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";

export default function SuccessStorySlider() {
  return (
    <div className="w-full px-2 asm:px-2 lg:px-8   rounded-3xl space-y-4">
    <p className=' text-[28px] md:text-[34px] font-bold text-primary leading-tight'>Doctors <span className='text-black'>Success Stories</span></p>
    <div className="w-full px-2 asm:px-6 lg:px-10 py-6 bg-secondary rounded-3xl flex flex-col max-asm:items-center sm:flex-row gap-y-3  gap-x-6">
      <div className="size-[140px] md:size-[160px] rounded-full  overflow-hidden bg-primary">
        <img src={smallImage?.src} className="w-full  h-full object-cover" alt="load..."  />
      </div>
      <div className="space-y-2   flex-1 flex flex-col justify-center">
        <p className='text-lg md:text-2xl font-semibold leading-tight'>Dr. Priya Sharma (General Physician)</p>
        <p className='w-full lg:w-[96%] text-sm sm:text-base lg:text-lg leading-tight'>After joining WelldoneHealth, Dr. Priya streamlined her clinic’s patient management. With automated appointment scheduling and an organized OPD system, she reduced waiting times by 30% and increased patient satisfaction.</p>
      </div>
 
    </div>
    <div className="my-10 w-full  flex justify-center items-center  space-x-8">
    <button   style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white  -rotate-180 "><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
    <button   style={{boxShadow: "0px 0px 4px 2px #00000040" }} type="button" className="flexCenter rounded-full w-11 h-11 bg-white"><img src={sliderArrowIcon?.src} className=''  alt="load..." /></button>
    </div>
    </div>

  )
}
