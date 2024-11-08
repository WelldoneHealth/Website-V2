"use client";
import React, { useState } from "react";
import wellDoneLogo from "@/asset/Icons/wellDoneLogo.svg";
import loginIcon from "@/asset/Icons/login_icon.svg";
import hospitalIcon2 from "@/asset/Icons/hospital2_icon.svg";
import hamburgerIcon from "@/asset/Icons/hamburger.svg";
import Link from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavBar = () => {
    console.log("clcicked");
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header
        className="  w-full bg-white   fixed top-0 left-0 z-[1000] bg-transparent     "  >
          <div style={{ boxShadow: "0px 0px 4px 2px #01549A40" }} className="w-full max-w-[1600px] flexBetween p-2  md:p-3 md:px-5 mx-auto ">
         <Link href="/featurePages/page1" >
        <div className="w-24 ">
          <img src={wellDoneLogo?.src} className="w-full"  alt="load..." />
        </div>
        </Link>

<div className="flex items-center text-lg font-medium text-primary gap-x-10">
<Link href="/featurePages/page3" >Start</Link>
<Link href="/featurePages/page2" >Grow</Link>
<Link href="/featurePages/page5" >Fees and Commission</Link>
<Link href="/featurePages/page4" >How it works</Link>
<Link href="/featurePages/page6" >Features & Resources</Link>
</div>

        <div className="flex gap-x-10 ">
          <button className="  text-[#01549A] hidden md:flex justify-center items-center font-medium text-lg">
            {" "}
            <img
              src={hospitalIcon2?.src}
              className="w-[30px]  mx-3"
              alt="load..."
            />{" "}
            I have Clinic/ Hospital
          </button>
          <button className=" hidden md:flex justify-center items-center gap-x-2 px-3 py-[6px] rounded-3xl text-base bg-primary font-normal text-white">
            Login{" "}
            <div className="flexCenter rounded-full p-1 bg-white">
              <img src={loginIcon?.src} width={16} height={11} alt="load..." />
            </div>
          </button>

          <button type="button" onClick={toggleNavBar} className="w-8 block md:hidden">
            <img src={hamburgerIcon?.src} className="w-full" alt="load..." />
          </button>
        </div>
        </div>
      </header>

      <div
        onClick={(e) => {
          setNavOpen(!navOpen);
          e.stopPropagation();
        }}
        // bg-[#EFF8FF] 
        className={`w-full  fixed transition-all duration-300 top-0 overflow-hidden   bg-[#F5F5F5] bg-opacity-10 z-50  h-screen  ${
          navOpen ? "left-0" : "-left-full"
        } `}
      >
        <div onClick={(e)=>e.stopPropagation()} className="w-full px-2 py-4 relative sm:w-[85%] h-full  bg-[#EFF8FF] flex flex-col justify-start items-center ">
        <button type="button" onClick={toggleNavBar} className="w-8  right-0  block md:hidden">
            <img src={hamburgerIcon?.src} className="w-full" alt="load..." />
          </button>

<div className="w-28 h-28 rounded-lg   ">
  <img src={wellDoneLogo?.src} className="w-full mt-14"  />
</div>
<div className="my-10 w-full flex flex-col justify-center items-center  text-2xl font-medium space-y-6">
 <div       style={{ boxShadow: "0px 0px 4px 2px #01549A40" }}
 className=" w-[90%] flexCenter rounded-md py-2 ">Home</div>
 <div       style={{ boxShadow: "0px 0px 4px 2px #01549A40" }}
 className=" w-[90%] flexCenter rounded-md py-2 ">Home</div>
 <div       style={{ boxShadow: "0px 0px 4px 2px #01549A40" }}
 className=" w-[90%] flexCenter rounded-md py-2 ">Home</div>
 <div       style={{ boxShadow: "0px 0px 4px 2px #01549A40" }}
 className=" w-[90%] flexCenter rounded-md py-2 ">Home</div>
</div>




        </div>
      </div>
    </>
  );
}
