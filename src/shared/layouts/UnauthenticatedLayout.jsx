"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function UnauthenticatedLayout({ children }) {
  const router = useRouter();
  const token = Cookies.get("authToken");

  useEffect(() => {
    if (token) {
      // Use the browser API to read the query parameter for redirectUrl
      const searchParams = new URLSearchParams(window.location.search);
      const redirectUrl = searchParams.get("redirectUrl") || "/";
      router.push(redirectUrl);
    }
  }, [token, router]);

  if (token) return null; // Prevent rendering layout until redirected

  return <main>{children}</main>;
}
