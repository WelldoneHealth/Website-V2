import { errorToast } from "@/shared/atoms/ToastMessageFunc";

// Contact Validator
export const contactValidator = (contact) => {
  if (!contact) {
   errorToast("Contact is required!");
    return false;
  }
  if (!/^\d{10}$/.test(contact)) {
   errorToast("Contact must be a 10-digit number!");
    return false;
  }
  return true;
};

// Email Validator
export const emailValidator = (email) => {
  if (!email) {
   errorToast("Email is required!");
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
   errorToast("Invalid email format!");
    return false;
  }
  return true;
};

// Password Validator (Strong Password)
export const passwordValidator = (password) => {
  if (!password) {
   errorToast("Password is required!");
    return false;
  }
  if (password.length < 8) {
   errorToast("Password must be at least 8 characters long!");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
   errorToast("Password must contain at least one uppercase letter!");
    return false;
  }
  if (!/[a-z]/.test(password)) {
   errorToast("Password must contain at least one lowercase letter!");
    return false;
  }
  if (!/\d/.test(password)) {
   errorToast("Password must contain at least one number!");
    return false;
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
   errorToast("Password must contain at least one special character!");
    return false;
  }
  return true;
};

// OTP Validator
export const otpValidator = (otp) => {
  if (!otp) {
   errorToast("OTP is required!");
    return false;
  }
  if (!/^\d{6}$/.test(otp)) {
   errorToast("OTP must be a 6-digit number!");
    return false;
  }
  return true;
};
