"use client"

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import OtpInputComponent from "./OtpInputComponent";
import closeIcon from "@/asset/Icons/closeIcon.svg";


const OtpModal = ({ isOpen, setIsOpen, otpVerificationFunc, resendOtpFunc, userContact }) => {
    const [otpValue, setOtpValue] = useState("");
    const [resendTimer,setResendTimer]=useState(30)
    const [isResendOtpActive,setIsResendOtpActive]=useState(false)
    const getOtpValue=(data)=>setOtpValue(data)
    const [otpKey, setOtpKey] = useState(0);

    useEffect(() => {
      let interval;
      if (isOpen) {
        setResendTimer(30);
        // setIsResendOtpActive(false);
        interval = setInterval(() => {
          setResendTimer((prevTime) => {
            const newTime = prevTime - 1;
            if (newTime <= 0) {
              // setIsResendOtpActive(true);
              clearInterval(interval);
            }
            return newTime;
          });
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isOpen,isResendOtpActive]);

  return (
    <Dialog open={isOpen} 
    // onOpenChange={setIsOpen}
    onOpenChange={null}
 className=" w-full relative "
    >

      <DialogContent
      //  onClick={(e) => e.stopPropagation()}
 className="dialog-content  w-[90%] sm:w-[95%] max-w-[500px] sm:max-w-[650px]  rounded-md  flex flex-col ">
      
        <DialogHeader className="space-y-5 ">
          <DialogTitle className="text-center text-primary text-xl">Please Enter the One-Time Password to  verify your account</DialogTitle>
         <button type="button" onClick={()=>setIsOpen(false)}
                 className=" absolute right-4 -top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">   
                 <img src={closeIcon?.src} className="size-5" alt="load..." />
             </button>
          <p className="my-6 text-center text-sm">A One-Time Password has been sent to <span className="font-medium">******{userContact.slice(6,10)}</span> </p>
     </DialogHeader>


<div className="w-full mt-3 mx-auto flex justify-center ">
<OtpInputComponent key={otpKey} userInput={getOtpValue} />
</div>

        <div className="flex flex-col gap-4 items-center mt-4">
          <button
           className={`px-6 py-2  font-semibold  text-sm rounded-[6px] text-white ${otpValue.length!==6 ?" bg-[#A8A8A8] pointer-events-none " : " bg-primary "}`}
           disabled={otpValue.length !==6 }  
            onClick={() => {
             otpVerificationFunc(otpValue);
            // console.log("clicked")
            }}
          >
       VerifyOtp     
          </button>

          {resendTimer > 0 ? (
            <p className="text-sm">
              Resend OTP in{" "}
              <span className="text-primary font-semibold">{resendTimer} sec</span>
            </p>
          ) : (
            <p
              onClick={() => {
                resendOtpFunc();
                setResendTimer(30); // Reset timer after resending OTP
                setIsResendOtpActive(!isResendOtpActive);
                setOtpKey((prevKey) => prevKey + 1) 
              }}
              className="text-sm cursor-pointer font-semibold text-primary"
            >
              Resend OTP
            </p>
          )}      
 <p onClick={()=>setIsOpen(false)} className="text-sm cursor-pointer hover:text-primary" >Entered a wrong Number?</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OtpModal;
