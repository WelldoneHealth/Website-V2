import React from 'react'
import rxNoteIcon from "@/asset/Icons/rxNote.svg";
import Link from 'next/link';

export default function Appo_CardBtn1({text="Record",linkTo="/appointmentHostory",isNull=false}) {
  return (
    <Link href={linkTo} passHref  target='_blank' className='block'>
    <button
                    type="button"
                    className={` px-5 py-[6px] flex-1 md:w-[250px] flex items-center gap-x-2 text-sm font-medium border-[1px] border-[#01549A]   rounded-[20px] text-[#01549A]  text-center `}
                  >
                    {" "}
                    <img
                      src={rxNoteIcon?.src}
                      className="w-[12px]"
                      alt="load..."
                    />{" "}
                   {text} { isNull && " - N/A" }
                  </button> </Link>
  )
}
