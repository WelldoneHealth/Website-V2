import useAuthStore from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useUtilStore from "@/store/utiStore";
import { getCurrentUser, getLoginOtp, loginUser, verifyLoginOtp } from "@/modules/login/apis";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { errorToast, successToast } from "@/shared/atoms/ToastMessageFunc";

export const useLogin = () => {
  // console.log("tye login mutation")
  const setToken = useAuthStore((state) => state.setToken);
  const setUserDetails = useAuthStore((state) => state.setUserDetails);
  const setLoading = useUtilStore((state) => state.setLoading); // Only get setLoading
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onMutate: () => {
      setLoading(true); // Set loading to true when mutation starts  
    },
    onSuccess: async (data) => {
      const authToken = data.access;
      console.log("the auth token of login is", authToken);

      try {
        // Fetch current user details with the authToken
        const userData = await getCurrentUser(authToken);
        if (authToken && userData) {
          setToken(authToken);
          Cookies.set("authToken", authToken, { expires: 7 }); // Store token in cookie for 7 days
        }
        setUserDetails(userData);
      } catch (error) {
        errorToast("Something went wrong!");
      }
      // Optionally invalidate or refetch queries if needed
      queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (error) => {
      errorToast( error?.response?.data?.detail ||  "Something went wrong! Try again later")
      console.log(
        error?.response?.data?.detail ||  "Something went wrong! Try again later",
          "Something went wrong! Try again later",
        "error"
      );
    },
    onSettled: () => {
      setLoading(false); // Set loading to false when mutation settles
    },
  });
};

export const useRequestOtp = () => {
  const setLoading = useUtilStore((state) => state.setLoading);
  // console.log("entered in usemutaion of request otp");
  return useMutation({
    mutationFn: getLoginOtp,
    // mutationFn: ()=>console.log("the mutat func is ruing"),
    onMutate: () => {
      setLoading(true); // Set loading to true when mutation starts
    },
    onSuccess: async (otpData) => {
      // console.log("OTP successfully sent", otpData);
      successToast(otpData?.message || "Otp sent successfully")
    },
    onError: (error) => {
      console.error("error in use mutation", error);
      errorToast(error?.message || "Something went wrong")
    },
    onSettled: () => {
      setLoading(false); // Set loading to false when mutation settles
    },
  });
};

export const useVerifyOtp = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUserDetails = useAuthStore((state) => state.setUserDetails);
  const setLoading = useUtilStore((state) => state.setLoading); // Only get setLoading
  const queryClient = useQueryClient();  
  
  // console.log("entered in usemutaion of request otp");

  return useMutation({
    mutationFn: verifyLoginOtp,
    // mutationFn: ()=>console.log("the mutat func is ruing"),
    onMutate: () => {
      setLoading(true); // Set loading to true when mutation starts
    },
    onSuccess: async (data) => {
      console.log("OTP successfully sent", data.token);
      setToken(data?.token)
      Cookies.set("authToken", data?.token, { expires: 7 });
      setUserDetails(data?.user);
      queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (error) => {
      errorToast(error?.message || "Something went wrong")
    },
    onSettled: () => {
      setLoading(false); // Set loading to false when mutation settles
    },
  });
};

