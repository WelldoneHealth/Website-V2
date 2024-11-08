"use client";
import React, { useState } from "react";
import doctorDetailsImage from "@/asset/Images/doctorDetailsImage.png";
import certificateImage1 from "@/asset/Images/certificate1.png";
import certificateImage2 from "@/asset/Images/certificate2.png";
import certificateImage3 from "@/asset/Images/certificate3.png";
import certificateImage4 from "@/asset/Images/certificate4.png";
import clockIcon from "@/asset/Icons/clock.svg";
import redGeoLocationIcon from "@/asset/Icons/redGeoLocation_icon.svg";
import cashCounterIcon from "@/asset/Icons/cashCounter.svg";
import doctorBagIcon from "@/asset/Icons/doctorBag.svg";
import doctorBagIcon2 from "@/asset/Icons/doctorBag2.svg";
import languageIcon from "@/asset/Icons/language.svg";
import femaleIcon from "@/asset/Icons/female.svg";
import ratingIcon from "@/asset/Icons/rating.svg";
import pinedIcon from "@/asset/Icons/pined.svg";
import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import smallHatIcon from "@/asset/Icons/smallHat.svg";
import smallBuildingIcon from "@/asset/Icons/smallBuilding.svg";
import doctorHatIcon from "@/asset/Icons/doctorHat.svg";
import doctorNoteIcon from "@/asset/Icons/doctorNote.svg";
import doctorDeviceIcon from "@/asset/Icons/doctorDevice.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
import phoneCallIcon from "@/asset/Icons/phoneCall.svg";
import outlineClockIcon from "@/asset/Icons/outlineClock.svg";
import lunchBoxIcon from "@/asset/Icons/lunchBox.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import calendarIcon from "@/asset/Icons/calendar.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import SectionTabsWithMaps from "@/components/setionTabsWithMaps/SectionTabsWithMaps";
import OfficeSafetyPrecautions from "@/utils/smallComponents/OfficeSafetyPrecautions";

