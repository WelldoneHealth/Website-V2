
import React from "react";
// import Slider from "react-slick";
import DoctorSpeciality from "@/components/DoctorSpeciality/DoctorSpeciality";
import MobileAppBanner from "@/components/Layout/MobileAppBanner/MobileAppBanner";
import PrimaryBanner from "@/components/Layout/PrimaryBanner/PrimaryBanner";
import DoctorsAssociatedCard from "@/Utilities/Hospital&DoctorsAsso/DoctorsAssociatedCard";
import HospitalAssociatedCard from "@/Utilities/Hospital&DoctorsAsso/HospitalAssociatedCard";
import DoctoAssociateSlider from "@/components/DoctorAssociatedSlider/DoctorAssociatedSlider";
import HospitalAssociatedSlider from "@/components/HospitalAssociatedSlider/HospitalAssociatedSlider";


export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <div className=" w-full  min-h-screen ">



      {/* <PrimaryBanner/> */}

      {/* <DoctorSpeciality /> */}

{/* -----------doctor slider----------- */}
      <DoctoAssociateSlider/>   

{/* -----hopital slider------- */}
      <HospitalAssociatedSlider/>

      {/* <MobileAppBanner /> */}



    </div>
  );
}
