import React from 'react'

export default function StepsToShow({stepName,stepNumber}) {
  return (
    <div
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-full max-sm:hidden px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA] font-semibold"
            >
              {" "}
            {stepNumber}. {stepName}
            </div>
  )
}
