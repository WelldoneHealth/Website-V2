import React from 'react'

export default function InfoDetails() {
  return (
    <>
    
    {/* ------------flex------------------- */}
    <div style={{ boxShadow: '0px 4px 4px 0px #00000040' }} className="w-full max-w-[1500px] px-4 asm:px-6 lg:px-8 py-3 sm:py-4 rounded-[20px] border-[1px] border-[#DADADA] flex flex-col items-center gap-y-4 ">

   <div className="w-full flex  justify-between items-center">

   <div className="">
      <p className="text-primary text-lg asm:text-[20px] lg:text-[30px] leading-tight text-center font-bold">14 Lakh+</p>
      <p className='text-center max-asm:text-sm 2xl:text-lg '>Doctors community</p>
    </div>
    <div className="h-[40px] border-[1px] border-[#B5D2FD] "></div>
    
    <div className="">
      <p className="text-primary text-lg asm:text-[20px] lg:text-[30px] leading-tight text-center  font-bold">12M+</p>
      <p className='text-center max-asm:text-sm 2xl:text-lg'>Happy Patients</p>
    </div>
    <div className="h-[40px] hidden sm:block  border-[1px] border-[#B5D2FD] "></div>
    
    <div className="max-sm:hidden">
      <p className="text-primary text-lg asm:text-[20px] lg:text-[30px] leading-tight text-center font-bold">25M+</p>
      <p className=' max-asm:text-sm 2xl:text-lg'>Digital Prescriptions</p>
    </div>
    <div className="h-[40px] hidden md:block border-[1px] border-[#B5D2FD] "></div>
    
    <div className="hidden md:block">
      <p className="text-primary text-lg asm:text-[20px] lg:text-[30px] leading-tight text-center  font-bold">24x7</p>
      <p className='text-center max-asm:text-sm 2xl:text-lg'>Real time OPD</p>
    </div>
    <div className="h-[40px] hidden md:block border-[1px] border-[#B5D2FD] "></div>
    
    <div className="hidden md:block">
      <p className="text-primary text-[20px] lg:text-[30px] leading-tight text-center font-bold">19000+</p>
      <p className='text-center max-asm:text-sm 2xl:text-lg' >Specialties</p>      
    </div>
   </div>


   <div className="sm:hidden">
      <p className="text-primary text-lg asm:text-[20px] lg:text-[30px] leading-tight text-center font-bold">25M+</p>
      <p className='text-center max-asm:text-sm'>Digital Prescriptions</p>
    </div>


    <div className="w-full max-md:flex hidden justify-between  sm:justify-center  sm:gap-x-12">
    <div className=" ">
      <p className="text-primary text-lg asm:text-[20px] lg:text-[30px] leading-tight text-center  font-bold">24x7</p>
      <p className='text-center max-asm:text-sm'>Real time OPD</p>
    </div>
    <div className="h-[40px] border-[1px] border-[#B5D2FD] "></div>
    
    <div className=" max-ssm:w-[33%]">
      <p className="text-primary text-lg asm:text-[20px] lg:text-[30px] leading-tight text-center font-bold">19000+</p>
      <p className='text-center max-asm:text-sm'>Specialties</p>
    </div>
    </div>
    
    

{/* {[1,2,3,4,5].map((item,index)=> <div key={index} className="">
      <p className="text-primary text-[22px] lg:text-[30px] leading-tight text-center font-bold">19000+</p>
      <p>Digital Prescriptions</p>
    </div>)} */}


    </div>
    
    </>
  )
}
