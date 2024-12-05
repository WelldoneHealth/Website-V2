"use client";

import React, { useEffect, useRef, useState } from "react";
import smallHospital3 from "@/asset/Images/smallHospital3.png";

import outlineGeoLocationIcon from "@/asset/Icons/outlineGeoLocation.svg";
import aroowIcon2 from "@/asset/Icons/arrow2.svg";
// import toast from "react-hot-toast";
import {
  appointmentOptions,
  paymentOptions,
} from "@/Utilities/extraDetails/checkoutDetails";
import axiosInstance from "@/shared/apis/axiosInstance";
import { useAppointmentStore } from "@/modules/doctorDetails/data/appointmentStore";
import moment from "moment";
import AddPatientDrawer from "@/shared/atoms/addPatientDrawer";
import { addAppointment } from "@/modules/checkout/apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import AuthenticatedLayout from "@/shared/layouts/AuthenticatedLayout";
import { toast } from "sonner";
import useAuthStore from "@/store/authStore";

import StepsToShow from "@/modules/checkout/components/StepsToShow";
import RightSideBox from "@/modules/checkout/components/RightSideBox";
import ButtonType1 from "@/modules/checkout/components/ButtonType1";
import CheckoutDoctorCard from "@/modules/checkout/components/CheckoutDoctorCard";
import CheckoutHospitalCard from "@/modules/checkout/components/CheckoutHospitalCard";
import CheckoutDoctorCard2 from "@/modules/checkout/components/CheckoutDoctorCard2";
import CheckoutHospitalCard2 from "@/modules/checkout/components/CheckoutHospitalCard2";
import SectionHeader from "@/modules/checkout/components/SectionHeader";
import SelectPatientComp from "@/modules/checkout/components/SelectPatientComp";
import SelectPatientComp2 from "@/modules/checkout/components/SelectPatientComp2";
import CheckoutPaymentCard from "@/modules/checkout/components/CheckoutPaymentCard";
import CheckoutPaymentCard2 from "@/modules/checkout/components/CheckoutPaymentCard2";
import CheckoutEqueueCard from "@/modules/checkout/components/CheckoutEqueueCard";
import ButtonType2 from "@/modules/checkout/components/ButtonType2";
import MobileViewButtons from "@/modules/checkout/components/MobileViewButtons";
import { useMediaQuery } from "react-responsive";

export default function page() {
  const router = useRouter();
  const appointmentData = useAppointmentStore((state) => state.appointmentData);
  console.log("the appointment data is---",appointmentData)
  const setAppointmentData = useAppointmentStore((state) => state.setAppointmentData);
  const userData = useAuthStore((state) => state.userDetails);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })

  // console.log( "the value of fata in checkkout is ",appointmentData);

  // useEffect(() => {
  //   return () => {
  //     setAppointmentData(null);
  //   };
  // }, []);

