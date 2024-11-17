import React from "react";
import DoctorSpeciality from "@/components/DoctorSpeciality/DoctorSpeciality";
import MobileAppBanner from "@/components/Layout/MobileAppBanner/MobileAppBanner";
import PrimaryBanner from "@/components/Layout/PrimaryBanner/PrimaryBanner";
import DoctoAssociateSlider from "@/components/DoctorAssociatedSlider/DoctorAssociatedSlider";
import HospitalAssociatedSlider from "@/components/HospitalAssociatedSlider/HospitalAssociatedSlider";
const HomeModule = () => {
  return (
    <div>
      {" "}
      <div className=" w-full  min-h-screen ">
        <PrimaryBanner />

        <DoctorSpeciality />

        {/* -----------doctor slider----------- */}
        <DoctoAssociateSlider />

        {/* -----hopital slider------- */}
        <HospitalAssociatedSlider />

        <MobileAppBanner />
      </div>
    </div>
  );
};

export default HomeModule;
