import React from 'react'
import mobileIcon2 from "@/asset/Icons/mobile2.svg";



export default function Responsivness() {
  return (

<>
{/* -------------flex-------------- */}
<div className="w-full  px-3 msm:px-6 sm:px-10 py-7 space-y-1  border-[1px] border-[#DADADA] rounded-3xl flex flex-col lg:flex-row">
<div className="order-2 lg:order-1 w-full lg:w-[40%] xl:w-1/2 ">
<p className=' lg:w-[90%] mt-3 text-primary text-[20px] asm:text-[25px] sm:text-[30px] leading-tight font-bold'>Experience Welldone on any device like iPad, Laptop, tablet, Mobile etc</p>
<div className="space-y-2 mt-8 lg:w-[80%]">
    <p> Stay connected to your practice anytime, anywhere with the Welldone Health your trusted companion for seamless patient management.</p>
    <p>The Welldone Health lets you effortlessly:</p>
   <div className="pl-2">
   <li>Manage patient records</li>
    <li>Schedule appointments</li>
    <li>Track prescriptions</li>
    <li>Handle billing and payments</li>
    <li>Access health insights</li>
    <li>Receive patient feedback</li>
    <li>Get support when needed</li>
   </div>
    <p className=''>Stay in control and connected with your clinic/hospital through the Welldone Health!</p>

</div>
<button type="button"  className='mt-6 text-base ssm:text-lg px-7  py-2 rounded-[30px]  font-semibold  bg-primary text-white'  >Get started for free</button>

</div>
<div className="order-1 lg:order-2 lg:w-[60%] xl:w-1/2">
<img src={mobileIcon2?.src} className='' alt="load..."  />
</div>
</div>
</>
  )
}
