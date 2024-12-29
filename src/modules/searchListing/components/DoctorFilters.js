"use client";
import React, { useState, useEffect } from "react";
import { getSpecialty } from "../apis";

export default function DoctorFilters({ onApplyFilters, onResetFilters }) {
  const [filters, setFilters] = useState({
    specialty: "",
    state: "",
    city: "",
    experience: "",
  });

  const [specialties, setSpecialties] = useState([]);
  const [searchSpecialty, setSearchSpecialty] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    onApplyFilters(filters);
  }, [filters]);

  // Fetch specialties from API
  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await getSpecialty();
        setSpecialties(response); // Set the API response to the specialties state
      } catch (error) {
        console.error("Error fetching specialties:", error);
      }
    };
    fetchSpecialties();
  }, []);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSpecialtySelect = (id, specialty) => {
    setFilters((prevFilters) => ({ ...prevFilters, specialty: id })); // Use correct ID
    setSearchSpecialty(specialty); // Update the displayed name
    setShowDropdown(false); // Hide dropdown
  };

  const handleClearSpecialty = () => {
    setFilters({ ...filters, specialty: "" }); // Clear the specialty ID
    setSearchSpecialty(""); // Clear the search field
    setShowDropdown(false); // Hide dropdown
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const filteredSpecialties = specialties.filter((item) =>
    item?.specialty?.toLowerCase().includes(searchSpecialty.toLowerCase())
  );

  return (
    <div className="hidden lg:block  space-y-6 border p-5 rounded shadow-sm">
      {/* Specialty Filter with Search */}
      <div className="space-y-2 relative">
        <label className="text-sm font-medium">Specialty</label>
        <input
          type="text"
          placeholder="Search or select a specialty"
          value={searchSpecialty}
          onChange={(e) => {
            setSearchSpecialty(e.target.value);
            setShowDropdown(true); // Show dropdown when typing
          }}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
          onFocus={() => setShowDropdown(true)} // Show dropdown on focus
        />
        {showDropdown && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-md max-h-40 overflow-y-auto">
            <li
              onClick={handleClearSpecialty}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
            >
              Clear Specialty
            </li>
            {filteredSpecialties.length > 0 ? (
              filteredSpecialties.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSpecialtySelect(item.id, item.specialty)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.specialty}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>

      {/* State Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium">State</label>
        <select
          name="state"
          value={filters.state}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">Select State</option>
          <option value="MA">Maharashtra</option>
        </select>
      </div>

      {/* City Filter
      <div className="space-y-2">
        <label className="text-sm font-medium">City</label>
        <select
          name="city"
          value={filters.city}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">Select City</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="new-york">New York</option>
          <option value="houston">Houston</option>
        </select>
      </div> */}

      {/* Experience Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Experience</label>
        <select
          name="experience"
          value={filters.experience}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          <option value="">Any Experience</option>
          <option value="0-5">0-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button
          className="text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
          onClick={onResetFilters}
        >
          Reset
        </button>
        <button
          className="text-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
}