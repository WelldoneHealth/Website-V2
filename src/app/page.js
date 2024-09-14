import DoctorSpeciality from "@/components/DoctorSpeciality/DoctorSpeciality";
import MobileAppBanner from "@/components/Layout/MobileAppBanner/MobileAppBanner";
import PrimaryBanner from "@/components/Layout/PrimaryBanner/PrimaryBanner";
import DoctorsAssociatedCard from "@/Utilities/Hospital&DoctorsAsso/DoctorsAssociatedCard";
import HospitalAssociatedCard from "@/Utilities/Hospital&DoctorsAsso/HospitalAssociatedCard";
import {
  DOCTOR_LOGO,
  HOSPITAL_IMAGE1,
  HOSPITAL_LOGO,
  RATING,
  REDGEO_LOCATION,
} from "@/Utilities/ImageConstants";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="w-full  min-h-screen">
      {/* <PrimaryBanner/> */}
      {/* <DoctorSpeciality /> */}








      {/* ----------doctors associated with us-------- */}
      <div className="w-full my-20">
        <div className="my-7 -">
          <p className="text-3xl font-medium">Doctors associated with us </p>
        </div>
        <div className=" flex gap-x-6 ">
          <DoctorsAssociatedCard />
          <DoctorsAssociatedCard />
          <DoctorsAssociatedCard />
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
