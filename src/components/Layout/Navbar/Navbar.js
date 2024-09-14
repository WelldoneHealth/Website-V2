import React from 'react'
import logo from '../../../asset/Images/logo.png'
import login_logo from '../../../asset/Images/login-logo.png'
import Image from 'next/image'
import { LOGIN_LOGO, WELLDONE_LOGO } from '@/Utilities/ImageConstants'

export default function Navbar() {
  return (
   <header className='w-full md:w-[95%] max-w-[1900px] flexBetween p-2  md:p-3 md:px-5 mx-auto '>
    <div className="">
  <Image src={WELLDONE_LOGO}
 // layout="responsive" 
  width={100} 
  height={50} 
  alt="load..." />
    </div>
    <div className="flexCenter gap-x-2 px-3 py-[6px] rounded-3xl text-base bg-[#01549A] font-normal text-white">
      Login <div className="flexCenter rounded-full p-1 bg-white">
      <Image src={LOGIN_LOGO}
    
        width={16} 
        height={11} 
        alt="load..." />
      </div>
    </div>
   </header>
  )
}
