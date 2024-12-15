"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OtpInputComponent({userInput}) {
  // const [otpValues, setOtpValues] = useState(null);

  return (
    <InputOTP className=" w-full " maxLength={6} onChange={(otpInputValue)=>userInput(otpInputValue)}>
      <InputOTPGroup className="w-full flex gap-x-[6px] asm:gap-x-3  " >
        {Array(6)
          .fill()
          .map((_, indexNum) => (
            <InputOTPSlot
            key={indexNum}
            className=" rounded-sm border-gray-400 border-[1px] font-medium  msm:text-lg size-[33px]  asm:size-[40px] "
              index={indexNum}
            />
          ))}
      </InputOTPGroup>
   
      
    </InputOTP>
  );
}
