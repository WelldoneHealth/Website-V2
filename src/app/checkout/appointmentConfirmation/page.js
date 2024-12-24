"use client";
import React, { Suspense, useEffect, useState } from "react";
import successTickIcon from "@/asset/Icons/successTick.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppointmentStore } from "@/modules/doctorDetails/data/appointmentStore";

export default function Page() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const id = searchParams.get('id');
  // const setAppointmentData = useAppointmentStore((state) => state.setAppointmentData);
  const appointmentData = useAppointmentStore((state) => state.appointmentData);
  console.log("the vailabvke conformation dat is",appointmentData)
const [redirectingTimer,setRedirectingTimer]=useState(5)
 

  // useEffect(() => {
  //   if (!id) {
  //     router.push("/");
  //   }
  // }, [id, router]);

  // // Avoid rendering the content if `id` is not available
  // if (!id) return null;
  const [id, setId] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search); // Direct usage of `window.location.search`
    const paramId = searchParams.get("id");
    setId(paramId);

    if (!paramId) {
      router.push("/");
    }  
  }, [router]);


  useEffect(()=>{
    const interval = setInterval(() => {
      setRedirectingTimer((prevTime) => {
        const newTime = prevTime - 1; 
        if (newTime <= 0) {
          router.push("/appointment-history");  
          clearInterval(interval);  
        }
        return newTime;  
      });
    }, 1000)

    return () => clearInterval(interval);
   },[router])


  //  ------if the id ios not avaolable then navigate to the home page-------------
// if(!id) return router.push('/')
  

if (!id) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
  <div className="w-full relative -my-14  max-w-[1600px] mx-auto px-1 py-2  min-h-screen   asm:px-3 lg:px-0 xl:px-8  flex  flex-col  justify-center items-center gap-y-6 overflow-hidden ">
    <img src={successTickIcon?.src} className="w-40 rotate-[15deg]" alt="load..." />
    <div className="w-full  flex flex-col justify-center items-center space-y-2  text-center ">
      <p className="font-semibold text-[22px]">Appointment Confirmed!</p>
      <p>Thank you for scheduling your appointment!</p>
      <p className="max-w-[760px]">
        Your appointment  (WELL-{id}) has been successfully placed. You will receive confirmation via WhatsApp, SMS, or email shortly.
      </p>
    
    <p className="my-5 ">Redirecting to appointments in  <span className="font-medium text-2xl"> {redirectingTimer} ...</span></p>

      <Button
        onClick={() => {
          router.push(`/appointment-history/${id}`); 
        }}
      >
    Show  Appointment Details 
      </Button>
    </div>
  </div> 
  </Suspense>
  );
}
   