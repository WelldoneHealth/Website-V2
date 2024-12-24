"use client";
import React, { useState } from "react";
import wellDoneLogo from "@/asset/Icons/wellDoneLogo.svg";
import loginIcon from "@/asset/Icons/login_icon.svg";
import hospitalIcon2 from "@/asset/Icons/hospital2_icon.svg";
import hamburgerIcon from "@/asset/Icons/hamburger.svg";
import closeIcon from "@/asset/Icons/closeIcon.svg";
import Link from "next/link";
import { logout } from "@/shared/utils/logoutHandler";
import useAuthStore from "@/store/authStore";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const token = useAuthStore((state) => state.token);
  const toggleNavBar = () => {
    console.log("clcicked");
    setNavOpen(!navOpen);
  };

  const hamburgerLink = [
    {
      linkName: "Appointments",
      linkTo: "/appointment-history",
    },
    {
      linkName: "Family Members",
      linkTo: "/family-members",
    },
  ];
  return (
    <>
      <header className="  w-full   fixed top-0 left-0 z-[1000] bg-white border-none   ">
        <div
          // style={{ boxShadow: "0px -2px 4px #01549A40, 0px 2px 4px #01549A40" }}
          style={{ boxShadow: "0px 7px 6px -4px #01549A40" }}
          className="w-full max-w-[1620px] max-md:h-[62px]  flexBetween  p-2 px-3  md:p-3 md:px-5 mx-auto border-none "
        >
          <div className="flex items-center gap-x-4">
            {/* ----------------------non animated menu-------------------- */}
            <button
              type="button"
              onClick={toggleNavBar}
              className="w-7 sm:hidden"
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
                <p className="text-4xl font-medium text-primary">
                  <img
                    src={closeIcon?.src}
                    className="text-red-900"
                    alt="load..."
                  />{" "}
                </p>
              )}
            </button>
            {/* --------welldone logo-----icon--------------- */}
            <div className="w-[78px] md:w-24 ">
              <Link href="/" className="block w-full ">
                <img src={wellDoneLogo?.src} className="w-full" alt="load..." />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-x-8 md:gap-x-14 ">
            {/* ------------------desktop link-------------------- */}
            {token && (
              <>
                <Link
                  href="/appointment-history"
                  className="hidden sm:block text-base xl:text-lg font-medium text-primary"
                >
                  {" "}
                  Appointments
                </Link>
                <Link
                  href="/family-members"
                  className=" hidden sm:block text-base xl:text-lg font-medium text-primary"
                >
                  My family Members
                </Link>
              </>
            )}

            {!token && (
              <Link
                href="https://practice.welldonehealth.in/"
                passHref
                target="_blank"
                className="block "
              >
                <button className="  text-[#01549A] hidden sm:flex justify-center items-center font-medium text-lg">
                  {" "}
                  <img
                    src={hospitalIcon2?.src}
                    className="w-[30px]  mx-3"
                    alt="load..."
                  />{" "}
                  I have Clinic/ Hospital
                </button>
              </Link>
            )}
            {/* -------------------------login links-------------- */}
            {token ? (
              <button
                onClick={logout}
                className=" flex justify-center items-center gap-x-2 px-4 py-[6px] rounded-3xl text-base bg-[#01549A] font-normal text-white"
              >
                Logout
              </button>
            ) : (
              <Link href={"/login"}>
                <button onClick={()=>setNavOpen(false)} className=" flex justify-center items-center gap-x-2 px-3 py-[6px] rounded-3xl text-base bg-[#01549A] font-normal text-white">
                  Login{" "}
                  <div className="flexCenter rounded-full p-1 bg-white">
                    <img
                      src={loginIcon?.src}
                      width={16}
                      height={11}
                      alt="load..."
                    />
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* -----------------------side navigation bar--------------- */}
      <div
        onClick={(e) => {
          setNavOpen(!navOpen);
          e.stopPropagation();
        }}
        className={`w-full  fixed transition-all duration-300 top-0 overflow-hidden   bg-[#F5F5F5] bg-opacity-10 z-50  h-screen  ${
          navOpen ? "left-0" : "-left-full"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full px-2 py-4 relative sm:w-[85%] h-full  bg-white flex flex-col justify-start items-center "
        >
          {/* ----------------------diffrent links sonside navbatr-------------------- */}
          {token && (
            <div className="my-16 w-full flex flex-col justify-center items-center text-primary  font-medium space-y-6">
              {hamburgerLink.map((item, index) => (
                <Link
                  key={index}
                  className="w-[90%] max-w-[400px] sm:max-w-[700px] block "
                  href={item.linkTo}
                >
                  <div
                    onClick={toggleNavBar}
                    style={{ boxShadow: "0px 0px 4px 2px #01549A40" }}
                    className="  w-full   rounded-md py-2 text-center "
                  >
                    {item.linkName}
                  </div>{" "}
                </Link>
              ))}
            </div>
          )}

          {/* ------------------------i have clinic togle on changing width size ---------- */}
          {!token && (
            <div className="my-16 w-full flex flex-col justify-center items-center text-primary  font-medium space-y-6">
              <div
                style={{ boxShadow: "0px 0px 4px 2px #01549A40" }}
                className=" w-[90%] max-w-[400px] sm:max-w-[700px]   rounded-md py-2 text-center "
                onClick={toggleNavBar}
              >
                <Link
                  href="https://practice.welldonehealth.in/"
                  passHref
                  target="_blank"
                  className="block w-full"
                >
                  I have Clinic/ Hospital
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
