import React from 'react'
import refreshArrowIcon from "@/asset/Icons/refreshArrow.svg";
import uploadIcon from "@/asset/Icons/upload.svg";
import successTickIcon from "@/asset/Icons/successTick.svg";
import infoIcon from "@/asset/Icons/info.svg";
import rxNoteIcon from "@/asset/Icons/rxNote.svg";
import crossIcon from "@/asset/Icons/cross.svg";
import doctorAppointmentImage from "@/asset/Images/doctorAppointmentImage.png";
import doctorAppointmentImage2 from "@/asset/Images/doctorAppointmentImage2.png";
import InfoBar from "./InfoBar";
import Link from 'next/link';

export default function Appo_CardBtn1({text="Record",linkTo="/appointmentHostory",isNull=false}) {
  return (
    <Link href={linkTo} passHref  target='_blank' className='block'>
    <button
                    type="button"
                    className={` px-5 py-[6px] flex-1 md:w-[250px] flex items-center gap-x-2 text-sm font-medium border-[1px] border-[#01549A]   rounded-[20px] ${!isNull?"text-[#01549A] " : " bg-primary text-white "} text-center `}
                  >
                    {" "}
                    <img
                      src={rxNoteIcon?.src}
                      className="w-[12px]"
                      alt="load..."
                    />{" "}
                   {text}{" "}
                  </button> </Link>
  )
}
