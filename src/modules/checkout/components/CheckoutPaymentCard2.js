import React from 'react'

export default function CheckoutPaymentCard2({text}) {
  return (
    <div className="w-full p-5  font-medium ">
    <p className="px-7 py-3 rounded-[10px] border-[1px]  border-[#DADADA]">
      {" "}
      {/* {statusData.paymentSelection.primaryText} */}
      {text}
    </p>
  </div>
  )
}
