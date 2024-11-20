import React from "react";
import pediatricsIcon from "@/asset/Icons/pediatrics.svg";
import cardiologyIcon from "@/asset/Icons/cardiologyIcon.svg";
import orthopaedicIcon from "@/asset/Icons/orthopaedicIcon.svg";
import neurologistIcon from "@/asset/Icons/neurologistIcon.svg";
import gynaecologistIcon from "@/asset/Icons/gynaecologistIcon.svg";
import careIcon from "@/asset/Icons/careIcon.svg";
import pediatric2 from "@/asset/Icons/pediatric2.svg";
import  gas  from "@/asset/Icons/gas.svg";
import  uro  from "@/asset/Icons/uro.svg";
import  dentist2  from "@/asset/Icons/dentist2.svg";
import  lungs2  from "@/asset/Icons/lungs2.svg";
import  neurology  from "@/asset/Icons/neurology.svg";
import  generalMedicine  from "@/asset/Icons/generalMedicine.svg";
import  otolary  from "@/asset/Icons/otolary.svg";
import   hiv from "@/asset/Icons/hiv.svg";
import  allergy  from "@/asset/Icons/allergy.svg";
import infectious   from "@/asset/Icons/infectious.svg";
import  dermatology2  from "@/asset/Icons/dermatology2.svg";



export default function DoctorSpeciality() {

  const speacilaityData=[ 
    {
      image : dermatology2,
      text: "Dermatology "
    },  {
      image : neurology,
      text: " Neurology"
    },  {
      image : dentist2,
      text: "Dentist "
    }, {
      image : pediatric2,
      text: " Paediatrics"
    },  {
      image : hiv,
      text: " HIV/AIDS"
    }, {
      image : uro,
      text: "Urology "
    }, {
      image : allergy,
      text: " Allergy"
    }, 
  ] 


  return (
    <section className="w-full my-14 mx-auto px-1 ">
      <div className="flexBetween text-base ssm:text-xl sm:text-2xl lg:text-2xl font-medium">
        <p className=" ">Doctor Speciality</p>
        <div className="text-[#01549A] font-normal cursor-pointer hover:underline">See All</div>
      </div>
      <div className="w-full my-8 flex gap-x-7 asm:gap-x-16 gap-y-3 overflow  mx-auto   justify-center flex-wrap">
        {speacilaityData.map((item, index) => (
          <IconBox
            key={index}
            iconImage={item.image?.src}
            iconName={item.text}
          />
        ))}
      </div>
    </section>
  );
}



export const IconBox = ({ iconImage, iconName }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#EFF8FF] flex items-center justify-center  rounded-full  size-[50px] ssm:size-[60px]  asm:size-[82px]  lsm:size-[100px]  ">        
          <img className="w-[70%] " src={iconImage} alt="load.." />      
      </div>
      <h5 className="text-sm ssm:text-base asm:text-lg font-normal text-center  my-2">{iconName}</h5>
    </div>
  );
};


// export const IconBox = ({ iconImage, iconName }) => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="bg-[#EFF8FF] flex items-center justify-center flex-wrap  rounded-full ">  
//         <span>
//           <img className=" h-[35px] ssm:h-[50px] lg:h-[46px]  2xl:h-[60px] " src={iconImage} alt="load.." />
//           </span>  
//       </div>
//       <h5 className="text-lg font-normal text-center  my-2">{iconName}</h5>
//     </div>
//   );
// };


