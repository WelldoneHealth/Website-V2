import React from 'react'
import logo from "@/asset/Images/blueLogoWelldone.png"

import facebook from "@/asset/Icons/facebook.svg";
import insta from "@/asset/Icons/insta.svg";
import linkedin from "@/asset/Icons/linkedin.svg";
import twitter from "@/asset/Icons/twitter.svg";
import Link from 'next/link';



const policyData = [
    { linkTo: "/privacy-policy", text: "Privacy" },
    { linkTo: "/shipping-return", text: "Shipping & Return" },
    { linkTo: "/refund-cancellation", text: "Refund & Cancellation" },
    { linkTo: "/product-checkout", text: "Product & Checkout" },
  ];
  
  const companyData = [
    { linkTo: "/about", text: "About" },
    { linkTo: "/terms-conditions", text: "Terms & Conditions" },
  ];
  

  const contactUsData = [
    { linkTo: "/", text: "Welldone Healthcare Private Limited" },
    { linkTo: "/", text: "CIN: U85100MH2021PTC354141" },
    { linkTo: "/", text: "G.NO.9/1, PRASAD NAGAR, BHADANE TAL.SAKRI, Dhule, Dhule, Maharashtra, India, 424304 7757080066" },
    { linkTo: "/", text: "welldonehealth499@gmail.com" },
  ];
  

const socialLinks=[
  {
    linkTo:"https://www.facebook.com/profile.php?id=100092906130450" ,image:facebook
  },
  {
    linkTo:"https://www.instagram.com/welldone_health/" ,image:insta
  },
  {
    linkTo:"https://twitter.com/health_welldone" ,image:twitter
  },
  {
    linkTo:"https://www.linkedin.com/company/welldone-health/" ,image:linkedin
  },
]


export default function Footer() {



  return (

   <div className="mt-16 w-full py-12 bg-[#01549A] space-y-14 ">

<div className="mx-auto w-full px-3 sm:px-6 lsm:px-8  esm:px-12  max-w-[1620px]  flex flex-col sm:flex-row justify-between gap-y-8 gap-x-16 esm:gap-x-28 ">
{/* ----logo--------------- */}
<div className=" max-sm:w-full max-sm:flex max-sm:justify-center ">
    <img src={logo?.src} className='w-[150px] asm:w-[180px] sm:w-[150px] lg:w-[180px] xl:w-full  xl:max-w-[210px]' alt="load..."  />
    </div> 


<div className="w-full flex-1 flex justify-between flex-col sm:flex-row gap-y-4 gap-x-10  esm:gap-x-20">
{/* ------------policy------------ */}
<div className=" space-y-2 max-lsm:hidden">
    <p className='text-[26px] text-white font-semibold' >Policies</p>
    {policyData.map((item)=> <p className='text-nowrap text-[#ACACAC] text-sm 2xl:text-base  cursor-pointer'><Link href="/privacy-policy" >{item.text}</Link></p>)}
</div>
{/* -------------company------------ */}
<div className="space-y-2 max-lsm:hidden">
    <p className='text-[26px] text-white font-semibold'>Company</p>
    {companyData.map((item)=><p className='ssm:text-nowrap text-[#ACACAC] text-sm 2xl:text-base cursor-pointer'>{item.text}</p>)}
</div>



{/* ------------------plolicy and compnay ion one  column---------hidden after 900px------------------- */}
<div className=" flex flex-col gap-y-4 sm:gap-y-6 lsm:hidden ">
<div className=" space-y-2">
    <p className='text-[26px] text-white font-semibold' >Policies</p>
    {policyData.map((item)=><p className='text-nowrap text-[#ACACAC] text-sm 2xl:text-basecursor-pointer '>{item.text}</p>)}
</div>

<div className="space-y-2">
    <p className='text-[26px] text-white font-semibold'>Company</p>
    {companyData.map((item)=><p className='text-nowrap text-[#ACACAC] text-sm 2xl:text-base cursor-pointer'>{item.text}</p>)}
</div>
</div>


{/* ------------------------contact us-------------------- */}
<div className="space-y-2">
    <p className=' text-[26px] text-white font-semibold'>Contact Us</p>
    {contactUsData.map((item,index)=><p className={`text-[#ACACAC] text-wrap text-sm ssm:text-base lg:text-lg ${index==3 && "cursor-pointer"}`}>{item.text}</p>)}

    {/* --------------------socila--------------- */}
    <div className="space-y-2">
        <p className='text-[#ACACAC] text-wrap text-sm ssm:text-base lg:text-lg'>For Daily Health Tips Follow Us</p>
       <div className="flex items-center gap-x-4 ">
        {socialLinks.map((item)=><Link href={item?.linkTo} passHref target='_blank' > <img src={item?.image?.src} className='w-[40px] cursor-pointer' alt="load..." /> </Link> )}
       </div>
    </div>
</div>

</div>
</div>
{/* ----------copyright----------------- */}
<p className='w-full px-2  text-center text-white font-semibold text-sm '>copyright <span className='text-sm asm:text-base mx-[2px]'>&#169;</span> <span className='text-xs asm:text-base'>WELLDONE HEALTHCARE PRIVATE LIMITED.</span>All rights reserved </p>

   </div>

  )
}


