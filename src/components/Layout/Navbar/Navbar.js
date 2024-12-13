"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import wellDoneLogo from "@/asset/Icons/wellDoneLogo.svg";
import hamburgerIcon from "@/asset/Icons/hamburger.svg";
import closeIcon from "@/asset/Icons/closeIcon.svg";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => pathname && pathname.startsWith(path.trim());

  const toggleNavBar = () => setNavOpen(!navOpen);

  const navMenu = [
    { title: "Start", toPage: "/start" },
    { title: "Grow", toPage: "/grow" },
    { title: "Fees and Commission", toPage: "/fees-and-commissions" },
    { title: "How it Works", toPage: "/how-it-works" },
    { title: "Features & Resources", toPage: "/features-and-resources" },
  ];

  const handleNavigation = (toPage) => {
    router.push(toPage);
    setNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 lg:p-6">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src={wellDoneLogo}
            alt="WellDone Logo"
            className="w-24 cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-base font-medium text-gray-700">
          {navMenu.map(({ title, toPage }) => (
            <Link key={toPage} href={toPage}>
              <p
                className={`${
                  isActive(toPage)
                    ? "text-primary underline underline-offset-8"
                    : "hover:text-primary"
                }`}
              >
                {title}
              </p>
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex gap-4">
          <Link
            href="https://clinic.welldonehealth.in/"
            target="_blank"
            className="border border-primary px-4 py-2 rounded-md text-primary font-semibold hover:bg-primary hover:text-white"
          >
            Login
          </Link>
          <Link
            href="https://clinic.welldonehealth.in/"
            target="_blank"
            className="bg-primary px-4 py-2 rounded-md text-white font-semibold hover:bg-opacity-90"
          >
            Start Getting Patients
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleNavBar}>
          <Image
            src={navOpen ? closeIcon : hamburgerIcon}
            alt="Menu Icon"
            className="w-8"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center transition-transform duration-300 lg:hidden ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between items-center p-4">
          <Image
            src={wellDoneLogo}
            alt="WellDone Logo"
            className="w-24"
          />
          <button onClick={toggleNavBar}>
            <Image src={closeIcon} alt="Close Icon" className="w-8" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 mt-8 text-lg font-medium">
          {navMenu.map(({ title, toPage }) => (
            <p
              key={toPage}
              onClick={() => handleNavigation(toPage)}
              className={`w-full text-center py-2 cursor-pointer ${
                isActive(toPage) ? "text-primary" : "text-gray-600"
              } hover:text-primary`}
            >
              {title}
            </p>
          ))}
        </nav>
        <div className="mt-auto mb-8 flex flex-col gap-4">
          <Link
            href="https://clinic.welldonehealth.in/"
            target="_blank"
            className="border border-primary px-6 py-2 rounded-md text-primary font-semibold hover:bg-primary hover:text-white text-center"
          >
            Login
          </Link>
          <Link
            href="https://clinic.welldonehealth.in/"
            target="_blank"
            className="bg-primary px-6 py-2 rounded-md text-white font-semibold hover:bg-opacity-90 text-center"
          >
            Start Getting Patients
          </Link>
        </div>
      </div>
    </header>
  );
}
