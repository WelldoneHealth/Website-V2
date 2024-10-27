import React from 'react'
import paymentImageIcon from "@/asset/Icons/payment.svg";
import appointmentImageIcon from "@/asset/Icons/appointment.svg";
import consultImageIcon from "@/asset/Icons/consult.svg";
import doctorListImageIcon from "@/asset/Icons/doctorList.svg";
import hospitalListImageIcon from "@/asset/Icons/hospitalList.svg";
import adsIcon from "@/asset/Icons/ads.svg";
import accountIcon from "@/asset/Icons/account.svg";
import bookIcon from "@/asset/Icons/book.svg";
import calendar2Icon from "@/asset/Icons/calendar2.svg";
import checkListIcon from "@/asset/Icons/checkList.svg";
import arrowIcon2 from "@/asset/Icons/arrow2.svg";
import dashboardIcon from "@/asset/Icons/dashboard.svg";
import dotsIcon from "@/asset/Icons/dots.svg";
import mobileIcon2 from "@/asset/Icons/mobile2.svg";
import rotatingArrowIcon1 from "@/asset/Icons/rotatingArrow1.svg";
import rotatingArrowIcon2 from "@/asset/Icons/rotatingArrow2.svg";
import aimIcon from "@/asset/Icons/aim.svg";
import handIcon from "@/asset/Icons/hand.svg";
import chartIcon from "@/asset/Icons/chart.svg";
import supportIcon from "@/asset/Icons/support.svg";

import doctorImage4 from "@/asset/Images/doctor4.png"
import doctorImage5 from "@/asset/Images/doctor5.png"
import doctorBannerImage2 from "@/asset/Images/doctorBanner2.png"



