import React from 'react'

export default function ButtonType1({btnText,btnFunc,isBtnDisable=false}) {
  return (
    <button
    type="button"
    onClick={btnFunc}
    className={`w-[80%]  px-8 py-3  font-semibold text-sm rounded-[10px] ${!isBtnDisable?"bg-primary":"bg-gray-300"} text-white `}
    isDisable={isBtnDisable}
  >
  {btnText}
  </button>
  )
}



// px-2 py-3 sm:p-5