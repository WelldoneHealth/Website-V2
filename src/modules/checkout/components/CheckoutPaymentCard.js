import React from 'react'

export default function CheckoutPaymentCard({paymentData}) {
  return (
    <div
    style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
    className="w-full max-w-[900px] p-2  msm:p-4  flex justify-start items-center gap-x-3  msm:gap-4 border-[1px] border-primary rounded-[10px]"
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
      <p className="  text-sm max-md:hidden ">
        {paymentData?.subText}
      </p>
      <p className=" text-xs asm:text-sm md:hidden ">
        {paymentData?.subText}
      </p>
    </div>
  </div>
  )
}
