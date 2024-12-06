import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const HeaderSearch = React.memo(({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [title, setTitle] = useState("Find Hospitals/Doctors");



  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
  };


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isHospitalParam = params.get("is_hospital");
    if (isHospitalParam === "true") {
      setTitle("Find Hospital");
    } else if (isHospitalParam === "false") {
      setTitle("Find Doctor");
    }
  }, []);


  

  return (
    <header
      id="header_search"
      className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200"
      aria-label="Search doctors"
    >
      <div className="container mx-auto px-4 py-4">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

          {/* Search Bar with Integrated Button */}
          <div className="relative w-full lg:w-1/2">
            <label htmlFor="doctor_search" className="sr-only">
              Search doctors
            </label>
            <div className="relative">
              <Input
                id="doctor_search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctors, hospital..."
                className="w-full pl-4 pr-16 py-3 text-gray-600 border border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="absolute inset-y-0 right-0 flex items-center justify-center bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 focus:ring-2 focus:ring-primary-200 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default HeaderSearch;
