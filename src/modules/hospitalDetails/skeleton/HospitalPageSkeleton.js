import React from 'react'
import DoctorCardSkeleton from '@/modules/searchListing/skeleton/DoctorCardSkeleton'

export default function HospitalPageSkeleton() {
  return (
   <div className="w-full ">

{/* ---------------banner skeleton----------- */}
<div class="w-full mx-auto  border-none   relative">
  
  <div class="w-full h-[400px] bg-gray-200 rounded-t-lg skeleton"></div> 

  <div  class="size-[170px] md:size-[200px]  max-sm:left-1/2 max-sm:-translate-x-1/2  absolute top-[300px]   sm:left-[110px] bg-gray-300 rounded-lg skeleton"></div> 

  <div class=" mt-32 sm:mt-36 mb-2 space-y-4 text-left ">
    <div class="h-6 w-3/5 max-w-[550px] bg-gray-200 rounded skeleton "></div> 
    <div class="h-6 w-2/5 max-w-[350px] bg-gray-200 rounded skeleton "></div> 
  </div>

</div>

<div className="w-full lg:w-[68%] ">

{/* --------------------doctor list---------- */}
<div className="px-1 my-10 mt-16 space-y-12">
<div class="h-6 w-2/5 max-w-[300px] bg-gray-200 rounded skeleton"></div> 
<DoctorCardSkeleton isCenter={true} />
</div>

<Timing />

<div class="h-[90px] my-12 p-2 w-full flex flex-col items-center justify-center rounded-lg space-y-4">
  <div class="h-5 w-1/3 bg-gray-200 rounded mb-2 skeleton"></div>
  <div class="h-5 w-1/2 bg-gray-200 rounded skeleton"></div>
  <div class="h-5 w-1/3 bg-gray-200 rounded mb-2 skeleton"></div>
</div>

</div>

   </div>
  )
}


const Timing=()=>( <div class="space-y-10 my-16  ">
    <div class=" my-5 h-5 w-1/4 bg-gray-200 rounded skeleton"></div>
    <div class="my-4 flex gap-x-3 overflow-hidden">
      <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
      <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
      <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
      <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
      <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
      <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
   
    </div>
  </div> )