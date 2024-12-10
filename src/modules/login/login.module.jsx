"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLogin } from "@/hooks/useLogin";
import UnauthenticatedLayout from "@/shared/layouts/UnauthenticatedLayout";
import useUtilStore from "@/store/utiStore";
import { useRegister } from "@/hooks/useRegister";
import hospitalIcon2 from "@/asset/Icons/hospital2_icon.svg";
import eyeOpen from "@/asset/Icons/eyeOpen.svg";
import eyeClose from "@/asset/Icons/eyeClose.svg";
import { toast } from "sonner";
import Link from "next/link";

const LoginModule = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    contact: "",
    password: "",
  });

  const [registerCredentials, setRegisterCredentials] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [viewPassword,setViewPassword]=useState(false)

  const [currentTab, setCurrentTab] = useState("login"); // state for current tab

  const loading = useUtilStore((state) => state.loading);
  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const handleTabChange = (tab) => {
    setCurrentTab(tab); // Update the current tab
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginCredentials.contact && loginCredentials.password) {
      loginMutation.mutate({ ...loginCredentials });
    }
  };

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
        // toast({
        //   message: "Registration successful! Please log in.",
        // });
        toast("Registration successful! Please log in.");
      },
      onError: (error) => {
        // console.error(
        //   error?.response?.data?.message || "Registration failed! Try again."
        // );
        // toast({
        //   message:
        //     error?.response?.data?.message ||
        //     "Registration failed! Try again later",
        // });
        toast( error?.message || "Registration failed! Try again.")
      },
    });
  };

  return (
    <UnauthenticatedLayout>
     <div className="w-full h-screen flex flex-col items-center justify-center">
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
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#01549A]">Login</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLoginSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="login-contact">Contact</Label>
                    <Input
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
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
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
                    />
                                        {/* <img src={eyeClose?.src} className="w-5" alt="load..."  /> */}

                  </div>
                  <Button
                    type="submit"
                    className="w-full mt-3 text-lg py-2 bg-[#01549A] hover:text-[#01549A] hover:bg-white border-[1px] hover:border-[#01549A]"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
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
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
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
