import React from 'react'

export default function AppointmentCardSkeleton() {
  return (
    <div style={{ boxShadow: " 1px 1px 4px 2px #8383834D" }} class=" w-[95%] md:w-full  max-w-[950px] mx-auto px-3 msm:px-5  pt-[-6px]  sm:py-1 bg-white lsm:py-5 border rounded-[15px] shadow-lg  space-y-4">


<div className=" w-full max-lsm:hidden  flex gap-x-24 ">

   <div className="space-y-3">
   { ["150px","180px","200px"].map((item,index)=> <div key={index}  style={{ width: item }} class={`h-4  bg-gray-700 rounded skeleton `}></div>)}
   </div>

   <div className="space-y-3">
   { ["220px","190px","200px"].map((item,index)=> <div key={index}  style={{ width: item }} class={`h-4  bg-gray-700 rounded skeleton `}></div>)}
   </div>

</div>


  <div className=" lsm:border pb-3 rounded-[15px]   lsm:p-5">
  
<div class="h-6 asm:h-8  w-full bg-gray-700  rounded skeleton "></div>
  
    <div class="w-full mt-2 asm:mt-4  flex items-start gap-x-4  sm:gap-x-7 lsm:gap-x-10  ">

      <div class="max-msm:size-[90px]   msm:w-[120px] sm:w-[180px] md:w-[205px] aspect-[1/1] bg-gray-700 rounded-full skeleton "></div>
  {/* ---------   -------------- */}
      <div class="flex-1 py-2 space-y-3 sm:space-y-4">
        <div class="h-3 asm:h-5 w-2/4 bg-gray-700 rounded skeleton "></div>
        <div class=" h-3 asm:h-4 w-1/5 bg-gray-700 rounded skeleton "></div> 
        <div class=" h-3 asm:h-4 w-2/5 bg-gray-700 rounded skeleton "></div>
      </div>

    </div>

    </div>  
   
  </div>
  
  )
}
