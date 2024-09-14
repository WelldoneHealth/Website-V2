
import React from "react";
// import Slider from "react-slick";
import DoctorSpeciality from "@/components/DoctorSpeciality/DoctorSpeciality";
import MobileAppBanner from "@/components/Layout/MobileAppBanner/MobileAppBanner";
import PrimaryBanner from "@/components/Layout/PrimaryBanner/PrimaryBanner";
import DoctorsAssociatedCard from "@/Utilities/Hospital&DoctorsAsso/DoctorsAssociatedCard";
import HospitalAssociatedCard from "@/Utilities/Hospital&DoctorsAsso/HospitalAssociatedCard";


export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full  min-h-screen">



      <PrimaryBanner/>



      <DoctorSpeciality />


      {/* ----------doctors associated with us-------- */}
      <div className="w-full my-20">
        <div className="my-7 -">
          <p className="text-3xl font-medium">Doctors associated with us </p>
        </div>
        <div className=" flex gap-x-6 ">
        {/* <Slider {...settings}> */}
          <DoctorsAssociatedCard />
          <DoctorsAssociatedCard />
          <DoctorsAssociatedCard />
          {/* </Slider> */}
        </div>
      </div>


      {/* ----------hospital associated with us-------- */}
      <div className="w-full my-20">
        <div className="my-7 -">
          <p className="text-3xl font-medium">
            Clinic/ Hospitals associated with us{" "}
          </p>
        </div>
        <div className=" flex gap-x-6 ">
          <HospitalAssociatedCard />
          <HospitalAssociatedCard />
          <HospitalAssociatedCard />
        </div>
      </div>


      <MobileAppBanner />



    </div>
  );
}
