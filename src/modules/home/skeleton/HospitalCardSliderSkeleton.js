import React from 'react'

export default function HospitalCardSliderSkeleton() {
  return (
   <div className="w-full md:px-4 flex justify-center items-center gap-x-9 ">


<div className="w-full">
  <SkeletonCard />
</div>


<div className="w-full  max-md:hidden">
  <SkeletonCard />
</div>


<div className="w-full  max-lg:hidden">
  <SkeletonCard />
</div>

   </div>
  )
}


const SkeletonCard=()=>( <div class="w-[90%] sm:w-[95%] md:w-full  max-w-[730px] mx-auto   border rounded-xl shadow-lg bg-white ">

  <div class="aspect-video w-full bg-gray-200 mb-4 skeleton">
    <div class="w-[70%]  mx-auto  h-full bg-gray-300 "></div>
  </div>

  <div class="p-6 text-center ">
    <div className="space-y-4 mb-4">

  <div class="h-5 w-4/5  bg-gray-200 rounded mx-auto skeleton"></div>
  <div class="h-4 w-3/5 bg-gray-200 rounded mx-auto skeleton"></div>
  </div>

    <div class="w-full  mt-7 px-1 flex items-center justify-between ">
    {Array.from({ length: 2 }).map((_, index) => (
  <div key={index} className="h-9 w-[40%] max-w-[170px] bg-gray-200 rounded-full skeleton"></div>
))}
 
    </div>
  </div>
</div>

)