const [editPatientData,setEditPatientData]=useState(null)

  const [statusChange, setStatusChange] = useState({
    doctorStatus: true,
    patientStatus: false,
    paymentStatus: false,
    appointmentStatus: false,
  });

  // -----------------------for storing the input values of the processed data------------------
  const [statusData, setStatusData] = useState({
    doctorSelection: appointmentData.doctorData,
    patientSelection: 1,
    paymentSelection: paymentOptions[0],
    appointmentSelection: appointmentOptions[0],
  });

  console.log("the doctor is", statusData.doctorSelection);

  // --------------------- hide or view the
  const [dataVisibilityToggle, setDataVisibilityToggle] = useState({
    doctorsToggle: false,
    patientToggle: false,
    paymentToggle: false,
    appointmentToggle: false,
  });

  const getInputDetails = (e) => {
    setStatusData({ ...statusData, [e.target.name]: e.target.value });
  };

  // ---------------------referncing the  steps for scrolloing intothe view port----------------------
  const stepRef = Array.from({ length: 3 }, () => useRef(null));
  const handleScrollToBox = (index) => {
    stepRef[index].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const [view, setView] = useState(false);
  const [viewSliderType, setViewSliderType] = useState({
    doctor: false,
    hospital: false,
    appointment: false,
  });

  const [patientList, setPatientList] = useState([]);
  const getPatients = async () => {
    try {
      const response = await axiosInstance.get("apiV1/patient/");
      setStatusData({ ...statusData, patientSelection: response.data[0] });
      setPatientList(response.data);
      return response.data;
    } catch (error) {
      console.log("error fetching equeue list in  doctor profile page");
    }
  };

  useEffect(() => {
    getPatients();
  }, []);


  const updatePatient=()=>getPatients()

  const appointmentMutation = useMutation({
    mutationFn: addAppointment,
    onSuccess: (data) => {
// -------------if appointment booking is successful------------
    if(data?.id){
        router.push(`/checkout/appointmentConfirmation?id=${data?.id}`);
        toast("Appointment booked successfully");
        return  
      }
  // -------------------if unsuccessful od previously booked appointment---------------------
      return   toast(data?.message);
    },
    onError: (error) => {
      // console.log("the error occured in react query is",error)
      toast("Server Error!");
    },
  });

  const handleBookAppointment = () => {
    let formData = {
      ...{
        doctor: appointmentData?.doctorData?.id,
        slot: null,
        branch: appointmentData?.branchData?.branch_id,
        is_first_visit: statusData.appointmentSelection?.isFirstVisit,
        is_equeue: true,
        amount: statusData.appointmentSelection?.charge ?? 0,
        payment_method: "cash",
        date: moment().format("YYYY-MM-DD"),
        appointment_date: moment().format("YYYY-MM-DD"),
        patient: statusData.patientSelection.id,
      },
      payment_method: "cash",
    };
    appointmentMutation.mutate(formData);
  };

  const handleChangeNewUi=(togglingData)=>setDataVisibilityToggle({
    ...dataVisibilityToggle,
    [togglingData]: false,
  })

  const mobileViewButtonsChange = (btnFor) =>{
    setStatusChange({
      doctorStatus: false,
      patientStatus: false,
      paymentStatus: false,
      appointmentStatus: false,
      [btnFor]: true, 
    })
    // setDataVisibilityToggle({
    //   doctorsToggle: false,
    // patientToggle: false,
    // paymentToggle: false,
    // appointmentToggle: false,
    // [toggleBox]: true, 
    // })
  }
  


  const handleEditPatient=(patientData)=>setEditPatientData(patientData)

  // if(!appointmentData?.doctorData)  return router.push('/')
    

  return (
    <AuthenticatedLayout>
      <div
        className={`w-full relative max-w-[1600px]  ${
          view
            ? "h-[calc(100vh-60px)]  md:h-[calc(100vh-70px)] overflow-hidden"
            : " "
        }   mx-auto px-1   asm:px-3 lg:px-0 xl:px-8  py-8 flex  flex-col  lg:flex-row lg:justify-between justify-center  lg:items-start  gap-x-7 `}
      >
        {/* ---------------appointment process-------------- */}
        <div className=" w-full  lg:w-[68%] space-y-5  ">
          {/* -----------first card ( doctor selection)---------------- */}
        { statusChange.doctorStatus && <div
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="w-[98%] max-sm:mx-auto  sm:w-full rounded-[10px]  border-[1px] border-[#EFEFEF]"
          >
                     <SectionHeader showChangeTextBtn={!dataVisibilityToggle.doctorsToggle}  headingText="1. Office details" btnFunc={handleChangeNewUi} toggle="doctorsToggle" />

            {/* ----------------2 cards portion----------- */}
            {!dataVisibilityToggle.doctorsToggle && (
              <>
                {" "}
                <div className="w-full   space-y-4 px-2 py-3 sm:p-5 ">
                  {/* -------------------doctor card------------- */}
                  <CheckoutDoctorCard doctorInfo={appointmentData?.doctorData}  />
                  {/* <CheckoutDoctorCard doctorInfo={appointmentData?.doctorData}  /> */}
                  {/* ----------------hospital card------------- */}              
                  <CheckoutHospitalCard  hospitalInfo={appointmentData?.branchData} />
                </div>
                <div className=" max-sm:hidden p-5 py-3 bg-[#EFEFEF]">
                  {!statusChange.patientStatus && (
                    <ButtonType2 btnFor="Continue Appointment"  btnOnClickFunc={() => {
                      setStatusChange({
                        ...statusChange,
                        patientStatus: true,
                      }),
                        setDataVisibilityToggle({
                          ...dataVisibilityToggle,
                          doctorsToggle: true,
                        }),
                        handleScrollToBox(0);
                    }}  />
                  )}
                  {statusChange.patientStatus && (
                    <ButtonType2 btnFor="Continue Appointment"  btnOnClickFunc={() =>
                      statusData.doctorSelection &&
                      (setDataVisibilityToggle({
                        ...dataVisibilityToggle,
                        doctorsToggle: true,
                        patientToggle: false,
                      }),
                      handleScrollToBox(0))
                    }  />
                  )}
                </div>{" "}
              </>
            )}

            {/* ----------------------on button click new updated card ui------------------------ */}
            {dataVisibilityToggle.doctorsToggle && (
              <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-y-4  gap-x-5 p-5">
                {/*------------------new doctor card---------------- */}
                <CheckoutDoctorCard2 doctorData={appointmentData.doctorData}  />
                {/* ------------------------new hospital card-------------------- */}
                <CheckoutHospitalCard2 hospitalData={appointmentData?.branchData}  />
              </div>
            )}
          </div> }

          {/* -----------second card ( patient selection) -------------- */}
          { statusChange.patientStatus && (
            <div
              ref={stepRef[0]}
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-[98%] max-sm:mx-auto  sm:w-full   rounded-[10px]  border-[1px] border-[#EFEFEF]"
            >
                          <SectionHeader showChangeTextBtn={!dataVisibilityToggle.patientToggle}  headingText="2. Select a patient" btnFunc={handleChangeNewUi} toggle="patientToggle" />


              {/* 2 cards portion----------- */}
              {!dataVisibilityToggle.patientToggle && (
                <>
                  {" "}
                  <div
                    className={`w-full space-y-5 px-2 py-3 sm:p-5 ${isSmallScreen ? " max-h-[60vh]   " : " max-h-[500px] " } overflow-y-scroll`}
                  >
                    {patientList.length > 0 &&
                      patientList.map((item, index) => (
                        <SelectPatientComp onOpen={()=>setView(true)}  patientEditFunc={()=>handleEditPatient(item)}  patientData={item} key={index}  isSelected={statusData.patientSelection.id == item.id} 
                        onChangeFunc={()=>setStatusData((prev) => ({
                                  ...prev,
                                  patientSelection: item,
                                }))}
                        />
                      ))}

                   
                  </div>
                   {/* --------------------add patient button---------------------- */}
                   <button
                      type="button"
                      onClick={() => {
                        setView(true);
                        setEditPatientData(null);
                        setViewSliderType({
                          ...viewSliderType,
                          appointment: true,
                        });
                      }}
                      className="rounded-[20px] m-2 px-7 py-2 text-sm border-[1px] border-primary  text-primary font-medium  "
                    >
                      + Add a New Patient
                    </button>
                  <div className="mt-5 max-sm:hidden flex flex-col gap-5 items-start justify-start p-5  py-3 bg-[#EFEFEF]">
                    
                    {!statusChange.paymentStatus && (
                      <ButtonType2 btnFor=" Appointment for this Patient" btnOnClickFunc={() =>
                        statusData.patientSelection &&
                        (setDataVisibilityToggle({
                          ...dataVisibilityToggle,
                          patientToggle: true,
                        }),
                        setStatusChange({
                          ...statusChange,
                          paymentStatus: true,
                        }),
                        handleScrollToBox(1))} />
                    )}
                    {statusChange.paymentStatus && (
                   <ButtonType2 btnFor=" Appointment for this Patient" btnOnClickFunc={() =>
                    statusData.patientSelection &&
                    (setDataVisibilityToggle({
                      ...dataVisibilityToggle,
                      patientToggle: true,
                      paymentToggle: false,
                    }),
                    handleScrollToBox(1))} />
                    )}
                  </div>
                </>
              )}

              {dataVisibilityToggle.patientToggle && <SelectPatientComp2  patientInfo={statusData.patientSelection} />
            }
            </div>
          )}

          {/* -----------third card (payment option)------------------- */}
          { statusChange.paymentStatus && (
            <div
              ref={stepRef[1]}
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-[98%] max-sm:mx-auto sm:w-full rounded-[10px]  border-[1px] border-[#EFEFEF]"
            >
             
             <SectionHeader showChangeTextBtn={!dataVisibilityToggle.paymentToggle}  headingText="3. Payment options"  btnFunc={handleChangeNewUi} toggle="paymentToggle" />


              {/*----------- 2 checkbox portion-----------  */}
              {!dataVisibilityToggle.paymentToggle && (
                <>
                  <div className="space-y-5  px-2 py-3 sm:p-5 ">
                  <CheckoutPaymentCard paymentData={paymentOptions[0]}   />
                  </div>

                  <div className=" max-sm:hidden p-5  py-3 bg-[#EFEFEF]">
                    {!statusChange.appointmentStatus && (
                    
                      <ButtonType2 btnFor="Continue"  btnOnClickFunc={() =>
                        statusData.paymentSelection &&
                        (setDataVisibilityToggle({
                          ...dataVisibilityToggle,
                          paymentToggle: true,
                        }),
                        setStatusChange({
                          ...statusChange,
                          appointmentStatus: true,
                        }))} />
                    )}
                    {statusChange.appointmentStatus && (
                    
                      <ButtonType2 btnFor="Continue"  btnOnClickFunc={() =>
                        statusData.paymentSelection &&
                        setDataVisibilityToggle({
                          ...dataVisibilityToggle,
                          paymentToggle: true,
                          appointmentToggle: false,
                        })} />
                    )}
                  </div>
                </>
              )}

              {dataVisibilityToggle.paymentToggle && <CheckoutPaymentCard2 text={statusData.paymentSelection.primaryText}  />
            }
            </div>
          )}

          {/* ----------fourth card( appointment summary)------------------- */}
          { statusChange.appointmentStatus && (
            <div
              ref={stepRef[2]}
              style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
              className="w-[98%] max-sm:mx-auto sm:w-full  rounded-[10px]   border-[1px] border-[#EFEFEF]"
            >
                           <SectionHeader showChangeTextBtn={!dataVisibilityToggle.appointmentToggle}  headingText="4. Appointment summary" btnFunc={handleChangeNewUi} toggle="appointmentToggle" />

              {/* 2 checkbox portion----------- */}
              <div className="space-y-5 py-5 ">
                {/* ------------appointment----------------- */}
                <CheckoutEqueueCard  equeueInfo={appointmentData?.equeueData} />

                {/* ----------------checkout input----------- */}
                {!dataVisibilityToggle.appointmentToggle && (
                  <div className="space-y-5 px-5">
                    <div className="space-y-3 text-sm">
                      <p>What’s The Reson for Your Visit</p>
                      <p className="border-[1px] border-[#919196] px-2 py-2 text-[#191A1B] rounded-[10px]">
                        General Consultation
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p>Have the patient seen these Doctors?</p>
                      {appointmentOptions.map((item, index) => (
                        <div
                          style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                          key={index}
                          className="w-full max-w-[900px] p-4 flex justify-start items-center gap-4 border-[1px] border-primary rounded-[10px]"
                        >
                          {/* ------checkout------------ */}
                          <input
                            type="radio"
                            onChange={() =>
                              setStatusData({
                                ...statusData,
                                appointmentSelection: {
                                  ...item,
                                  charge:
                                    appointmentData?.doctorData[item?.key],
                                },
                              })
                            }
                            name="appointmentSelection"
                            value={item.id}
                            className="w-[20px] h-[20px]"
                            checked={
                              statusData.appointmentSelection.id == item.id
                            }
                          />

                          <div className="w-full space-y-1">
                            <p className="text-base font-medium">
                              {item?.mainInfo}{" "}
                            </p>
                            <p classNametext="text-sm">
                              ₹{appointmentData?.doctorData[item?.key]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {!dataVisibilityToggle.appointmentToggle && (
                <div className="w-full max-sm:hidden gap-y-3 p-5 py-3 max-sm:text-xs flex flex-col sm:flex-row justify-between items-center bg-[#EFEFEF]">
                  <p>
                    Appointment confirmation WhatsApp Massage will be sent to{" "}
                    <span className="font-medium">{userData?.contact}</span>{" "}
                  </p>
                  <button
                    type="button"
                    onClick={handleBookAppointment}
                    className={`px-8 py-3 max-sm:w-full  font-semibold text-sm rounded-[10px]  ${
                      !statusData.appointmentSelection
                        ? " text-[#5A5D62] border-[1px] border-[#5A5D62] bg-[#EFEFEF]"
                        : "bg-primary text-white"
                    } `}
                    disabled={!statusData.appointmentSelection}
                  >
                    Book Appointment
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ----------mobile view button for moving to next processes - based on the statusChange of the processes------------- */}
          <div className="w-full sm:hidden z-[50] fixed left-0 -bottom-[10px] flex flex-col space-y-3 justify-center items-center border-[#DADADA] bg-white pt-5 pb-8">
  {/* {statusChange.doctorStatus && <MobileViewButtons  btnText="Continue" btnClickFunc={()=>mobileViewButtonsChange("patientStatus","doctorsToggle")}     />  }
  {statusChange.patientStatus && <MobileViewButtons  btnText="Continue Appointment" btnClickFunc={()=>mobileViewButtonsChange("paymentStatus","patientToggle")}       btnBackFunc={()=>mobileViewButtonsChange("doctorStatus","doctorsToggle")}     />  }
  {statusChange.paymentStatus && <MobileViewButtons  btnText="Confirm" btnClickFunc={()=>mobileViewButtonsChange("appointmentStatus","paymentToggle")}  btnBackFunc={()=>mobileViewButtonsChange("patientStatus","patientToggle")}    />  }
  {statusChange.appointmentStatus && <MobileViewButtons  btnText="Book Appointment"  btnClickFunc={handleBookAppointment}  btnBackFunc={()=>mobileViewButtonsChange("paymentStatus","paymentToggle")}    />  } */}
          {statusChange.doctorStatus && <MobileViewButtons  btnText="Continue" btnClickFunc={()=>mobileViewButtonsChange("patientStatus")}     />  }
  {statusChange.patientStatus && <MobileViewButtons  btnText="Continue Appointment" btnClickFunc={()=>mobileViewButtonsChange("paymentStatus")}       btnBackFunc={()=>mobileViewButtonsChange("doctorStatus")}     />  }
  {statusChange.paymentStatus && <MobileViewButtons  btnText="Confirm" btnClickFunc={()=>mobileViewButtonsChange("appointmentStatus")}  btnBackFunc={()=>mobileViewButtonsChange("patientStatus")}    />  }
  {statusChange.appointmentStatus && <MobileViewButtons  btnText="Book Appointment"  btnClickFunc={handleBookAppointment}  btnBackFunc={()=>mobileViewButtonsChange("paymentStatus")}    />  }
   
          </div>

          {/* ---------------------steps to show in each process----------------- */}
          {!statusChange.patientStatus && (
            <StepsToShow  stepNumber="2"  stepName="Select a patient" />
          )}
          {!statusChange.paymentStatus && (
             <StepsToShow  stepNumber="3"  stepName="Payment options" />
          )}
          {!statusChange.appointmentStatus && (
             <StepsToShow  stepNumber="4"  stepName="Appointment summary" />
          )}

          {/* -------------confirmation buton for final appointment subission----------------------- */}
          {dataVisibilityToggle.appointmentToggle &&
            dataVisibilityToggle.patientToggle &&
            dataVisibilityToggle.paymentToggle &&
            dataVisibilityToggle.doctorsToggle && (
              <button
                type="button"
                onClick={handleBookAppointment}
                className="my-8 px-8 py-3 bg-primary font-semibold text-sm rounded-[10px] text-white "
              >
                Book Appointment
              </button>
            )}
        </div>

        {/* -----------------appointment details-------------------- */}
        <RightSideBox appointmentInfo={appointmentData?.equeueData}  />

      </div>

      <AddPatientDrawer
        isOpen={view}
patientDataToEdit={editPatientData}
        // updatePatientListFunc={()=>getPatients()}
     
        onClose={() => {
          setView(false);
        }}
        // updatePatientListFunc=()=>setPatientList((pre)=>[pre,item])
        successCallback={(item) => {
          setPatientList((pre)=>[...pre,item])  
          setStatusData((prev) => ({
            ...prev,
            patientSelection: item,
          }));
        if(!isSmallScreen){setDataVisibilityToggle((prev) => ({ 
            ...prev,
            patientToggle: true,
          }));
          setStatusChange({
            ...statusChange,
            paymentStatus: true, 
          }),
            handleScrollToBox(1);
        }}}
      />
    </AuthenticatedLayout>
  );
}