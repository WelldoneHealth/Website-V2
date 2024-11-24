import React from "react";
import singlePractionerIcon from "@/asset/Icons/singlePractioner.svg";
import nursingHomeIcon from "@/asset/Icons/nursingHome.svg";
import pathologyIcon from "@/asset/Icons/pathology.svg";
import polyClinicIcon from "@/asset/Icons/polyclinic.svg";
import usgIcon from "@/asset/Icons/usg.svg";
import xRayIcon from "@/asset/Icons/xRay.svg";
import dayCareIcon from "@/asset/Icons/dayCare.svg";
const servicesAvailable = [
  {
    serviceText: "Single Practitioner",
    img: singlePractionerIcon,
  },
  {
    serviceText: "Polyclinic ",
    img: polyClinicIcon,
  },
  {
    serviceText: "Day Care Center ",
    img: dayCareIcon,
  },
  {
    serviceText: " Nursing Home",
    img: nursingHomeIcon,
  },
  {
    serviceText: " X Ray",
    img: xRayIcon,
  },
  {
    serviceText: " Ultra Sound",
    img: usgIcon,
  },
  {
    serviceText: " Pathology",
    img: pathologyIcon,
  },
];

const ServicesAvailable = ({ services }) => {
  return (
    <div className="my-12 w-full  rounded-[20px]  px-4 py-5 space-y-5">
      <p className="text-[20px]  font-medium ">
        Convenience services available​
      </p>
      <div className="w-full flex gap-x-4 items-center flex-wrap gap-y-5">
        {services?.map((item, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="capitalize py-[10px] px-4  flex justify-center items-center gap-x-2 rounded-[10px]  text-sm "
          >
            {/* <img src={item.img?.src} className="w-4" alt="load..." /> */}
            {item?.split("_")?.join(" ")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAvailable;
