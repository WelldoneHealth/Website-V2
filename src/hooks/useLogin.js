import useAuthStore from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useUtilStore from "@/store/utiStore";
import { getCurrentUser, loginUser } from "@/modules/login/apis";
import Cookies from "js-cookie";

export const useLogin = () => {
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
      setToken(authToken);

      // Fetch current user details with the authToken
      const userData = await getCurrentUser(authToken);
      if (authToken) {
        Cookies.set("authToken", authToken, { expires: 7 }); // Store token in cookie for 7 days
      }
      setUserDetails(userData);

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
