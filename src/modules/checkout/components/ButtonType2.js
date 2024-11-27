import React from 'react'

export default function ButtonType2({btnFor,btnOnClickFunc}) {
  return (
    <button
    type="button"
    onClick={btnOnClickFunc}
    className="px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
  >
  {btnFor}
  </button>
  )
}
