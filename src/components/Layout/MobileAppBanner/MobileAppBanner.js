import { APPLE_STORE, GOOGLE_PLAY, MOBILE_BANNER } from '@/Utilities/ImageConstants'
import Image from 'next/image'
import React from 'react'

export default function MobileAppBanner() {
  return (
   <div className="my-7 p-9  flexBetween">
<div className="w-[60%]">
<h3 className='text-[40px] font-bold'>Your Health, One Tap Away!</h3>
<p className='my-1 text-[19px] font-medium w-[85%] leading-tight'>Book doctor appointments faster and manage your health on the go with our app.</p>
<div className="my-11 space-y-2">
    <p className=' font-semibold text-2xl'>Download Now for Instant Access</p>
    <p className='text-lg font-normal'><span className='font-bold'>Instant Booking: </span>Find and book appointments in just a few taps.</p>
    <p className='text-lg font-normal'><span className='font-bold'>24/7 Access:</span> Manage appointments anytime, anywhere.</p>
    <p className='text-lg font-normal'><span className='font-bold'>Reminders & Alerts:</span> Get notified about upcoming appointments and health tips.</p>
</div>

<div className="flex gap-x-8 my-2 ">
    <button className='w-[180px] h-[60px] relative' type="button">
        <Image fill src={GOOGLE_PLAY} />
    </button>
    <button className='w-[180px] h-[60px] relative' type="button">
        <Image fill src={APPLE_STORE} />
    </button>
  
  
</div>

</div>
<div className="w-[46%] ">
    <img  src={MOBILE_BANNER}/>
</div>
   </div>

  )
}
