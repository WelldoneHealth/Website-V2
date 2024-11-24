// app/layouts/UnauthenticatedLayout.js
"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function UnauthenticatedLayout({ children }) {
  const router = useRouter();
  const token = Cookies.get("authToken");
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");

  // Redirect to dashboard if a token is found
  React.useEffect(() => {
    if (token) {
      const redirectTo = redirectUrl ?? "/";
      router.push(redirectTo);
    }
  }, [token, router]);

  if (token) return null; // Prevent rendering layout until redirected

  return (
    <div>
      {/* You can add a different header or hero section here */}
      <main>{children}</main>
    </div>
  );
}
