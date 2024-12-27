import React from 'react'

export default function DoctorCardSkeleton({isCenter}) {
  return (
    <div class={`w-full ${isCenter && "mx-auto"} max-w-[800px]  xl:max-w-[900px]  px-3 asm:px-5 py-3 asm:py-5 border rounded-[20px] shadow-lg bg-white flex  items-center`}>
   
   
    <div class="w-full flex items-center gap-x-5  ">
   
      <div class="size-20 ssm:size-24  asm:size-28 msm:size-32 sm:size-40  bg-gray-200 rounded-full skeleton "></div>
     
 
    <div class="w-full flex-1 max-w-[450px] text-left space-y-3 asm:space-y-5">
      <div class="h-4 w-3/5 bg-gray-200 rounded skeleton "></div> 
      <div class="h-3 w-1/3 bg-gray-200 rounded skeleton "></div> 
      <div class="h-3 w-2/5 bg-gray-200 rounded skeleton  "></div> 
 
    </div>

    </div>
    
    {/* <div class="mt-6 w-[200px] flex justify-center ">
      <div class="h-10 w-full bg-gray-500 rounded-full "></div>  
    </div> */}
  </div>
  
  )
}
