"use client";

import React from "react";
import BasicDetails from "./components/BasicDetails";
import ExtraDetails from "./components/ExtraDetails";
import TabsWithMaps from "./components/TabsWithMaps";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import AppointmentSection from "./components/AppointmentSection";
import { getDoctorDetails } from "./apis";
import { useQuery } from "@tanstack/react-query";

const DoctorDetailsModule = ({ doctorSlug = "", branchSlug = "" }) => {
  const {
    data: doctorInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["doctorDetails"],
    queryFn: async () => {
      const response = await getDoctorDetails({
        slug: doctorSlug,
        branch: branchSlug,
      });
      console.log({ response });
      return response.data; // Return doctor details directly
    },
    staleTime: 3000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full relative max-w-[1600px] mx-auto px-1 asm:px-3 lg:px-0 mt-8 flex flex-col lg:flex-row lg:justify-between justify-center lg:items-start gap-x-7">
      <div className="w-full lg:w-[68%] max-h-max">
        <BasicDetails basicInfo={doctorInfo} />
        <ExtraDetails />
        <TabsWithMaps />
        <div className="w-full my-7">
          <h3 className="my-3 text-[22px] sm:text-2xl text-[#01549A] font-semibold">
            Education
          </h3>
          <div className="w-full flex flex-col sm:flex-row gap-x-7 gap-y-5 my-7">
            {doctorInfo?.education_and_background?.map((item, index) => (
              <EducationCard key={index} eduDetails={item} />
            ))}
          </div>
        </div>
        <h3 className="my-3 text-[22px] sm:text-2xl text-[#01549A] font-semibold">
          Training and Experience
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-5">
          {doctorInfo?.experience?.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.job_title}
              institution={item.hospital_name}
              location={item.city}
              year={`${item.from_date} to ${item.to_date}`}
            />
          ))}
        </div>
      </div>
      <AppointmentSection doctorSlug={doctorSlug} branchSlug={branchSlug} />
    </div>
  );
};

export default DoctorDetailsModule;
