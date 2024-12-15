import React from "react";
import DoctorSpeciality from "@/components/DoctorSpeciality/DoctorSpeciality";
import MobileAppBanner from "@/components/Layout/MobileAppBanner/MobileAppBanner";
import PrimaryBanner from "@/components/Layout/PrimaryBanner/PrimaryBanner";
import DoctoAssociateSlider from "@/components/DoctorAssociatedSlider/DoctorAssociatedSlider";
import HospitalAssociatedSlider from "@/components/HospitalAssociatedSlider/HospitalAssociatedSlider";
import NavbarHero from "@/components/Layout/PrimaryBanner/HeroSection";
import ServicesSection from "@/components/DoctorSpeciality/ServicesSection";
import DoctorsSection from "@/components/DoctorAssociatedSlider/DoctorSlider";
import Specialties from "@/components/Specialties/Specialties";
import FacilitiesSection from "@/components/HospitalAssociatedSlider/HospitalSlider";
const HomeModule = () => {
  return (
    <div className=" w-full mx-auto max-w-[1600px]  min-h-screen px-2  asm:px-3 lg:px-0 ">
      {/* <PrimaryBanner /> */}
      <NavbarHero />

      {/* <DoctorSpeciality /> */}
      <ServicesSection />

      {/* -----------doctor slider----------- */}
      <DoctorsSection />

      <Specialties />

      {/* -----hopital slider------- */}
      {/* <HospitalAssociatedSlider /> */}
      <FacilitiesSection />

      <MobileAppBanner />
    </div>
  );
};

export default HomeModule;





