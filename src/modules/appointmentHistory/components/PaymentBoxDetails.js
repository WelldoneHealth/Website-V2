import React from 'react'

export default function PaymentBoxDetails() {
  return (
   <>
   {/* ----------payment information ------- after 756px-------------- */}
<div className="w-full   py-6  rounded-[15px] hidden  md:flex flex-col sm:flex-row gap-y-6 border-[1px]    border-[#DADADA]">
    <div className="w-full sm:w-1/2 px-11   ">
<p className='text-lg sm:text-base  mb-3 font-medium '>Payment information</p>
<div className="w-full sm:w-[90%] text-base sm:text-sm font-normal space-y-2">
    <div className="flex justify-between items-start">   <p>Consultation :</p>  <p>₹ 500</p> </div>
    <div className="flex justify-between items-start">   <p>Consultation :</p>  <p>₹ 500</p> </div>
    <div className="flex justify-between items-start">   <p>Consultation :</p>  <p>₹ 500</p> </div>
    <div className="flex justify-between items-start font-medium">   <p className=''>Consultation :</p>  <p>₹ 500</p> </div>
</div>
    </div>
    <div className="w-full sm:w-1/2  px-11 sm:border-l-[1px]    border-[#DADADA]">
<p className='text-lg sm:text-base mb-3 font-medium'>More actions</p>
<div className="w-full">
    <div className="flex justify-between items-center">   <p className='max-md:hidden tex-base'>Download Invoice :</p>  <button  type="button"  className='w-[105px] py-1 flexCenter text-[#01549A] text-sm border-[1px] border-[#01549A] rounded-[5px]' >View Invoice</button> </div>
</div>
    </div>

</div>

{/* ---------------payment info below 756px--------------- */}
<div className="w-full px-2 sm:px-5 md:hidden space-y-3">
    <p className='text-lg '>Payment information</p>
    <div className="w-full mx-auto max-w-[550px] border-[1px] border-[#DADADA] rounded-[10px]">
<div className="w-full px-3 asm:px-6 py-3 border-b-[1px] border-[#DADADA] flex justify-between">
<p className='font-medium'>Payment methods</p>
<div className="text-sm asm:text-base">
    <p>Pay on Counter</p>
    <p>28/01/2024, 2:50 PM</p>
</div>
</div>
<div className="px-4 asm:px-6 py-3 flex flex-col gap-y-2 text-sm ssm:text-base">
{[1,2,3].map((item,index)=><div key={index} className=" w-full flex justify-between">
    <p>Consultation :</p>
    <p>₹ 500</p>
</div>)} 
<div className=" w-full flex justify-between font-medium">
    <p className=''>Total :</p>
    <p className='text-red-800'>₹ 700</p>
</div>
    </div>
</div>
</div>
   
   </>
  )
}
