import React from "react";
import clockIcon from "@/asset/Icons/clock.svg";
import doctorImage from "@/asset/Images/primaryBannerDoctor.png";
import greyGeoLocationIcon from "@/asset/Icons/greyGeoLocation.svg";
import primaryBg from "@/asset/Images/BG.png"

//  import { CLOCK_LOGO, LOCATION_ICON } from "@/Utilities/ImageConstants";

export default function PrimaryBanner() {
  console.log("--", clockIcon);

  return (
    <section  style={{ backgroundImage: `url(${primaryBg?.src})` }} className="w-full my-28  px-5 bg-cover bg-center bg-no-repeat relative ">
      <h2 className="  px-1 text-[#01549A] text-[42px] font-medium my-14">
        Book Doctor Appointments in Seconds
        <img 
          className="inline-block mx-5 w-[40px] h-[40px]"
          src={clockIcon?.src}
          //   width={30}
          //   height={30}
          alt="load..."
        />
      </h2>

      <div className="w-[95%] mx-auto flex justify-between bg-[#01549A] rounded-3xl h-[390px] items-center ">
        {/* ---------first part--------- */}
        <div className="w-[60%] mx-auto" >
          <p className="text-white w-full max-w-[680px] text-3xl">
            Find the best doctors near you and secure your appointment instantly
            – no waiting, no hassle.
          </p>
          <div className="flex gap-x-3 my-7  ">
            <div className="rounded-3xl bg-white flexCenter gap-x-4 px-3 py-1 min-w-[120px]">
              <img src={greyGeoLocationIcon?.src} className="w-[14px] h-[20px] " />
              <div className="flex flex-col ">
                <span className="text-xs font-xs text-[#919196]">Location</span>
                <span className="font-medium text-base">India</span>
              </div>
            </div>
            <input
              type="text"
              className="w-[60%] px-6 py-2 rounded-3xl text-[#919196] font-medium"
              placeholder="Search doctor, clinic, hospital near by you"
            />
          </div>
        </div>

        {/* ---------second portion------ */}
        <div className="w-[33%] flex items-baseline relative h-full -mr-7">
          <img
            src={doctorImage?.src}
            className="w-full absolute bottom-0 object-cover h-[550px] "
            alt="load..."
          />
        </div>
      </div>
    </section>
  );
}
