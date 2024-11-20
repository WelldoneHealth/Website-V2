import React from "react";
import languageIcon from "@/asset/Icons/language.svg";
import doctorBagIcon from "@/asset/Icons/doctorBag.svg";
import doctorBagIcon2 from "@/asset/Icons/doctorBag2.svg";
import cashCounterIcon from "@/asset/Icons/cashCounter.svg";
import ratingIcon from "@/asset/Icons/rating.svg";
import femaleIcon from "@/asset/Icons/female.svg";



const ExtraDetails = ({extraDocInfo}) => {
  const extraDetails = [
    { img: languageIcon, text:  extraDocInfo?.language?.length >0 ? extraDocInfo?.language.join(', ') :   "English , हिंदी" },
    { img: doctorBagIcon, text: extraDocInfo?.total_experience ? `${Number(extraDocInfo?.total_experience)}+ Years Experience` :  "Experience not available" },
    { img: doctorBagIcon2, text: "No charges for booking" },
    { img: cashCounterIcon, text: "Cash on counter" },
    // { img: ratingIcon, text: "4.8 (234 Reviews)" },
    { img: femaleIcon, text: extraDocInfo?.gender ? extraDocInfo?.gender : "N/A" },
  ];
  return (
    <div className="my-7 w-full flex max-lg:overflow-x-auto max-lg:whitespace-nowrap gap-x-6 py-4 border-y-2 border-[#EFEFEF]">
      {extraDetails.map((item, index) => (
        <div
          key={index}
          className="flex-1   flex flex-col justify-center items-center gap-y-2"
        >
          <div className="flex justify-center items-center rounded-full bg-[#EFF8FF] h-9 w-9">
            <img src={item.img?.src} className="w-4" alt="Icon" />
          </div>
          <p className="text-center line-clamp-2 text-sm font-normal">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExtraDetails;