export default function page() {


    const cardsInfo1=[
        {
            image:aimIcon ,
            primaryText: 'Opportunity '  ,
            subText: 'Reach 45 crore+ patients across 19,000+ pincodes and leverage special treatment drives like Get Well Soon offer days! '
        },
        {
            image: handIcon,
            primaryText: 'Ease of Doing Treatment'  ,
            subText: 'Set up your Welldone Practice account in under 10 minutes—just 1 doctor and a valid registration number needed! '
        },
        {
            image: chartIcon,
            primaryText: ' Growth of OPD'  ,
            subText: ' Clinics and hospitals experience 2.8X OPD growth, 2.3X more visibility, and up to 5X boosts during Well Being Weeks!'
        },
        {
            image:supportIcon ,
            primaryText: ' Additional Support'  ,
            subText: ' Enhance your clinics efficiency with dedicated account management, specialized training, OPD insights, and comprehensive facility support services!'
        }
    ]

  return (

         <div className="w-full relative space-y-8 max-w-[1600px] mx-auto  mt-20 pt-[1px]     ">



<div className="w-full h-[520px] relative flex ">
    <div className="pl-10 mt-16 flex flex-col items-start gap-y-0  text-primary">
        <p className='text-[30px] font-bold leading-0'>Become a</p>
        <p className='text-[45px] font-bold'>Welldone Health practitioner</p>
        <p className='text-[34px] '>and treat 1+ lakh patients</p>
<button type="button"  className='mt-6 px-7  py-2 rounded-[30px]  font-semibold  bg-primary text-white '  >Get started for free</button>
    </div>
    <img src={doctorBannerImage2?.src} className='absolute w-full max-w-[800px] right-0' alt="load..."  />
</div>




<div className=" px-1 asm:px-3 lg:px-0 space-y-8">


<div className="w-full px-10 py-6 space-y-1  border-[1px] border-[#DADADA] rounded-3xl flex justify-between gap-x-7">
<div className="w-[65%] flex flex-col gap-y-4">
    <p className='text-[34px] font-bold text-primary leading-tight'>Doctors Love Practicing with Welldone Health</p>
    <p className='text-sm'>Trusted by over 45 Lakh patients, Welldone Health helps doctors make their services available 24x7, providing seamless healthcare access across India.</p>
    <div className="w-full flex  gap-5 flex-wrap">
    {cardsInfo1.map((item,index)=><div key={index} className='w-[380px] p-5 space-y-1 bg-secondary rounded-[30px]' >  
    <img src={item.image?.src} className='' alt="load..."  />
    <p className='text-lg font-medium'>{item?.primaryText}</p>
    <p className='text-sm leading-snug'>{item?.subText}</p>
    
    </div>
)}
    </div>
</div>
<div className="flex-1  space-y-4 pt-14 ">
    <img src={rotatingArrowIcon1?.src} className='w-[110px]' alt="load..."  />
    <img src={doctorImage5?.src} className='rounded-[20px] w-[450px]' alt="load..."  />
    <img src={rotatingArrowIcon2?.src} className='w-[110px]' alt="load..."  />
</div>
</div>



<div className="w-full px-10 py-6 space-y-1  border-[1px] border-[#DADADA] rounded-3xl">
<p className='text-[38px] font-bold text-primary'>Your Journey  <span className='text-black'>on Welldone</span></p>
<p className='text-sm'>Starting your Treatment practices with Welldone is easy. 14 lakh+ doctors trust Welldone with their practice</p>
<div className="w-full flex items-center  gap-x-5 py-5 ">
   {[hospitalListImageIcon,doctorListImageIcon,appointmentImageIcon,consultImageIcon,paymentImageIcon].map((item,index)=> <div key={index} className="space-y-1">
    <img src={item?.src} className='w-[200px]  ' alt="load..."  />
    <p className='font-medium text-lg'>Create Clinic/Hospital</p>
    <p className='text-xs leading-snug'>Register in just 15 mins with valid Registration, address, & bank details</p>
    </div>)}
</div>
<div className="w-full flexCenter">
<button type="button"  className=' px-7  py-2 rounded-[30px]  font-semibold  bg-primary text-white'  >Get started for free</button>
</div>
</div>




<div className=" w-full px-10 py-6 space-y-1  border-[1px] border-[#DADADA] rounded-3xl">
<p className='text-[38px] font-bold text-primary text-center'>Access our tools to grow faster <span className='text-black'>on Welldone</span></p>
<p className='text-center text-sm'>Your Welldone account provides essential tools and support to help grow your clinic or hospital when needed.</p>
<div className="w-full py-5">
    <div className="w-full flex  gap-5 flex-wrap">
{[1,2,3,4,5,6].map((item,index)=><div key={index} className='w-[380px] p-5 space-y-1 bg-secondary rounded-[30px]' >  
    <img src={bookIcon?.src} className='' alt="load..."  />
    <p className='text-lg font-medium'>Completion by Welldone</p>
    <p className='text-sm leading-snug'>Struggling with patient flow, appointments, queues, prescriptions, or follow-ups? Let Welldone take care of everything!</p>
    <div className="w-full   flex justify-between items-center">
        <p className='text-sm font-medium text-primary'>Learn more</p>
        <button type="button" className='' ><img src={arrowIcon2?.src} className='rotate-180' alt="load..."  /></button>
    </div>
    </div>
)}
    </div>

</div>


</div>




<div className=" w-full bg-[#F2FAFF] px-10 py-6 space-y-5  border-[1px] border-[#DADADA] rounded-3xl">
<p className='text-[36px]  font-bold text-primary'>Take a look 👀 at our  <span className='text-primary'>Advanced appointment booking platform! 🚀</span></p>
<div style={{boxShadow:" 0px 0px 4px 0px #00000040"}} className="w-full px-10 py-6 bg-white border-[1px] border-[#DADADA] rounded-3xl flex ">
<div className="w-full py-4 flex-1 ">
    <div className=" space-y-4">
        <p className='text-[28px] text-primary leading-tight'>Empower Your Practice with Our <br/> <span className='font-semibold text-nowrap'>EMR Dashboard!</span></p>
        <p className='w-[80%] text-sm leading-tight'>Access real-time patient insights and streamline workflows effortlessly. Transform data into actionable care solutions for better health outcomes!</p>
    </div>    
<button type="button"  className='mt-12 px-5  py-2 rounded-[30px]  font-semibold text-xs  border-[1px] border-primary  text-primary'  >Explore All Features</button>
</div>
<div className="">
    <img src={dashboardIcon?.src} className='w-[400px]' alt="load..."  />
</div>
</div>
<div className="w-full flexCenter">
    <img src={dotsIcon?.src} className=' ' alt="load..."  />
</div>
</div>




<div className=" mx-auto w-[900px] p-3 border-[1px] border-[#007185] rounded-[30px] flex gap-x-14">
<img src={doctorImage4?.src} className='w-[300px] rounded-[30px]' alt="load..."  />
<div className="text-center text-primary  ">
    <p className='text-[28px] leading-tight' >Open an account in <br/> just <span className='font-semibold' >10 minutes.</span></p>
    <p className='my-3 text-sm leading-snug'>Streamline your practice with our cutting-edge tools and insights, designed to optimize patient care and management.</p>
    {/* <div className="w-full flexCenter"> */}
<button type="button"  className='mt-4 px-7  py-2 rounded-[30px]  font-semibold  bg-primary text-white'  >Open an Account free</button>
{/* </div> */}
</div>
</div>




<div className="w-full   px-10 py-7 space-y-1  border-[1px] border-[#DADADA] rounded-3xl flex">
<div className="w-1/2 ">
<p className='w-[90%] mt-3 text-primary text-[28px] leading-tight font-bold'>Experience Welldone on any device like iPad, Laptop, tablet, Mobile etc</p>
<div className="space-y-2 mt-8 w-[80%]">
    <p>Stay connected to your practice anytime, anywhere with the Welldone Health your trusted companion for seamless patient management.</p>
    <p>The Welldone Health lets you effortlessly:</p>
    <p>Manage patient records</p>
    <p>Manage patient records</p>
    <p>Manage patient records</p>
    <p>Manage patient records</p>
    <p>Manage patient records</p>
    <p>Manage patient records</p>
    <p>Manage patient records</p>
    <p>Stay in control and connected with your clinic/hospital through the Welldone Health!</p>
<button type="button"  className=' px-7  py-2 rounded-[30px]  font-semibold  bg-primary text-white'  >Get started for free</button>
</div>
</div>
<img src={mobileIcon2?.src} className='' alt="load..."  />
</div>


</div>

         </div>
  )
}
