import axiosInstance from "@/shared/apis/axiosInstance";
import axios from "axios";
import chalk from "chalk";


export const loginUser = async (credentials) => {
  const response = await axiosInstance.post(`token/`, credentials);
  return response.data; // Expects an object with `access` token
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post(`/apiV1/user/`, {
      ...userData,
      roles: 3,
    });
    console.log(chalk.red("the user is regustreed"),response?.data)
    return response.data; // Expects the API to return the user data or success message
  } catch (error) {
    console.log("the data returned in register functin---",error.response?.data)
    throw new Error(
      error.response?.data?.message || "Registration failed. Please try again."
    );
  }
};

export const getRegisterOtp = async (userData) => {
  console.log("thge request opt is running and the data is---",userData.contact)
 try {
  const response = await axiosInstance.post(`apiV1/generate-signup-otp/`, { contact: userData.contact });
  return response.data;
 } catch (error) {
  throw new Error(error.response?.data?.message  || "Something went wrong.")
 }  
};


export const verifyRegisterOtp = async (otpData) => {
  // console.log("thge request opt is running and the data is---",userData.contact)
 try {
  const response = await axiosInstance.post(`apiV1/verify-signup-otp/`, otpData );
  return response.data;
 } catch (error) {
  throw new Error(error.response?.data?.message  || "Something went wrong.")
 }  
};


export const getCurrentUser = async (authToken) => {
  const response = await axiosInstance.get(`apiV1/current-user/`, {
    headers: {
      Authorization: `JWT ${authToken}`,
    },
  });
  return response.data; 
};


export const getLoginOtp = async (userData) => {
  console.log("thge request opt is running and the data is---",userData.contact)
 try {
  const response = await axiosInstance.post(`apiV1/generate-otp/`, { contact: userData.contact, method: "login" });
  return response.data;
 } catch (error) {
  throw new Error(error.response?.data?.message || "Something went wrong.")
 }  
};


export const verifyLoginOtp = async (userData) => {
  // console.log("thge request opt is running and the data is---",userData.contact)
 try {
  const response = await axiosInstance.post(`apiV1/verify-otp/`, userData );
  // console.log( response.data)
  return response.data;
 } catch (error) {
  console.log("the erro occuers in otp function is",error)
  throw new Error(error.response?.data?.message  || "Something went wrong.")
 }  
};


