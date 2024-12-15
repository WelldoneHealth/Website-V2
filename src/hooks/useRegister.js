import { useMutation } from "@tanstack/react-query";
import useUtilStore from "@/store/utiStore";
import { getRegisterOtp, registerUser, verifyRegisterOtp } from "@/modules/login/apis";
import { errorToast, successToast } from "@/shared/atoms/ToastMessageFunc";

export const useRegister = () => {
  // console.log("register muataion")
  const setLoading = useUtilStore((state) => state.setLoading); // Only get setLoading

  return useMutation({
    mutationFn: registerUser,              
    onMutate: () => {
      setLoading(true); // Set loading to true when mutation starts
    },

    onError: (error) => {
      console.log("the sceond paret error is",error?.message)   
      errorToast( error?.message || "Registration failed! Try again later") 
      throw new Error(
        error?.message || "Registration failed! Try again later"
      );
    },
    onSettled: () => {
      setLoading(false); // Set loading to false when mutation settles
    },
  });
};


export const useRequestRegisterOtp = () => {
  const setLoading = useUtilStore((state) => state.setLoading);
  return useMutation({
    mutationFn: getRegisterOtp,
    // onMutate: () => {
    //   setLoading(true); // Set loading to true when mutation starts
    // },
    onSuccess: async (otpData) => {
      console.log("OTP successfully sent", otpData);
      successToast(otpData?.message || "Otp sent successfully")
    },
    onError: (error) => {
      console.error("error in use mutation in regsuetr", error);
      errorToast(error?.message || "Something went wrong")
    },
    onSettled: () => {
      setLoading(false); 
    },
  });
};



export const useVerifyRegisterOtp = () => {
  const setLoading = useUtilStore((state) => state.setLoading);
  return useMutation({
    mutationFn: verifyRegisterOtp,
    // onMutate: () => {
    //   setLoading(true); // Set loading to true when mutation starts
    // },
    onSuccess: async (otpData) => {
      console.log("OTP successfully verified", otpData);
      // successToast(otpData?.message || "Otp verified successfully")
    },
    onError: (error) => {
      console.error("error in use mutation in verify mutation", error);
      errorToast(error?.message || "Something went wrong")
    },
    onSettled: () => {
      setLoading(false); 
    },
  });
};