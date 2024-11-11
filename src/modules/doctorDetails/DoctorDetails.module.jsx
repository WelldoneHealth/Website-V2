import React from "react";
import BasicDetails from "./components/BasicDetails";
import ExtraDetails from "./components/ExtraDetails";
import TabsWithMaps from "./components/TabsWithMaps";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import AppointmentSection from "./components/AppointmentSection";
const educationalData = [
  {
    eduType: "Bachelor of Surgery (MBBS)",
    eduCollage: "Harvard Medical School",
  },
  {
    eduType: "Master of Surgery (MS)",
    eduCollage: "Indiana University School of Medicine",
  },
];
const trainingAndExperienceData = [
  {
    year: "2009",
    title: "Bachelor's in Medicine (MBBS)",
    institution: "University of Pune",
    location: "Pune, Maharashtra",
  },
];
const DoctorDetailsModule = () => {
  return (
    <div className="w-full relative max-w-[1600px] mx-auto px-1   asm:px-3 lg:px-0  mt-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7">
      <div className="w-full lg:w-[68%] max-h-max">
        <BasicDetails />
        <ExtraDetails />
        <TabsWithMaps />
        <div className="w-full my-7">
          <h3 className="my-3 text-[22px] sm:text-2xl text-[#01549A] font-semibold">
            Education
          </h3>

          <div className="w-full flex flex-col sm:flex-row gap-x-7 gap-y-5  my-7 ">
            {educationalData.map((item, index) => (
              <EducationCard
                key={index}
                eduType={item.eduType}
                eduCollage={item.eduCollage}
              />
            ))}
          </div>
        </div>
        <h3 className="my-3 text-[22px] sm:text-2xl text-[#01549A] font-semibold">
          Training and Experience
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-5">
          {trainingAndExperienceData.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.title}
              institution={item.institution}
              location={item.location}
              year={item.year}
            />
          ))}
        </div>
      </div>
      <AppointmentSection />
    </div>
  );
};

export default DoctorDetailsModule;
