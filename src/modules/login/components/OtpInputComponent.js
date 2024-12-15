"use client";
import React  from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function OtpInputComponent({userInput,key}) {
  // const [otpValues, setOtpValues] = useState(null);
  // const firstInputRef = useRef(null); // Reference for the first input slot

  // useEffect(() => {
  //   // Automatically focus the first input field when the component is rendered
  //   if (firstInputRef.current) {
  //     firstInputRef.current.focus();
  //   }
  // }, [key]);

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
              // ref={indexNum === 0 ? firstInputRef : null}
            />
          ))}
      </InputOTPGroup>
   
      
    </InputOTP>
  );
}
