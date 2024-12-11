"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthenticatedLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track auth status
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const token = Cookies.get("authToken");
    console.log("the value of token is",token)
    if (!token) {
      // Redirect to login with redirectUrl query parameter
      router.push(`/login?redirectUrl=${encodeURIComponent(pathname)}`);
    } else {
      setIsAuthenticated(true); // Set as authenticated once the token is confirmed
    }
  }, [router, pathname]);

  // Avoid rendering layout until authentication status is determined
  if (!isAuthenticated) return null;

  return (
    <div>
      {/* Add Navbar, Sidebar, or other authenticated components here */}
      <main>{children}</main>
    </div>
  );
}
