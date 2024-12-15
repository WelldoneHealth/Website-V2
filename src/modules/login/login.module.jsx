"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLogin, useRequestOtp, useVerifyOtp } from "@/hooks/useLogin";
import UnauthenticatedLayout from "@/shared/layouts/UnauthenticatedLayout";
import useUtilStore from "@/store/utiStore";
import { useRegister, useRequestRegisterOtp, useVerifyRegisterOtp } from "@/hooks/useRegister";
import hospitalIcon2 from "@/asset/Icons/hospital2_icon.svg";
import eyeOpen from "@/asset/Icons/eyeOpen.svg";
import eyeClose from "@/asset/Icons/eyeClose.svg";
import { toast } from "sonner";
import Link from "next/link";
import { errorToast, successToast } from "@/shared/atoms/ToastMessageFunc";
import { useQuery } from "@tanstack/react-query";
import OtpModal from "./components/OtpModal";
import OtpInputComponent from "./components/OtpInputComponent";
import { contactValidator, emailValidator, otpValidator, passwordValidator } from "./utils/validatorFunction";

const LoginModule = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    contact: "",
    password: "password1234",
  });

  const [otpLoginCredentials, setOtpLoginCredentials] = useState({
    contact: "",
    otp: "",
    method: "login",
  });

  const [isOtpAvailable, setIsOtpAvailable] = useState(false);

  const [registerCredentials, setRegisterCredentials] = useState({
    name: "dfkb",
    email: "unlnown@gmail.com",
    contact: "",
    password: "password1234",
  });

  const [isLoginTypeOtp, setIsLoginTypeOtp] = useState(false);

  const [viewPassword, setViewPassword] = useState(false);

  const [isRegisterOtpAvailable,setIsRegisterOtpAvailable]=useState(false)

  const [currentTab, setCurrentTab] = useState("login"); // state for current tab

  const loading = useUtilStore((state) => state.loading);
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const requestRegisterOtpMutation=useRequestRegisterOtp()
  const verifyRegisterOtpMutation=useVerifyRegisterOtp()
  const requestOtpMutation = useRequestOtp();
  const verifyOtpMutation = useVerifyOtp();

  const [isModalOpen,setIsModalOpen]=useState(false)

  const handleTabChange = (tab) => {
    setCurrentTab(tab); // Update the current tab
    setViewPassword(false)
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!contactValidator(loginCredentials.contact)) return;
  if (!loginCredentials.password) return errorToast("All fields are Required")
      loginMutation.mutate({ ...loginCredentials });
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    if (!contactValidator(otpLoginCredentials.contact)) return;
  if (!otpValidator(otpLoginCredentials.otp)) return;
      verifyOtpMutation.mutate({ ...otpLoginCredentials }); 
  };

  // -----getting the otp of login--------
const getLoginOtpData=(otpData)=>setOtpLoginCredentials((pre)=>({...pre,otp:otpData}))
  
// ------------- making login  getOtp api call ----------
  const handleGetOtp = (e) => {
    console.log("hello clicked")
    if (!contactValidator(otpLoginCredentials.contact)) return; 
      requestOtpMutation.mutate(
        { ...otpLoginCredentials, contact: otpLoginCredentials.contact.trim() },
        {
          onSuccess: () => {
            setIsOtpAvailable(true);
          },
          onError: (error) => {
            console.log("error in otp");
          },
        }
      );  
  };

  // --------------- making register otp call ------
  const handleRegisterOtp=()=>{
    if ( !registerCredentials.name || !registerCredentials.email ||  !registerCredentials.contact || !registerCredentials.password  ) {
      errorToast("Enter all fields")
      return
    }
    if (!emailValidator(registerCredentials.email)) return; // Validate email
    if (!contactValidator(registerCredentials.contact)) return; // Validate contact
    if (!passwordValidator(registerCredentials.password)) return;
    requestRegisterOtpMutation.mutate(
      { contact: registerCredentials.contact.trim() }, 
      {
        onSuccess: () => {
          console.log("the otp is sent")
          setIsModalOpen(true)
          console.log("the response donne")
        },
        onError: (error) => {
          console.log("error in otp");
        },
      }
    );
  }


  // ------------registration----------
  const handleRegisterSubmit = (e) => {
    registerMutation.mutate(registerCredentials, {
      onSuccess: () => {
        // setCurrentTab("login"); // Switch to login tab on successful registration
        loginMutation.mutate({ contact:registerCredentials.contact , password:registerCredentials.password  });
        setRegisterCredentials({
          name: "",
          email: "",
          contact: "",
          password: "",
        });                                                         
      },
      onError: (error) => {
        errorToast(error?.message || "Registration failed! Try again later");
        // console.log("the error during registration is - ",error?.message)
      },
    });
  };

  // ---------- verifying registration otp ----------
