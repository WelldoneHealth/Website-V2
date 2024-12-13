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
import { useRegister } from "@/hooks/useRegister";
import hospitalIcon2 from "@/asset/Icons/hospital2_icon.svg";
import eyeOpen from "@/asset/Icons/eyeOpen.svg";
import eyeClose from "@/asset/Icons/eyeClose.svg";
import { toast } from "sonner";
import Link from "next/link";
import { errorToast, successToast } from "@/shared/atoms/ToastMessageFunc";
import { useQuery } from "@tanstack/react-query";

const LoginModule = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    contact: "",
    password: "",
  });

  const [otpLoginCredentials,setOtpLoginCredentials]=useState({
    contact:"",
    otp:"",
    method:"login"
  })

  const [isOtpAvailable,setIsOtpAvailable]=useState(false)

  const [registerCredentials, setRegisterCredentials] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [isLoginTypeOtp,setIsLoginTypeOtp]=useState(false)

  const [viewPassword,setViewPassword]=useState(false)

  const [currentTab, setCurrentTab] = useState("login"); // state for current tab

  const loading = useUtilStore((state) => state.loading);
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const requestOtpMutation=useRequestOtp()
  const verifyOtpMutation=useVerifyOtp()

  const handleTabChange = (tab) => {
    setCurrentTab(tab); // Update the current tab
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginCredentials.contact && loginCredentials.password) {
      loginMutation.mutate({ ...loginCredentials });
    }
  };


  const handleOtpVerification=(e) => {
    e.preventDefault();
    if (otpLoginCredentials.otp && otpLoginCredentials.contact) {
      verifyOtpMutation.mutate({ ...otpLoginCredentials });
    }
  };


const handleGetOtp=(e)=>{
  // console.log("the button is cliked",2+3)
  // console.log("Contact:",otpLoginCredentials.contact);
  e.preventDefault(); 
  if(otpLoginCredentials.contact){
    requestOtpMutation.mutate({...otpLoginCredentials, contact: otpLoginCredentials.contact.trim() },{
      onSuccess: () => {
      // console.log("otp sent")
      setIsOtpAvailable(true)
      },
      onError: (error) => {
        console.log("error in otp")
    }
  })
  }

}


  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    registerMutation.mutate(registerCredentials, {
      onSuccess: () => {
        setCurrentTab("login"); // Switch to login tab on successful registration
        setRegisterCredentials({
          name: "",
          email: "",
          contact: "",
          password: "",
        });
       successToast("Registration successful! Please log in.")
        // console.log("the toast is",toast)
      },
      onError: (error) => {
        errorToast(error?.message ||  "Registration failed! Try again later")
        // console.log("the error during registration is - ",error?.message)       
      },
    });
  };

  return (
    <UnauthenticatedLayout>
     <div className="w-full min-h-screen py-8 flex flex-col items-center justify-center">
    <p className="text-[#01549A] font-medium text-sm  mb-7 "><Link
              href="https://practice.welldonehealth.in/"
              passHref
              target="_blank"
              className="flex items-center gap-x-3  "
            >  <img
            src={hospitalIcon2?.src}
            className="w-[20px]"
            alt="load..."
          />  I have Clinic/ Hospital </Link ></p> 

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
                <CardTitle className="text-2xl text-[#01549A]">Login</CardTitle>
              </CardHeader>
              <CardContent>
                 <form onSubmit={!isLoginTypeOtp ? handleLoginSubmit :  handleOtpVerification } className="grid gap-4">
                  <div className="grid gap-2">
                
                 {  !isOtpAvailable &&  <Label htmlFor="login-contact">Contact</Label> }
                        {/* ----------------------contact for password login------ */}
                   {!isLoginTypeOtp && <Input
                      id="login-contact"
                      type="text"
                      placeholder="Enter your contact"
                      value={loginCredentials.contact}
                      onChange={(e) =>
                        setLoginCredentials((prev) => ({
                          ...prev,
                          contact: e.target.value,
                        }))
                      }
                      required
                    />}
      {/* ----------------------contact for otp login------ */}
                    { (isLoginTypeOtp && !isOtpAvailable) && <Input
                      id="login-contact"
                      type="tel"
                      placeholder="Enter your contact"
                      value={otpLoginCredentials.contact}
                      onChange={(e) =>
                        setOtpLoginCredentials((prev) => ({
                          ...prev,
                          contact: e.target.value,
                        }))
                      }
                      required
                    /> } 
                  </div>
                  {/* ------------------password for contact------ */}
                 {!isLoginTypeOtp && <div className="grid gap-2">
                    <Label htmlFor="login-password">Password</Label>
                    {/* <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginCredentials.password}
                      onChange={(e) =>
                        setLoginCredentials((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      required
                    /> */}


{/* -----------------new password input------- */}
<div className="flex gap-x-3 px-3 border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  ">
<Input
                      id="login-password"
                      type={!viewPassword?"password":"text"}
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
{(loginCredentials.password.length > 0 && loginCredentials.password.trim() !== "")  && <img src={!viewPassword ? eyeOpen?.src : eyeClose?.src } onClick={()=>setViewPassword(!viewPassword)} className="w-5 cursor-pointer " alt="load..."     />  }             
</div>
 {/* ------------end------------------- */}                         
 
                  </div> }
                  {/* -------------otp input----------- */}
                  { (isLoginTypeOtp && isOtpAvailable) &&  <div className="grid gap-2">
                    <Label htmlFor="login-password">Otp</Label>
                    <Input
                      id="login-password"
                      type="text"
                      placeholder="Enter your Otp"
                      value={otpLoginCredentials.otp}
                      onChange={(e) =>
                        setOtpLoginCredentials((prev) => ({
                          ...prev,
                          otp: e.target.value,
                        }))
                      }
                      required
                    />




                  </div>}
                  {/* -------------password login button--------- */}
                 { !isLoginTypeOtp && <Button
                    type="submit"
                    className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button> }
                  {/* -----------------------otp login button----------- */}
                  { (isLoginTypeOtp && !isOtpAvailable) && <Button
                    type="button"
                    onClick={handleGetOtp}
                    className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                  >
                    Request Otp
                  </Button>}
                  { (isLoginTypeOtp && isOtpAvailable) &&  <Button
                    type="submit"
                    className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                  >
                 { !loading ? "Verify Otp & Login" : "Verifying..."}
                  </Button>}
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
                  {/* <p onClick={()=>setIsLoginTypeOtp(!isLoginTypeOtp)} className="text-center cursor-pointer">Login with {isLoginTypeOtp?"Password" : "Otp"}</p> */}
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
                    <Input
                      id="register-password"
                      type="password"
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
                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                  >
                    {registerMutation.isPending ? "Registering..." : "Register"}
                  </Button>
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
