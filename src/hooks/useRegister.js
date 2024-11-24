import { useMutation } from "@tanstack/react-query";
import useUtilStore from "@/store/utiStore";
import { registerUser } from "@/modules/login/apis";

export const useRegister = () => {
  const setLoading = useUtilStore((state) => state.setLoading); // Only get setLoading

  return useMutation({
    mutationFn: registerUser,
    onMutate: () => {
      setLoading(true); // Set loading to true when mutation starts
    },

    onError: (error) => {
      console.error(
        error?.response?.data?.message || "Registration failed! Try again later"
      );
    },
    onSettled: () => {
      setLoading(false); // Set loading to false when mutation settles
    },
  });
};