const handleRegisterOtpVerification=(otpData)=>{
  if (!contactValidator(registerCredentials.contact)) return;
  if (!otpValidator(otpData)) return;
verifyRegisterOtpMutation.mutate({contact:registerCredentials.contact,otp:otpData},{
  onSuccess: () => {
    setIsModalOpen(false)
    registerMutation.mutate(registerCredentials, {
      onSuccess: () => {
        loginMutation.mutate({ contact:registerCredentials.contact , password:registerCredentials.password  });
        setRegisterCredentials({
          name: "",
          email: "",
          contact: "",
          password: "",
        });
     

      },
      onError: (error) => {
        // errorToast(error?.message || "Registration failed! Try again later");
        // console.log("the error during registration is - ",error?.message)
      },
    });
},
  onError: (error) => {
    errorToast(error?.message || "Registration failed! Try again later");
  },
})
}

  return (
    <UnauthenticatedLayout>
      <div className="w-full min-h-screen py-8 flex flex-col items-center justify-center">
        <p className="text-[#01549A] font-medium text-sm  mb-7 ">
          <Link
            href="https://practice.welldonehealth.in/"
            passHref
            target="_blank"
            className="flex items-center gap-x-3  "
          >
            {" "}
            <img
              src={hospitalIcon2?.src}
              className="w-[20px]"
              alt="load..."
            />{" "}
            I have Clinic/ Hospital{" "}
          </Link>
        </p>

        <div className="flex   w-full items-center justify-center px-4">
          <Tabs
            value={currentTab}
            onValueChange={handleTabChange}
            className="w-[400px]"
          >
            <TabsList className="grid w-full grid-cols-2 text-lg">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              {/* -----------------login form----------- */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#01549A]">
                    Login
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={
                      !isLoginTypeOtp
                        ? handleLoginSubmit
                        : handleOtpVerification
                    }
                    className="grid gap-4"
                  >
                    <div className="grid gap-2">
                      {!isOtpAvailable && (
                        <Label htmlFor="login-contact">Contact</Label> 
                      )}
                      {/* ----------------------contact for password login------ */}
                      {!isOtpAvailable && (
                        <Input
                          id="login-contact"
                          type="text"
                          placeholder="Enter your contact"
                          value={loginCredentials.contact}
                          onChange={(e) =>{
                            setLoginCredentials((prev) => ({
                              ...prev,
                              contact: e.target.value,
                            }));
                            setOtpLoginCredentials((prev) => ({
                              ...prev,
                              contact: e.target.value,
                            }));
                          } }
                          required
                        />
                      )}
                    </div>
                    {/* ------------------password for contact------ */}
                    {!isLoginTypeOtp && (
                      <div className="grid gap-2">
                        <Label htmlFor="login-password">Password</Label>
                        

                        {/* -----------------new password input------- */}
                        <div className="flex gap-x-1  rounded-md border border-input pr-2">
                          <Input
                            id="login-password"
                            className="outline-none border-none"
                            // className="px-3 py-2 h-10 flex-1 outline-none bg-red-900"
                            type={!viewPassword ? "password" : "text"}
                            placeholder="Enter your password"
                            value={loginCredentials.password}
                            onChange={(e) =>
                              setLoginCredentials((prev) => ({
                                ...prev,
                                password: e.target.value,
                              }))
                            }
                            // className="bg-transparent  px-5"
                            required
                          />
                          {loginCredentials.password.length > 0 &&
                            loginCredentials.password.trim() !== "" && (
                              <img
                                src={
                                  !viewPassword ? eyeOpen?.src : eyeClose?.src
                                }
                                onClick={() => setViewPassword(!viewPassword)}
                                className="w-5 cursor-pointer "
                                alt="load..."
                              />
                            )}
                        </div>
                        {/* ------------end------------------- */}
                      </div>
                    )}
                    {/* -------------otp input----------- */}
                    {isLoginTypeOtp && isOtpAvailable && (
                      <div className="grid gap-2">
                        <Label htmlFor="login-password">Otp</Label>
                       
                        <div className="w-full flex justify-center ">
                        <OtpInputComponent userInput={getLoginOtpData}  />
                        </div>
                      </div>
                    )}
                    {/* -------------password login button--------- */}
                    {!isLoginTypeOtp && (
                      <Button
                        type="submit"
                        className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                      >
                        {loading ? "Logging in..." : "Login"}
                      </Button>
                    )}
                    {/* -----------------------otp login button----------- */}
                    {/* -------------------------for sending otp request----------- */}
                    {isLoginTypeOtp && !isOtpAvailable && (
                      <Button
                        type="button"
                        onClick={handleGetOtp}  
                        className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                      >
                        {requestOtpMutation.isPending ? "Sending Otp..." : "Request Otp" } 
                      </Button>
                    )}
                    {/* ---------------------for verifying otp and login ------------- */}
                    {isLoginTypeOtp && isOtpAvailable && (
                      <Button
                        type="submit"  
                        className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                      >
                        {!loading ? "Verify Otp & Login" : "Verifying..."}
                      </Button>
                    )}
                    {loginMutation.isError && (
                      <p className="text-center mt-2 text-red-500">
                        Error: {loginMutation.error?.message || "Login failed"}
                      </p>
                    )}
                    <p className="text-center mt-3">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        className="text-blue-500 underline"
                        onClick={() => handleTabChange("register")}
                      >
                        Signup
                      </button>
                    </p>
                    <p
                      onClick={() => {setIsLoginTypeOtp(!isLoginTypeOtp);setIsOtpAvailable(false);setOtpLoginCredentials((pre) => ({ ...pre, otp: "" }));}}
                      className="text-center cursor-pointer" 
                    >
                      Login with {isLoginTypeOtp ? "Password" : "Otp"}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="register" key={currentTab}>
              {/* ------------------registerartion form------------------ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#01549A]">
                    Register
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegisterSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="register-name">Name</Label>
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Enter your name"
                        value={registerCredentials.name}
                        onChange={(e) =>
                          setRegisterCredentials((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="Enter your email"
                        value={registerCredentials.email}
                        onChange={(e) =>
                          setRegisterCredentials((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="register-contact">Contact</Label>
                      <Input
                        id="register-contact"
                        type="text"
                        placeholder="Enter your contact"
                        value={registerCredentials.contact}
                        onChange={(e) =>
                          setRegisterCredentials((prev) => ({
                            ...prev,
                            contact: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="register-password">Password</Label>
                      <div className="flex gap-x-1  rounded-md border border-input pr-2">
                      <Input
                        id="register-password"
                          className="outline-none border-none"
                        type={!viewPassword ? "password" : "text"}
                        placeholder="Enter your password"
                        value={registerCredentials.password}
                        onChange={(e) =>
                          setRegisterCredentials((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        required
                      />

{registerCredentials.password.length > 0 &&
                            registerCredentials.password.trim() !== "" && (
                              <img
                                src={
                                  !viewPassword ? eyeOpen?.src : eyeClose?.src
                                }
                                onClick={() => setViewPassword(!viewPassword)}
                                className="w-5 cursor-pointer "
                                alt="load..."
                              />
                            )}

                      </div>
                     
                    </div>

                    <Button
                      type="button"
                      onClick={handleRegisterOtp}
                      className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                    >
                      {requestRegisterOtpMutation.isPending ? "Registering..." : "Register"}
                    
                    </Button>

                    <OtpModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} otpVerificationFunc={handleRegisterOtpVerification}   resendOtpFunc={handleRegisterOtp}  userContact={registerCredentials.contact}  />  

                    <p className="text-center mt-3">
                      Already have an account?{" "}
                      <button
                        type="button"
                        className="text-blue-500 underline"
                        onClick={() => handleTabChange("login")}
                      >
                        Login
                      </button>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </UnauthenticatedLayout>
  );
};

export default LoginModule;
