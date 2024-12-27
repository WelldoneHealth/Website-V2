import React from 'react'

export default function DoctorCardSliderSkeleton() {
  return (
    
   <div className="w-full md:px-4 flex justify-center items-center gap-x-9   ">


<div className="w-full  ">
<SkeletonCard />
</div>

<div className="w-full  max-md:hidden ">
<SkeletonCard />
</div>
  

<div className="w-full  max-lg:hidden ">
<SkeletonCard />
</div>
  




   </div>
  
  )
}



const SkeletonCard=()=>(<div class="w-[90%] sm:w-[95%] md:w-full  max-w-[730px] mx-auto  px-11 py-5 border rounded-xl shadow-lg bg-white   ">  
    <div class="flex justify-center mt-3 mb-7">
      <div class="w-32 h-32 bg-gray-200 rounded-full skeleton"></div>
    </div>
    <div class=" w-full mx-auto max-w-[450px]  text-center space-y-4">
      <div class="h-5 w-4/5  bg-gray-200 rounded mx-auto skeleton"></div>
      <div class="h-4 w-1/3 bg-gray-200 rounded mx-auto skeleton"></div>
      <div class="h-4 w-3/4 bg-gray-200 rounded mx-auto skeleton"></div>
      <div class="h-4 w-1/2 bg-gray-200 rounded mx-auto skeleton"></div>
    </div>   
    <div class="mt-6 flex justify-center">
      <div class="h-10 w-full bg-gray-200 rounded-full skeleton"></div>
    </div>
  </div>)