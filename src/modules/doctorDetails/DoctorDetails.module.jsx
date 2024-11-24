"use client";

import React, { useState } from "react";
import BasicDetails from "./components/BasicDetails";
import ExtraDetails from "./components/ExtraDetails";
import TabsWithMaps from "./components/TabsWithMaps";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import AppointmentSection from "./components/AppointmentSection";
import { getDoctorDetails } from "./apis";
import { useQuery } from "@tanstack/react-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const DoctorDetailsModule = ({ doctorSlug = "", branchSlug = "" }) => {
  const [showAppointmentDrawer, setShowAppointmentDrawer] = useState(false);

  const closeDrawer = () => {
    setShowAppointmentDrawer(false);
  };

  const {
    data: doctorInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["doctorDetails", doctorSlug, branchSlug],
    queryFn: async () => {
      const response = await getDoctorDetails({
        slug: doctorSlug,
        branch: branchSlug,
      });
      return response.data; // Return doctor details directly
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full relative max-w-[1600px] md:mx-auto px-1 asm:px-3 lg:px-[2rem] mt-[88px] flex flex-col lg:flex-row lg:justify-between justify-center lg:items-start gap-x-7">
      <div className="w-full lg:w-[68%] max-h-max">
        <BasicDetails basicInfo={doctorInfo} />
        <ExtraDetails extraDocInfo={doctorInfo} />
        <TabsWithMaps officeInfo={doctorInfo?.establishment} />
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
              speciality={item.practice_speciality}
              type={item.practice_type}
              institution={item.hospital_name}
              location={item.city}
              year={`${item.from_date} to ${item.to_date}`}
            />
          ))}
        </div>
      </div>

      <div className="hidden lg:w-[32%] lg:block">
        <AppointmentSection
          doctorSlug={doctorSlug}
          branchSlug={branchSlug}
          doctorInfo={doctorInfo}
        />
      </div>

      {/* Fixed Button for Small Screens */}
      <div className="p-3">
        <div className="lg:hidden fixed bottom-4  left-1/2 transform -translate-x-1/2 w-full  px-4 py-2 rounded-full shadow-lg">
          <button
            onClick={() => {
              setShowAppointmentDrawer(true);
            }}
            className="w-full sm:w-auto bg-[#01549A] py-2 rounded-lg text-white"
          >
            Book Appointment
          </button>
        </div>
      </div>
      <Drawer
        open={showAppointmentDrawer}
        onClose={closeDrawer}
        // direction="bottom"
      >
        <DrawerContent className="w-full">
          <DrawerClose onClick={closeDrawer} />
          <DrawerHeader>
            <DrawerTitle>Book Your Appointment</DrawerTitle>
          </DrawerHeader>
          <AppointmentSection
            doctorSlug={doctorSlug}
            branchSlug={branchSlug}
            doctorInfo={doctorInfo}
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DoctorDetailsModule;
