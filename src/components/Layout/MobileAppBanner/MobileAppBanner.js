import { APPLE_STORE, GOOGLE_PLAY, MOBILE_BANNER } from '@/Utilities/ImageConstants'
import Image from 'next/image'
import React from 'react'

export default function MobileAppBanner() {
  return (
   <div className="w-full max-w-[1800px] my-7 p-2 sm:p-9 flex justify-center items-start  lg:flexBetween flex-col  lg:flex-row ">
<div className="w-full lg:w-[62%] order-2 lg:order-1">
<h3 className='text-lg ssm:text-[160%] sm:text-[42px] font-bold leading-tight'>Your Health, One Tap Away!</h3>
<p className=' my-8 text-sm ssm:text-base sm:text-[22px] w-[90%] lg:w-[85%] lg:text-[19px] font-medium  leading-tight'>Book doctor appointments faster and manage your health on the go with our app.</p>
<div className="my-11 space-y-2 ">
    <p className=' font-semibold text-base ssm:text-2xl sm:text-3xl lg:text-2xl '>Download Now for Instant Access</p>
    <p className='sm:text-2xl lg:text-lg font-normal'><span className='font-bold'>Instant Booking: </span>Find and book appointments in just a few taps.</p>
    <p className='sm:text-2xl lg:text-lg font-normal'><span className='font-bold'>24/7 Access:</span> Manage appointments anytime, anywhere.</p>
    <p className='sm:text-2xl lg:text-lg font-normal'><span className='font-bold'>Reminders & Alerts:</span> Get notified about upcoming appointments and health tips.</p>
</div>
 
<div className="flex gap-x-8 my-2 ">
    <button className='w-[200px] lg:w-[180px] lg:h-[60px] relative' type="button">
        <img className='w-full h-full' src={GOOGLE_PLAY} />
    </button>
    <button className='w-[200px] lg:w-[180px] lg:h-[60px] relative' type="button">
        <img className='w-full h-full' src={APPLE_STORE} />
    </button>
  
  
</div>

</div>
<div className="w-[70%] mx-auto sm:w-[70%] lg:w-[46%] order-1 lg:order-2 ">
    <img className='w-full' src={MOBILE_BANNER}/>
</div>
   </div>

  )
}
