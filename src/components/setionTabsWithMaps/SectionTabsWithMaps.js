import React from "react";
import phoneCallIcon from "@/asset/Icons/phoneCall.svg";
import hospitalOutlineIcon from "@/asset/Icons/hospitalOutline.svg";
import ratingIcon from "@/asset/Icons/rating.svg";
import outlineClockIcon from "@/asset/Icons/outlineClock.svg";
import lunchBoxIcon from "@/asset/Icons/lunchBox.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";

export default function SectionTabsWithMaps({ tab }) {
  return (
    <div className="mt-7 mb-2 flex flex-col">
    <div className=" w-full flex my-2">
      <div className="w-full ">
        <h3 className=" text-2xl text-[#01549A] font-semibold">
          Dr. B.D. Ahirrao Memorial Hospital, Sakri
        </h3>
        <p className="my-3 text-sm flex ">
          <img
            src={hospitalOutlineIcon?.src}
            className="w-4 mr-3"
            alt="load..."
          />
          Dr. B.D.Ahirrao Memorial Hospital (Baba Ahirrao) Dhule Road, 424304
        </p>
        <div className="my-2 bg-[#F5F5F5] flex max-w-max gap-x-2 text-xs font-medium px-4 py-1 rounded-[20px]">
          <div className="flex gap-x-1">
            <img src={ratingIcon?.src} className="w-[14px]" alt="load..." />
            <img src={ratingIcon?.src} className="w-[14px]" alt="load..." />
            <img src={ratingIcon?.src} className="w-[14px]" alt="load..." />
            <img src={ratingIcon?.src} className="w-[14px]" alt="load..." />
            <img src={ratingIcon?.src} className="w-[14px]" alt="load..." />
            <img src={ratingIcon?.src} className="w-[14px]" alt="load..." />
          </div>{" "}
          <span>4.8 (234 Review)</span>{" "}
          <img
            src={sliderArrowIcon?.src}
            className="mx-1 w-[6px] cursor-pointer rotate-90"
            alt="load..."
          />
        </div>
      </div>
      <div className="">
        <div className="w-10 h-10 text-2xl flexCenter rounded-full bg-[#01549A] text-white font-medium">
          {/* <img src={phoneCallIcon?.src} className=""  alt="load..." /> */}
          {tab}
        </div>
        {/* <p>Voice Call</p> */}
      </div>
      </div>
      <hr />

      {/* ---------------timings---------- */}
      <div className="w-full p-3  ">
              <p className="font-medium text-lg"> Timings</p>
              <div className="my-4 flex gap-x-3 overflow-x-auto whitespace-nowrap custom-scrollbar-hide">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                  <div key={index} className="border-[1px] border-[#CFCFCF] rounded-[10px] overflow-hidden flex-shrink-0">
                    <p className=" w-full text-sm bg-[#EFF8FF] py-1 font-medium text-center">
                      Monday
                    </p>
                    <div className="w-full p-2 space-y-1">
                      <div className="flex gap-x-2 text-xs font-normal">
                        <img
                          src={outlineClockIcon?.src}
                          className=" w-[14px]"
                          alt="load..."
                        />
                        09:00 AM - 08:00 PM
                      </div>
                      <div className="flex gap-x-2 text-xs font-normal">
                        <img
                          src={lunchBoxIcon?.src}
                          className="w-[12px] "
                          alt="load..."
                        />
                        09:00 AM - 08:00 PM
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
{/* ------------maps---------------- */}
<div className="w-full my-2 h-[320px] rounded-[20px] overflow-hidden">
<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13900.252752700126!2d79.95980878916262!3d29.42694955218887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0dd9bfc5bd7ed%3A0x516f7f48dcd10c4a!2sSundungra%2C%20Uttarakhand%20262528!5e0!3m2!1sen!2sin!4v1726923728002!5m2!1sen!2sin"
    //   width="600"
    //   height="450"
      className="w-full h-full"
      style={{ border: 0 }}

    //   loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

    </div>
  );
}
