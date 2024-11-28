import React from 'react'

export default function CheckoutPaymentCard({paymentData}) {
  return (
    <div
    style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
    className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
  >
    {/* ------checkout------------  */}
    <input
      type="radio"
    //   onChange={() =>
    //     setStatusData((prev) => ({
    //       ...prev,
    //       paymentSelection: item,
    //     }))
    //   }
      name="paymentSelection"
      value={paymentData.id}
      className="w-[20px] h-[20px]"
      checked={true}
    />

    <div className="w-full space-y-1">
      <p className="text-base font-medium ">
        {paymentData?.primaryText}
      </p>
      <p className="text-[4px] sm:text-sm bg-red-900 ">
        {paymentData?.subText}
      </p>
    </div>
  </div>
  )
}
