// Import necessary modules
import Cookies from "js-cookie"; // If not installed, run: npm install js-cookie
import useAuthStore from "@/store/authStore";

// Logout function
export const logout = () => {
  // Clear authentication token and user details from Zustand store
  const { clearAuth } = useAuthStore.getState();
  clearAuth();

  // Remove all items from local storage
  localStorage.clear();

  // Clear specific cookies
  Cookies.remove("authToken"); // Replace 'authToken' with the actual name of your auth cookie
  Cookies.remove("userSession"); // Add any other cookies you may use

  // Optionally, redirect the user to the login or homepage after logout
  window.location.href = "/login"; // Change URL as needed
};
