import React from "react";
import DoctorSpeciality from "@/components/DoctorSpeciality/DoctorSpeciality";
import MobileAppBanner from "@/components/Layout/MobileAppBanner/MobileAppBanner";
import PrimaryBanner from "@/components/Layout/PrimaryBanner/PrimaryBanner";
import DoctoAssociateSlider from "@/components/DoctorAssociatedSlider/DoctorAssociatedSlider";
import HospitalAssociatedSlider from "@/components/HospitalAssociatedSlider/HospitalAssociatedSlider";
const HomeModule = () => {
  return (
    <div className=" w-full mx-auto max-w-[1600px]  min-h-screen px-2  asm:px-3 lg:px-0 ">
      <PrimaryBanner />

      {/* <DoctorSpeciality /> */}

      {/* -----------doctor slider----------- */}
      <DoctoAssociateSlider />

      {/* -----hopital slider------- */}
      {/* <HospitalAssociatedSlider /> */}

      <MobileAppBanner />
    </div>
  );
};

export default HomeModule;
