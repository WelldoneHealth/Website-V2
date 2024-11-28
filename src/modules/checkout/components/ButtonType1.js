import React from 'react'

export default function ButtonType1({btnText,btnFunc}) {
  return (
    <button
    type="button"
    onClick={btnFunc}
    className="w-[80%] my-8 px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
  >
  {btnText}
  </button>
  )
}
