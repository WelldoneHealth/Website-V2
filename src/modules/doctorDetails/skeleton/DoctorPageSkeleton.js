import React from 'react'

export default function DoctorPageSkeleton() {
  return (
    <div className="w-full  md:mx-auto flex flex-col lg:flex-row lg:justify-between justify-center lg:items-start gap-x-7">


{/* --------------------profile sections------------- */}
    <div class="w-full lg:w-[68%]  bg-white  ">
    <BasicDetailsSkeleton />
  <ExtraDetails />
  <TabsWithMaps />

{/* ----------------to display tjere are more content is there -------------------- */}
  <div class="h-[90px] my-12 p-2 w-full flex flex-col items-center justify-center rounded-lg space-y-4">
  <div class="h-5 w-1/3 bg-gray-200 rounded mb-2 skeleton"></div>
  <div class="h-5 w-1/2 bg-gray-200 rounded skeleton"></div>
  <div class="h-5 w-1/3 bg-gray-200 rounded mb-2 skeleton"></div>
</div>

  </div>

{/* --------------appointment section------------- */}
<div class="max-lg:hidden relative h-[800px]  p-4 w-full  flex-1 bg-white border border-gray-300 shadow-md rounded-lg ">
  
  
  <div class="h-4 w-2/3 bg-gray-200 rounded mx-auto skeleton mt-1 mb-4"></div>

  <div class="h-8 w-full bg-gray-200 rounded skeleton mb-7"></div>

  <div class="space-y-5 "> 
   <AppointmentBoxCard />
   <AppointmentBoxCard />
  
  </div>



{/* -----btn part */}
    <div class="mt-[385px] h-10 w-full bg-gray-200 rounded skeleton"></div>

</div>


  </div>
  )
} 



const BasicDetailsSkeleton=()=>( <>
<div className="mt-2 mb-7 w-full flex  flex-col sm:flex-row max-sm:items-center  gap-x-6  gap-y-6  msm:gap-y-8 ">
 <div class="   max-msm:w-[75%] max-msm:h-[270px] msm:size-[300px] rounded-lg max-sm:mx-auto bg-gray-200    mb-4"></div>
  
  <div className=" max-sm:mx-auto  sm:w-full   sm:flex-1 space-y-6 py-6 ">  
  <div class="h-5 w-[240px]   asm:w-[300px]  sm:w-3/5 bg-gray-200 rounded   mb-2"></div>
<div class="h-3 w-[170px] asm:w-[200px] sm:w-1/3 bg-gray-200 rounded  mb-4"></div>
<div class="ml-4 h-3 max-sm:hidden sm:w-1/3 bg-gray-200 rounded  mb-4"></div>
  </div>

  </div>
</>
)


const ExtraDetails=()=>(
    <div class=" w-full  flex   justify-around items-center my-8">
        {Array.from({length:3}).map((_,index)=> <div key={index} class="flex flex-col items-center gap-4">
      <div class="size-12 bg-gray-200 rounded-full skeleton"></div>
      <div class="h-3 w-16 bg-gray-200 rounded skeleton"></div>
    </div>)}

    <div class=" max-msm:hidden flex flex-col items-center gap-4">
      <div class="size-12 bg-gray-200 rounded-full skeleton"></div>
      <div class="h-3 w-16 bg-gray-200 rounded skeleton"></div>
    </div>

  </div>
)


export  const TabsWithMaps=()=>(<div class="w-full my-5 px-2 sm:px-4 py-4 border rounded-[20px] shadow-lg bg-white">
    <div class="h-6  w-1/3 bg-gray-200 rounded mb-5 skeleton"></div>
  
    <div class="max-w-[100px] h-5 w-1/5 bg-gray-200 rounded my-6 skeleton"></div>
  
    <div class="h-5 w-2/3  max-w-[350px] bg-gray-200 rounded my-4 skeleton"></div> 
    <div class="h-4 w-1/2 bg-gray-200 rounded mb-6 skeleton"></div> 
  
    <div class="space-y-10 my-10 ">
      <div class="  h-5 w-1/4 bg-gray-200 rounded skeleton"></div>
      <div class="my-4 flex gap-x-3 overflow-hidden">
        <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
        <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
        <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
        <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
        <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
        <div class="h-[70px] w-[200px]   min-w-[150px]  bg-gray-200 rounded-[10px] skeleton"></div> 
     
      </div>
    </div>
  
    <div class="h-[320px]   w-full bg-gray-200 rounded-[20px] skeleton"></div> 

    
  </div>
  )



  const AppointmentBoxCard=()=>( <div class="rounded-[10px]  border border-gray-300  p-4 ">

<div className=" my-3 flex justify-center items-center gap-x-5 ">
<div class="size-14 bg-gray-200 rounded-[10px] skeleton"></div> 
<div className="space-y-3">
<div class="h-3 w-[100px] bg-gray-200 rounded skeleton"></div> 
<div class="h-3 w-[70px] bg-gray-200 rounded skeleton"></div> 

</div>
</div>

  </div>

  )