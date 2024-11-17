// app/layouts/AuthenticatedLayout.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthenticatedLayout({ children }) {
  const router = useRouter();
  const token = Cookies.get("authToken");

  // Redirect if no token found (client-side)
  React.useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) return null; // Prevent rendering layout until redirected

  return (
    <div>
      {/* Add Navbar, Sidebar, or other authenticated components here */}
      <main>{children}</main>
    </div>
  );
}
