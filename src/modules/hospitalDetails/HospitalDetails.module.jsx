"use client";

import React, { useState } from "react";
import dragon from "@/asset/Images/dragon.jpg";
import hospitalLogo from "@/asset/Icons/eachHospitalLogo.svg";
import OfficeSafetyPrecautions from "@/Utilities/smallComponents/OfficeSafetyPrecautions";
import Banner from "./components/Banner";
import DoctorsList from "./components/DoctorsList";
import TimingSection from "./components/TimingSection";
import ServicesAvailable from "./components/ServicesAvailable";
import StatementSection from "./components/StatementSection";
import OtherServices from "./components/OtherServices";
import { getHospitalDetails } from "./apis";
import { useQuery } from "@tanstack/react-query";
import Branches from "./components/Branches";

const HospitalDetailsModule = ({ slug }) => {
  const {
    data: hospitalInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hospitalDetails", slug],
    queryFn: async () => {
      const response = await getHospitalDetails({
        slug,
      });
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const convenienceServices = [];

  if (hospitalInfo?.type_of_establishment[0]) {
    const data = hospitalInfo?.type_of_establishment[0];
    if (data?.outpatient_type) {
      convenienceServices.push(...data?.outpatient_type);
    }
    if (data?.laboratory_type) {
      convenienceServices.push(...data?.laboratory_type?.split(","));
    }
    if (data?.inpatient_type) {
      convenienceServices.push(...data?.inpatient_type?.split(","));
    }
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto px-1  asm:px-3 lg:px-0 ">
      <Banner
        bannerImage={hospitalInfo?.page_setup[0]?.banner_image ?? dragon?.src}
        logoImage={hospitalInfo?.page_setup[0]?.page_logo ?? hospitalLogo?.src}
      />
      <div className="w-full flex flex-col lg:flex-row gap-x-7 px-2 lg:px-0">
        <div className={`w-full py-1 lg:w-[68%]`}>
          <div className="mt-32 mb-2 flex justify-between items-center">
            <h3 className="text-[#01549A] font-medium text-3xl">
              {hospitalInfo?.establishment_name ?? ""},{" "}
              {hospitalInfo?.branch ?? ""}
            </h3>
          </div>
          <p className="my-3 text-sm">
            {/* Dr. B.D.Ahirrao Memorial Hospital (Baba Ahirrao) Dhule Road, 424304. */}
          </p>
          {hospitalInfo?.available_branches?.length > 0 && (
            <Branches branches={hospitalInfo?.available_branches} />
          )}
          {hospitalInfo?.doctors?.length > 0 && (
            <DoctorsList doctors={hospitalInfo?.doctors ?? []} branch={slug} />
          )}
          <TimingSection timings={hospitalInfo?.timing} />
          <ServicesAvailable services={convenienceServices} />
          <OtherServices
            services={
              hospitalInfo?.type_of_establishment[0]
                ? hospitalInfo?.type_of_establishment[0]?.others?.split(",")
                : []
            }
          />
        </div>
        <div className="lg:my-7 flex-1 w-full lg:w-[90%]">
          <OfficeSafetyPrecautions />
          <StatementSection />
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailsModule;