export default function page() {
  const [newTabData, setNewTabData] = useState(1);
  const changeTab = (tabNumber) => {
    setNewTabData(tabNumber);
  };

  const [appointmentView, setAppointmentView] = useState(false);

  const educationalData = [
    {
      eduType: "Bachelor of Surgery (MBBS)",
      eduCollage: "harvard medical school",
    },
    {
      eduType: "Master of Surgery (MS)",
      eduCollage: "Indiana University School of Medicine",
    },
    {
      eduType: "Bachelor of Dental Surgery (MDS)",
      eduCollage: "University of Colorado School of Medicine",
    },
    {
      eduType: "Diplomate of National Board (DNB)",
      eduCollage: "University of Michigan Medical School",
    },
  ];

  const extraDoctorDetails = [
    {
      extraDetailsImg: languageIcon,
      extraDetailsText: "English, हिंदी,ગુજરાતી, Odia, मराठी",
    },
    {
      extraDetailsImg: doctorBagIcon,
      extraDetailsText: "32+ Years Experience",
    },
    {
      extraDetailsImg: doctorBagIcon2,
      extraDetailsText: "No charges for booking",
    },
    {
      extraDetailsImg: cashCounterIcon,
      extraDetailsText: "Cash on counter ",
    },
    {
      extraDetailsImg: ratingIcon,
      extraDetailsText: "4.8 (234 Review)",
    },

    {
      extraDetailsImg: femaleIcon,
      extraDetailsText: "Female Provider",
    },
  ];

  return (
    <>
      <div className="w-full relative max-w-[1600px] mx-auto px-1   asm:px-3 lg:px-0  mt-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7">
        {/* --------------------details part-------------- */}
        <div
          className={` w-full lg:w-[68%] max-h-max   ${
            appointmentView && "h-[200px] overflow-hidden"
          } `}
        >
          {/* ----- //todo doctor detail scetion---------- */}
          <div className="my-7 w-full flex flex-col  max-md:items-center md:flex-row   gap-x-6 gap-y-8 ">
            {/* -----------image portion- */}
            <div className="w-[60%] asm:w-[50%] sm:w-[42%] md:w-[38%] lg:w-[35%]   overflow-hidden">
              <img
                src={doctorDetailsImage?.src}
                className="w-full rounded-md"
                alt="load..."
              />
            </div>
            {/* -----------details part------------ */}
            <div className=" flex-1 ">
              <div className="flex gap-x-3">
                <button className="border-2 flexCenter rounded-md cursor-pointer  text-sm asm:text-base font-medium px-2 py-[2px] border-[#E8E8E8] hover:bg-[#01549A] hover:text-white hover:border-transparent  text-[#01549A]">
                  Obstetrics and Gynaecology
                </button>
                <button className="bg-[#01549A] rounded-md text-sm asm:text-base  font-medium  sm:flex hidden justify-center items-center min-w-[100px] text-white cursor-pointer hover:text-[#01549A] hover:bg-white border-2 border-[#01549A]">
                  (124)
                </button>
              </div>
              <h3 className="my-3  text-[#01549A] font-semibold text-[18px] ssm:text-[20px]  asm:text-[26px] ">
                Dr. Vijaya Jaywant Ahirrao
              </h3>
              <div className="w-full flex flex-col gap-y-1 text-sm  ">
                <p className="text-[#A7A7A7] font-normal text-sm asm:text-base  ">
                  M.B.B.S, DGO
                </p>
                <p className="   max-sm:w-full text-[#A7A7A7] font-normal  w-[70%] max-w-[450px] ">
                  Surgical Oncologist, Advanced Laparoscopic Surgeon, Nodules ,
                  Stomach Disorders Specialist
                </p>
                <p className="my-4 text-[#A7A7A7] font-normal asm:text-base  ">
                  <span className="mr-2 relative w-[12px] h-[15px] inline-block">
                    <img className="w-full" src={redGeoLocationIcon?.src} />
                  </span>
                  Pune, Maharashtra
                </p>
              </div>

              {/* --------//todo  initial ui things--------- */}
              {/* <div className="">
              <hr className='my-7  w-[95%]' /> 
               <p className='w-full lg:w-[95%] text-[#A7A7A7] font-normal text-base leading-relaxed ' >Nullam.</p> 
              <div className="my-2 flex justify-between items-center flex-wrap gap-y-3 ">
    <div className="">
            <div className="">
             image
                </div>
                <div className="">
                    <p className='text-[#A7A7A7] font-normal text-base'><i className="fas fa-camera"></i>Our Call Service!</p>
                    <p className='text-[#01549A] text-lg asm:text-[22px] font-semibold'>+99 00 555 222 33</p>
                </div>
    </div>
    <div className="mx-2 flex gap-x-2">
      icons section
        <div className="w-8 h-8 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
    </div>
</div> 
</div> */}
            </div>
          </div>

          {/* <hr className="my-7  w-[95%]" /> */}

          {/* ------------//todo  extra things about doctor------------ */}
          <div className="my-7 w-full  flex max-lg:overflow-x-auto max-lg:whitespace-nowrap gap-x-6 py-4 border-y-2 border-[#EFEFEF]">
            {extraDoctorDetails.length > 0 &&
              extraDoctorDetails.map((item, index) => (
                <div className="flex-1 flex flex-col justify-center items-center  gap-y-2   ">
                  <div className="flex justify-center items-center rounded-full bg-[#EFF8FF] h-9 w-9 ">
                    <img
                      src={item?.extraDetailsImg?.src}
                      className=" w-4"
                      alt="load..."
                    />
                  </div>
                  <p className="text-center  line-clamp-2 text-sm font-normal">
                    {item?.extraDetailsText}
                  </p>
                </div>
              ))}
            <div className="">
              <div className=""></div>
              <p></p>
            </div>
          </div>

          {/* -------------------- //todo  extra safety precautions------------ */}
          <OfficeSafetyPrecautions />

          {/* ------------- //todo  map portion with timings--------------- */}
          <div
            style={{ boxShadow: " 0px 0px 4px 0px #00000040" }}
            className="w-full my-7   rounded-[20px] px-2  sm:px-4  py-2 "
          >
            <h3 className=" my-3 text-[22px] sm:text-2xl  text-[#01549A] font-semibold">
              Clinic/ Hospital details
            </h3>

            <div className="w-full text-[15px] flex flex-wrap gap-y-5 justify-start gap-x-5 border-b-2 border-[#EFEFEF]">
              {[1, 2, 3].map((item, index) => (
                <button
                  key={index}
                  onClick={() => changeTab(item)}
                  type="button"
                  className={`  px-6 py-2 font-medium rounded-t-lg hover:bg-[#F3FAFF] hover:text-[#01549A]  ${
                    newTabData === item
                      ? "bg-[#F3FAFF]   text-[#01549A]"
                      : "bg-[#F5F5F5] text-[#919196]"
                  }`}
                >
                  Office{item}
                </button>
              ))}
            </div>

            {newTabData === 1 ? (
              <SectionTabsWithMaps tab="1" />
            ) : newTabData === 2 ? (
              <SectionTabsWithMaps tab="2" />
            ) : newTabData === 3 ? (
              <SectionTabsWithMaps tab="3" />
            ) : null}
          </div>

          {/* -----------//todo new eductaion------------- */}
          {/* <div className="w-full my-7 ">
            <h3 className=" my-3 max-asm:hidden text-[22px] sm:text-2xl text-[#01549A] font-semibold">
              Education and background
            </h3>
            <h3 className=" my-3 text-[22px] asm:hidden  text-[#01549A] font-semibold">
              Education 
            </h3>
            <div className="w-full flex flex-col sm:flex-row gap-x-7 gap-y-5  my-7 ">
        --------educationl cards----------- 
              {[1, 2].map((item, index) => (
                <div
                  style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
                  className="flex-1 max-w-[400px]  rounded-[20px] space-y-2 p-2 ssm:p-5"
                >
                  <div className="flex">
                    <div className="mr-3 flexCenter size-9 ssm:size-[42px] rounded-full bg-[#EFF8FF]">
                      <img
                        src={doctorHatIcon?.src}
                        className="w-6 ssm:w-8"
                        alt="load..."
                      />
                    </div>
                    <div className="">
                      <p className="font-medium text-base ssm:text-lg">M.B.B.S.</p>
                      <p className="text-sm ssm:text-xs ">General practice</p>
                    </div>
                  </div>
                  <p className="text-sm flex  ">
                    <img
                      src={smallBuildingIcon?.src}
                      className="w-4 mr-3"
                      alt="load..."
                    />
                    Marathwada University
                  </p>
                  <p className="text-sm flex ">
                    <img
                      src={outlineGeoLocationIcon?.src}
                      className="w-4 mr-3"
                      alt="load..."
                    />
                    Aurangabad
                  </p>
                  <p className="text-sm flex ">
                    <img
                      src={smallHatIcon?.src}
                      className="w-4 mr-3"
                      alt="load..."
                    />
                    1980
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* ----------- //todo training and experience ------------- */}
          {/* <div className="w-full my-7 ">
            <h3 className=" my-3 text-2xl text-[#01549A] font-semibold">
              Training and Experience 
            </h3>
            <div className="w-full flex flex-col sm:flex-row gap-x-7 gap-y-5  my-7 ">
          --------educationl cards----------
              {[1, 2].map((item, index) => (
                <div
                  style={{ boxShadow: "0px 0px 4px 1px #00000040" }}
                  className="flex-1 max-w-[400px] rounded-[20px] space-y-2 p-2 ssm:p-5"
                >
                  <div className="flex">
                    <div className="mr-3 flexCenter size-9 ssm:size-[42px] rounded-full bg-[#EFF8FF]">
                      <img
                        src={doctorDeviceIcon?.src}
                        className=" w-6 ssm:w-8 "
                        alt="load..."
                      />
                    </div>
                    <div className="">
                      <p className="font-medium text-base ssm:text-lg">
                        Resident doctor Job title
                      </p>
                      <p className="text-sm ssm:text-xs">Practice Type</p>
                    </div>
                  </div>
                  <p className="text-sm flex  ">
                    <img
                      src={doctorNoteIcon?.src}
                      className="w-4 mr-3"
                      alt="load..."
                    />
                    Practice Specialty
                  </p>
                  <p className="text-sm flex ">
                    <img
                      src={hospitalOutlineIcon?.src}
                      className="w-4 mr-3"
                      alt="load..."
                    />
                    Hospital Name
                  </p>
                  <p className="text-sm flex ">
                    <img
                      src={outlineGeoLocationIcon?.src}
                      className="w-4 mr-3"
                      alt="load..."
                    />
                    City with State
                  </p>
                  <p className="text-sm flex ">
                    <img
                      src={doctorNoteIcon?.src}
                      className="w-4 mr-3"
                      alt="load..."
                    />
                    2024-05-16 to 2024-05-16
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          <button
            onClick={() => setAppointmentView(!appointmentView)}
            type="button"
            className="w-full sm:w-[90%] lg:hidden sm:max-w-[300px] my-2 cursor-pointer mx-auto py-3 text-center bg-[#01549A] text-white font-semibold rounded-[10px]"
          >
            Appointment Booking
          </button>
        </div>

        {/* <div className={` w-full  hidden    min-h-screen bg-black absolute  ${!appointmentView? " -top-[700%] " : " top-0 " }   lg:w-[90%]
           transition-all duration-150 ease-linear`}>
          <button onClick={()=>setAppointmentView(!appointmentView)} type="button" className="my-8 mx-auto rounded-[10px] px-6 py-3 bg-back text-white border-2 border-white font-medium"  >hello</button>
        </div> */}

        {/* -------------//todo appointement section --------*/}
        <div
          className={`w-full flex-1 lg:w-[90%] max-lg:absolute  max-lg:bg-white  ${
            !appointmentView ? " -top-[700%] " : " top-0  "
          }   transition-all duration-150 ease-linear`}
        >
          {/* -----//todo appointemnet part-------- */}

          <button
            type="button"
            onClick={() => setAppointmentView(!appointmentView)}
            className="lg:hidden absolute right-6 text-3xl font-semibold text-[#01549A] "
          >
            X
          </button>

          <div className="w-full max-lg:mt-16  border-2 boreder-black rounded-[20px] pt-4 pb-0 overflow-hidden ">
            <p className="text-lg font-medium  text-center">
              Book Your Appointment{" "}
            </p>
            <hr className="my-3" />

            <div className="px-2 sm:px-4 ">
              <p className="mb-2 font-medium ">Select office</p>
              <div className="w-full border-[1px] border-[#919196] rounded-xl flex ">
                <div className="flex-1 text-center space-y-1  py-2  ">
                  <p className="font-medium ">Hospital Name, Branch</p>
                  <p className="text-[13px]">
                    Plot No, 00 Ram Nagar, Near Mahadeo Temple,satpur,
                    Nashik-422008
                  </p>
                </div>
                <div className="w-[60px] flexCenter bg-[#F5F5F5] border-l-2 border-black">
                  <img
                    src={sliderArrowIcon?.src}
                    className="rotate-90 h-4 "
                    alt="load..."
                  />
                </div>
              </div>

              <div className="w-full flex items-center gap-x-4 bg-[#F0F0F0] my-7 px-3 rounded-[10px] p-1">
                <button
                  type="button"
                  className="bg-white p-1  cursor-pointer flex items-center rounded-md text-[#01549A]  text-sm font-medium"
                >
                  Book by e-Queue{" "}
                  <img
                    src={rotatingArrowIcon?.src}
                    className="ml-2"
                    alt="load..."
                  />
                </button>
                <button
                  type="button"
                  className="bg-[#F0F0F0] p-1 flex items-center rounded-md text-[#919196] text-sm  font-medium"
                >
                  Book by slot{" "}
                  <img
                    src={rotatingArrowIcon?.src}
                    className="hidden ml-2"
                    alt="load..."
                  />
                </button>
              </div>

              <div className="w-full flex flex-col items-center gap-y-5 ">
                {/* --------calendar cards------- */}
                <div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-[#01A400] ">
                  <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-[#01A400] font-medium ">
                    Today
                  </p>
                  <hr />
                  <div className="w-full flexCenter gap-x-5 py-4">
                    <div
                      style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                      className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
                    >
                      2
                    </div>
                    <div className="space-y-1">
                      <p className=" text-xs">Waiting Number</p>
                      <p className="text-[#01549A] font-semibold text-lg">
                        01:15 PM
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">
                    Given Time is approximate can vary by +/-60 Min
                  </p>
                </div>

                <div className="w-[95%] bg-[#F7FFF6] rounded-[10px] border-[1px] border-l-[5px] border-[#919196] ">
                  <p className="py-1 px-3 text-sm fonr-normal border-b-[1px]  border-[#919196] font-medium ">
                    Today
                  </p>
                  <hr />
                  <div className="w-full flexCenter gap-x-5 py-4">
                    <div
                      style={{ boxShadow: "0px 0px 4px 2px #00000040" }}
                      className="text-red-700  rounded-[10px] px-4 py-[6px] text-[22px] font-bold "
                    >
                      2
                    </div>
                    <div className="space-y-1">
                      <p className=" text-xs text-[#5A5D62]">Waiting Number</p>
                      <p className="text-[#01549A] font-semibold text-lg">
                        01:15 PM
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] w-full text-center text-[#5A5D62] mb-[8px]">
                    Given Time is approximate can vary by +/-60 Min
                  </p>
                </div>

                <div className=" w-[95%] flex justify-between items-center py-1 px-3  rounded-[10px] border-[1px] border-l-[5px] border-[#919196]">
                  <p className=" font-medium text-lg text-[#5A5D62] ">Future</p>
                  <img
                    src={calendarIcon?.src}
                    className="w-[22px]"
                    alt="load..."
                  />
                </div>
              </div>

              <div className="mt-5 py-3 flex flex-col items-center  w-full border-t-[1px] border-[#919196] space-y-2">
                <button
                  type="button"
                  className="w-[95%] border-[1px] border-[#01549A] py-2 text-center text-[#01549A] rounded-[10px] font-medium"
                >
                  Add to family doctor
                </button>
                <button
                  type="button"
                  className="w-[95%] max-lg:hidden py-3 text-center bg-[#01549A] text-white font-semibold rounded-[10px]"
                >
                  Appointment Booking
                </button>
                <button
                  type="button"
                  className="w-[95%] lg:hidden py-3 text-center bg-[#01549A] text-white font-semibold rounded-[10px]"
                >
                  Checkout
                </button>
                <p className="text-xs text-center font-normal">
                  No charges for appointment booking.
                </p>
              </div>
            </div>

            {/* <div className="my-5 space-y-6 w-full">
              <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
                <img src={clockIcon?.src} className="w-4" />
                <input
                  type="date"
                  className="text-[#B6B6B6] outline-none"
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
                <img src={clockIcon?.src} className="w-4" />
                <input
                  type="text"
                  className="text-[#B6B6B6] outline-none"
                  placeholder="08:00 AM"
                />
              </div>
              <div className="w-full rounded-md bg-white flex gap-x-3 px-7 py-5">
                <img src={clockIcon?.src} className="w-4" />
                <input
                  type="text"
                  className="text-[#B6B6B6] outline-none"
                  placeholder="Patient Name"
                />
              </div>
              <button
                type="button"
                className="w-full flexCenter  rounded-md bg-[#01549A] font-normal hover:bg-opacity-90 text-white px-7 py-5 cursor-pointer"
              >
                Book Appointement
              </button>
            </div>
            <div className="">
              <h6 className="text-[#023C77] font-medium">Select Service</h6>
              <div className="flex my-3 gap-x-5 ">
                {[1, 2, 3].map((item, index) => (
                  <span
                    key={index}
                    className="  px-2 py-1 rounded-md  hover:bg-[#01549A] hover:text-white cursor-pointer transitiona-all linear duration-300   text-[13px]   border-[1px] hover:border-transparent border-[#898989]"
                  >
                    Consult
                  </span>
                ))}
              </div>
            </div> */}
          </div>

          {/* -----------------social icons-------- */}
          {/* <div className="my-5 w-full  border-[1px] border-[#A7A7A7] rounded-md px-4 sm:px-7 py-5 ">
            <p className="text-[26px]  font-medium text-[#023C77]">
              Social Icon
            </p>
            <div className="my-2 flex flex-wrap gap-x-4 gap-y-2 ">
              <div className="w-10 h-10 rounded-full cursor-pointer hover:bg-[#01549A] bg-[#EFF8FF]"></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
