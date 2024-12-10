"use client";
import React, { useState } from "react";
import wellDoneLogo from "@/asset/Icons/wellDoneLogo.svg";
import loginIcon from "@/asset/Icons/login_icon.svg";
import hospitalIcon2 from "@/asset/Icons/hospital2_icon.svg";
import hamburgerIcon from "@/asset/Icons/hamburger.svg";
import Link from "next/link";
import closeIcon from "@/asset/Icons/closeIcon.svg";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  console.log("the pathname is",pathname)

  // const isActive = (path) => pathname. == path;
  const isActive = (path) => pathname && pathname.startsWith(path.trim());  

  const [navOpen, setNavOpen] = useState(false);

  const toggleNavBar = () => {
    console.log("clcicked");
    setNavOpen(!navOpen);
  };

  const navMenu = [
    {
      title: "Start ",
      toPage: "/start ",
    },
    {
      title: " Grow",
      toPage: "/grow ",
    },
    {
      title: " Fees and Commission",
      toPage: "/fees-and-commisions",
    },
    {
      title: " How it works",
      toPage: "/how-it-works ",
    },
    {
      title: "Features & Resources ",
      toPage: "/features-and-resources ",
    },
  ];

  const handleNavigation = (toPage) => {
    router.push(toPage);
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="  w-full    fixed top-0 left-0 z-[1000] bg-white    ">
        <div
          style={{ boxShadow: "0px -2px 4px #01549A40, 0px 2px 4px #01549A40" }}
          className="w-full max-w-[1620px] max-md:h-[62px]  flexBetween  p-2 px-3  md:p-3 md:px-5 mx-auto "
        >
          <div className="flex items-center gap-x-4">
            {/* ------------------animayed hamburgermenu------------------- */}
            <div className="hidden ">
              <input
                onClick={() => setNavOpen(!navOpen)}
                id="checkbox2"
                type="checkbox"
              />
              <label class="toggle toggle2" for="checkbox2">
                <div id="bar4" class="bars"></div>
                <div id="bar5" class="bars"></div>
                <div id="bar6" class="bars"></div>
              </label>
            </div>

            {/* ----------------------non animated menu-------------------- */}
            <button
              type="button"
              onClick={toggleNavBar}
              className="w-7 lg:hidden"
            >
              {/* <button type="button" onClick={toggleNavBar} className="w-8 block md:hidden"> */}
              {!navOpen && (
                <img
                  src={hamburgerIcon?.src}
                  className="w-full"
                  alt="load..."
                />
              )}
              {navOpen && (
            <img src={closeIcon?.src} className=""  alt="load..."  />
              )}
            </button>
            {/* -------------icon--------------- */}
            <div className="w-[78px] md:w-24 ">
              <Link href="/">
                <img src={wellDoneLogo?.src} className="w-full" alt="load..." />
              </Link>
            </div>
          </div>

          {/* ----------------flex------------------ */}
          <div className=" hidden lg:flex items-center text-base xl:text-lg font-medium text-primary gap-x-10   ">
            {navMenu?.map(({ title, toPage }) => (
              <Link key={toPage} href={toPage}><p className={` ${isActive(toPage) ? "underline underline-offset-8  decoration-2 " : ""}`}>{title}</p></Link>
            ))}
          </div>

          <div className="flex gap-x-6  ">

            <Link
              href="https://clinic.welldonehealth.in/"
              passHref
              target="_blank"
              className="hidden sm:block lg:hidden xl:block"
            >
              <button
                type="button"
                className="min-w-[140px]   px-7 py-2  rounded-[10px] border-[1px] border-primary font-semibold text-primary"
              >
                Login
              </button>{" "}
            </Link>

            <Link
              href="https://clinic.welldonehealth.in/"
              passHref
              target="_blank"
            >
              <button
                type="button"
                className="min-w-[120px]  text-sm asm:text-base  block  px-4 asm:px-7 py-2  rounded-[10px] bg-primary font-semibold text-white"
              >
                Start get Patients
              </button>{" "}
            </Link>
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
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full px-2 py-4 relative sm:w-[85%] h-full  bg-white flex flex-col justify-start items-center "
        >
          <button
            type="button"
            onClick={toggleNavBar}
            className="w-8  right-0  block md:hidden"
          >
            <img src={hamburgerIcon?.src} className="w-full" alt="load..." />
            {/* {navOpen && <p className="text-2xl">X</p>} */}
          </button>

          <div className="w-28 h-28 hidden rounded-lg   ">
            <img src={wellDoneLogo?.src} className="w-full mt-14" />
          </div>
          <div className="my-16 w-full flex flex-col justify-center items-center   font-medium space-y-6">
            {navMenu.map((item) => (
              <div
                key={item.title}
                onClick={() => handleNavigation(item.toPage)}
                style={{ boxShadow: "0px 0px 4px 2px #01549A40" }}
                className=" w-[90%] max-w-[400px] sm:max-w-[700px]   rounded-md py-2 text-center "
              >
                <Link key={item.toPage} className="w-full" href={item.toPage}>
                  {" "}
                  <p className={` ${isActive(item.toPage) ? "text-primary " : "text-gray-500"}`}>{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
