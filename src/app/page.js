
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
    <div className=" w-full  min-h-screen">



      {/* <PrimaryBanner/> */}



      <DoctorSpeciality />


      {/* ----------doctors associated with us-------- */}
       {/* <div className="w-full my-20">
        <div className="my-7 -">
          <p className="text-3xl font-medium">Doctors associated with us </p>
        </div>
        <div className="w-full overflow-x-auto flex gap-x-6 ">
     
          <DoctorsAssociatedCard />
          <DoctorsAssociatedCard />
          <DoctorsAssociatedCard />
        
        </div>
      </div>  */}


      <DoctoAssociateSlider/>   

      <HospitalAssociatedSlider/>



      {/* ----------hospital associated with us-------- */}
      {/* <div className="w-full my-20">
        <div className="my-7 -">
          <p className="text-3xl font-medium">
            Clinic/ Hospitals associated with us
          </p>
        </div>
        <div className="w-full overflow-x-auto flex  gap-x-6 ">
          <HospitalAssociatedCard />
           <HospitalAssociatedCard />
         
        </div>
      </div> */}


      <MobileAppBanner />



    </div>
  );
}
