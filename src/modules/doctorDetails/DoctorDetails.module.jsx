
"use client"

import React, { useEffect, useState } from "react";
import BasicDetails from "./components/BasicDetails";
import ExtraDetails from "./components/ExtraDetails";
import TabsWithMaps from "./components/TabsWithMaps";
import EducationCard from "./components/EducationCard";
import ExperienceCard from "./components/ExperienceCard";
import AppointmentSection from "./components/AppointmentSection";
import { getDoctorDetails, getEqueue } from "./apis";
import { useQuery } from "@tanstack/react-query";
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
  // const [doctorInfo,setDoctorInfo]=useState(null)


  // useEffect(() => {
  //   const fetchDoctorDetails = async () => {
  //     try {
  //       const response = await getDoctorDetails("rakesh", "sakri");
  //       console.log("-----",response.data); 
  //       setDoctorInfo(response.data)
  //        // or just `console.log(response)` if you want the entire response object
  //     } catch (error) {
  //       console.error("Error fetching doctor details:", error);
  //     }
  //   };
  
  //   fetchDoctorDetails();
  // }, []);



  const fetchDoctorDetails = async () => {
    try {
      const response = await getDoctorDetails("rakesh", "sakri");
      // console.log("the function is running")
      // console.log("the response is---",response)
      return response.data; // Return the doctor details from the API response
    } catch (error) {
      throw new Error("Error fetching doctor details:", error);
    }
  };


  const { data: doctorInfo, isLoading, error } = useQuery({
    queryKey: ["doctorDetails"], // Unique key for caching and refetching
    queryFn: fetchDoctorDetails, // Fetch function
    enabled: true, // Ensures the query is always enabled and runs on mount
    staleTime: 3000, // Time before the data is considered stale (optional)
  });                 



  return (
    <div className="w-full relative max-w-[1600px] mx-auto px-1   asm:px-3 lg:px-0  mt-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7">
      <div className="w-full lg:w-[68%] max-h-max">
        <BasicDetails basicInfo={doctorInfo} />
        <ExtraDetails />
        <TabsWithMaps />
        <div className="w-full my-7">
          <h3 className="my-3 text-[22px] sm:text-2xl text-[#01549A] font-semibold">
            Education
          </h3>

          <div className="w-full flex flex-col sm:flex-row gap-x-7 gap-y-5  my-7 ">
            { doctorInfo   &&  doctorInfo?.education_and_background.map((item, index) => (
              <EducationCard
                key={index}
                eduDetails={item}

              />
            ))}
          </div>
        </div>
        <h3 className="my-3 text-[22px] sm:text-2xl text-[#01549A] font-semibold">
          Training and Experience
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-5">
          { doctorInfo &&   doctorInfo?.experience.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.job_title}
              institution={item.hospital_name}
              location={item.city}
              year={` ${item.from_date} to ${item.to_date} ` }
            />
          ))}
        </div>
      </div>
      <AppointmentSection getting_Equeue={getEqueue} />
    </div>
  );
};

export default DoctorDetailsModule;
