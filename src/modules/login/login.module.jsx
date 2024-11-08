"use client";

import { useLogin } from "@/hooks/useLogin";
import UnauthenticatedLayout from "@/shared/layouts/UnauthenticatedLayout";
import useUtilStore from "@/store/utiStore";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginModule = () => {
  const [credentials, setCredentials] = useState({
    contact: "",
    password: "",
  });
  const loading = useUtilStore((state) => state.loading);
  const loginMutation = useLogin();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Ensure component renders only after hydration
  }, []);

  if (!isHydrated) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.contact && credentials.password) {
      loginMutation.mutate(credentials);
    }
  };

  return (
    <UnauthenticatedLayout>
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card className="mx-auto min-w-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  type="text"
                  placeholder="Enter your contact"
                  value={credentials.contact}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      contact: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {loading ? "Logging in..." : "Login"}
              </Button>

              {loading && (
                <p className="text-center mt-2 text-blue-500">Loading...</p>
              )}
              {loginMutation.isError && (
                <p className="text-center mt-2 text-red-500">
                  Error: {loginMutation.error?.message || "Login failed"}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </UnauthenticatedLayout>
  );
};

export default LoginModule;
