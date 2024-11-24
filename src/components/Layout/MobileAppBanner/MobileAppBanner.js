import {
  APPLE_STORE,
  GOOGLE_PLAY,
  MOBILE_BANNER,
} from "@/utils/ImageConstants";

import React from "react";
import mobileBanner2 from "@/asset/Images/mobileBanner2.png";
import Link from "next/link";

export default function MobileAppBanner() {
  const fetauresInfo = [
    {
      boldText: "Instant Booking:",
      text: "Find and book appointments in just a few taps.",
    },
    {
      boldText: "24/7 Access:",
      text: "Manage appointments anytime, anywhere.",
    },
    {
      boldText: "Reminders & Alerts:",
      text: "Get notified about upcoming appointments and health tips.",
    },
  ];

  return (
    <div className="w-full max-w-[1500px] my-7 p-2 sm:py-9 sm:px-6 lg:px-0 flex justify-center items-start xl:items-end  lg:flexBetween flex-col  lg:flex-row ">
      <div className="w-full lg:w-[62%] order-2 lg:order-1">
        <h3 className="text-[19px] ssm:text-[22px] asm:text-[25px]  sm:text-[34px] 2xl:text-[38px] font-medium leading-tight">
          Your Health, One Tap Away!
        </h3>
        <p className=" my-5 md:my-5 text-sm ssm:text-base sm:text-xl w-[90%] lg:w-[85%] lg:text-[19px] font-medium  leading-tight">
          Book doctor appointments faster and manage your health on the go with
          our app.
        </p>
        <div className="my-6 md:my-10 lg:my-10 space-y-2 ">
          <p className=" font-semibold asm:text-lg msm:text-xl md:text-[22px] 2xl:text-2xl ">
            Download Now for Instant Access
          </p>

          {fetauresInfo.map((item, index) => (
            <p key={index} className="max-ssm:text-sm sm:text-lg font-normal">
              <span className="font-semibold">{item.boldText} </span>
              {item.text}{" "}
            </p>
          ))}
        </div>

        <div className=" flex gap-x-3 msm:gap-x-5 mt-2 ">
          <button className="relative" type="button">
            <Link
              href="https://play.google.com/store/apps/details?id=com.welldone.welldone_app&hl=en_IN"
              passHref
              target="_blank"
              className="block w-[150px] sm:w-[180px] lg:h-[60px] "
            >
              <img className="w-full h-full" src={GOOGLE_PLAY} />{" "}
            </Link>
          </button>

          <button className=" relative" type="button">
            <Link
              href="https://play.google.com/store/apps/details?id=com.welldone.welldone_app&hl=en_IN"
              passHref
              target="_blank"
              className="block w-[150px] sm:w-[180px] lg:h-[60px]"
            >
              <img className="w-full h-full" src={APPLE_STORE} />{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className=" w-[90%]  mx-auto msm:w-[60%] lg:w-[40%] order-1 lg:order-2 max-w-[600px]   ">
        <img
          className="w-full -mb-3 msm:-mb-6 lg:-mb-32 xl:-mb-14"
          src={mobileBanner2?.src}
        />
      </div>

      {/* <div className=" w-[90%]  mx-auto msm:w-[60%] lg:w-[40%] order-1 lg:order-2 max-w-[600px]   ">
        <img className="w-full -mb-3 msm:-mb-6 lg:-mb-32 xl:-mb-14" src={mobileBanner2?.src} />
      </div> */}
    </div>
  );
}
