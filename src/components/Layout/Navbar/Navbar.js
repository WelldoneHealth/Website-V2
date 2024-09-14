import React from 'react'
import wellDoneLogo from "@/asset/Icons/wellDoneLogo.svg"
import loginIcon from "@/asset/Icons/login_icon.svg"
import hospitalIcon2 from "@/asset/Icons/hospital2_icon.svg"

export default function Navbar() {
  return (
   <header  style={{ boxShadow: "0px 0px 4px 2px #01549A40" }} className='w-full  flexBetween p-2  md:p-3 md:px-5 mx-auto '>
    <div className="">
  <img src={wellDoneLogo?.src}
  width={100} 
  height={50} 
  alt="load..." />
    </div>

    <div className="flex gap-x-24">
 
 <utton className='text-[#01549A] flexCenter font-medium text-lg'> <img src={hospitalIcon2?.src} className='w-[30px]  mx-3'  alt="load..." /> I have Clinic/ Hospital</utton>

    <button className= "flexCenter gap-x-2 px-3 py-[6px] rounded-3xl text-base bg-[#01549A] font-normal text-white" >
      Login <div className="flexCenter rounded-full p-1 bg-white">
      <img src={loginIcon?.src}
        width={16} 
        height={11} 
        alt="load..." />
      </div>
    </button>
    </div>
   </header>
  )
}
