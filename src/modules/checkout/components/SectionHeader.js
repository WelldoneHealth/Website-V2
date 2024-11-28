import React from 'react'

export default function SectionHeader({showChangeTextBtn,headingText,btnFunc,toggle}) {
  return (
    <div
    style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
    className="w-full font-medium p-4  flex items-center justify-between bg-[1px] border-[#EFEFEF] "
  >
    <p>{headingText}</p>{" "}
    <button
      type="button"
      onClick={() =>btnFunc(toggle)
      }
      className={`text-primary  px-4 font-semibold py-1 rounded-[10px] border-[1px] border-primary  ${
        showChangeTextBtn && "hidden"
      }  `}
    >
      Change
    </button>{" "}
  </div>
  )
}
