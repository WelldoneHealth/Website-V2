"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { doctorHospitalSearch } from "@/modules/home/apis";
import { Routes } from "@/shared/Routes";

const NavbarHero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const debounceTimeout = useRef(null);

  const handleSearch = async (term) => {
    if (!term) {
      setSearchResults([]);
      return;
    }
    try {
      setLoading(true);
      setError("");

      // Call the API with the search term
      const results = await doctorHospitalSearch(term);

      if (results.length > 0) {
        setSearchResults(results);
      } else {
        setSearchResults([]);
        setError("No results found for your search.");
      }
    } catch (err) {
      console.error("Search API error:", err);
      setError("An error occurred while fetching the search results.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Debounce logic
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      handleSearch(searchTerm);
    }, 500);

    // Cleanup timeout on unmount or new effect
    return () => clearTimeout(debounceTimeout.current);
  }, [searchTerm]);

  const handleOptionClick = (option) => {
    if (option?.is_hospital) {
      const slug = option?.value;
      const pathname = Routes.hospitalDetailsPage.replace(
        "/[slug]",
        `/${slug}` 
      );
      router.push(pathname);
    } else {
      const combinedSlug = option?.value;
      const splittedSlug = combinedSlug?.split("_");
      const doctorSlug = splittedSlug[0];
      const branchSlug = splittedSlug[1];
      const pathname = Routes.doctorDetailsPage.replace(
        "/[doctorSlug]/[branchSlug]",
        `/${doctorSlug}/${branchSlug}`
      );
      router.push(pathname);
    }
  };

  return (
    <section id="navbar_hero" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center pt-20 pb-20 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Doctors and Clinics Near You Instantly!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Book appointments, manage your healthcare history, and take control
            of your health journey—all in one place.
          </p>

          {/* Search Section */}
          <div className="relative bg-white p-4 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search by doctor, clinic, or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {/* Dropdown Results */}
                {searchResults.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-2 max-h-60 overflow-auto divide-y divide-gray-200">
                    {searchResults.map((result, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => handleOptionClick(result)}
                      >
                        <p className="font-medium">{result.label}</p>
                        <p className="text-sm text-gray-600">
                          {result.is_hospital
                            ? "Type: Hospital"
                            : "Type: Doctor"}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* City Dropdown */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="form-select rounded-lg border-gray-300 text-gray-700 px-4 py-3"
              >
                <option value="" disabled>
                  Select City
                </option>
                {/* Add city options here */}
              </select>

              {/* Search Button */}
              <button
                onClick={() => handleSearch(searchTerm)}
                className="bg-[#01549A] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Search Now
              </button>
            </div>
          </div>

          {/* Loading State */}
          {loading && <p className="text-[#01549A] mt-4">Loading...</p>}

          {/* Error State */}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default NavbarHero;
