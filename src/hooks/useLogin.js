import useAuthStore from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useUtilStore from "@/store/utiStore";
import { getCurrentUser, getLoginOtp, loginUser } from "@/modules/login/apis";
import Cookies from "js-cookie";
import { toast } from "sonner";

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
        toast("Something went wrong!");
      }

      // Optionally invalidate or refetch queries if needed
      queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (error) => {
      console.log(
        error?.response?.data?.detail ||
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
  console.log("entered in usemutaion of request otp");
  return useMutation({
    mutationFn: getLoginOtp,
    // mutationFn: ()=>console.log("the mutat func is ruing"),
    onMutate: () => {
      setLoading(true); // Set loading to true when mutation starts
    },
    onSuccess: async (otpData) => {
      console.log("OTP successfully sent", otpData);
      // Optionally invalidate queries or refetch OTP-related data
    },
    onError: (error) => {
      console.error("error in use mutation", error);
    },
    onSettled: () => {
      setLoading(false); // Set loading to false when mutation settles
    },
  });
};
