import { HEART_ICON } from "@/Utilities/ImageConstants";
import Image from "next/image";
import React from "react";
import pediatricsIcon from "@/asset/Icons/pediatrics.svg"
 import cardiologyIcon from "@/asset/Icons/cardiologyIcon.svg";
import orthopaedicIcon from "@/asset/Icons/orthopaedicIcon.svg";
import neurologistIcon from "@/asset/Icons/neurologistIcon.svg";
import gynaecologistIcon from "@/asset/Icons/gynaecologistIcon.svg";
import careIcon from "@/asset/Icons/careIcon.svg";




export const IconBox = ({iconImage,iconName}) => {
  return (
    <div className="">
    {/* <div className="bg-[#EFF8FF] p-6 rounded-full ">
    <span className=" relative w-[71px] h-[71px] inline-block">
                <Image fill src={pediatricsIcon?.src} />
              </span>
    </div>
    <h5 className="text-lg font-normal text-center">Dentist</h5> */}
    <div className="bg-[#EFF8FF] p-6 rounded-full ">
    <span className=" relative  h-[71px] flexCenter">
                <img className="h-full" src={iconImage} alt="load..." />
              </span>
    </div>
    <h5 className="text-lg font-normal text-center  my-2">{iconName}</h5>

    </div>
  );
};

export default function DoctorSpeciality() {
  const iconData = [
    { image: pediatricsIcon, text: "Pediatrics" },
    { image: cardiologyIcon, text: "Cardiology" },
    { image: orthopaedicIcon, text: "Orthopaedic" },
    { image: neurologistIcon, text: "Neurologist" },
    { image: gynaecologistIcon, text: "Gynecologist" },
    { image: careIcon, text: "Genital Care" },
    { image: pediatricsIcon, text: "Pediatrics" }
  ];
  return (
    <section className="w-full my-14 mx-auto">
      <div className="flexBetween text-3xl font-medium">
        <p className=" ">Doctor Speciality</p>
        <div className="text-[#01549A] font-normal cursor-pointer">See All</div>
      </div>
      <div className="w-full my-8 flex gap-x-16 overflow mx-auto   justify-center">
     
{/* <IconBox/>
<IconBox/>
<IconBox/>
<IconBox/>
<IconBox/>
<IconBox/>
<IconBox/> */}

 {iconData.map((item,index)=><IconBox key={index}  iconImage={item.image?.src} iconName={item.text}  />)}


      </div>
    </section>
  );
}
