"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import HospitalCard from "./components/HospitalCard";
import DoctorCard from "./components/DoctorCard";
import DoctorFilters from "./components/DoctorFilters";
import HeaderSearch from "./components/SearchBar";
import { getSerachList } from "./apis";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import noData from "@/asset/Icons/no_data.svg";

export default function SearchListingPage() {
  const [filters, setFilters] = useState({});
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHospital, setIsHospital] = useState(null);
  const [doctorSpeciality, setDoctorSpeciality] = useState(null);

  const limit = 10; // Items per page

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isHospitalParam = params.get("is_hospital");
    const practiceSpecialityParam = params.get("practice-specialty");

    if (isHospitalParam) {
      setIsHospital(isHospitalParam === "true");
    }
    if (practiceSpecialityParam) {
      setDoctorSpeciality(practiceSpecialityParam);
    }
  }, []);

  const combinedFilters = {
    ...filters,
    ...(isHospital !== null && { is_hospital: isHospital }),
    ...(doctorSpeciality && { specialty: doctorSpeciality }),
    page: currentPage,
    limit,
  };


  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchList", combinedFilters],
    queryFn: () => getSerachList(combinedFilters),
    keepPreviousData: true,
  });

  const totalPages = Math.ceil((data?.count || 0) / limit);

  // Handle pagination change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Apply filters
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page on filter change
    setMobileFilterOpen(false);
  };

  const resetFilters = () => {
    setFilters({});
    setCurrentPage(1);
    setMobileFilterOpen(false);
  };

  // Handle search input
  const handleSearch = (query) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: query,
    }));
    setCurrentPage(1); // Reset to first page on search
  };

  // Render pagination numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageLinks = 3;
    const halfMax = Math.floor(maxPageLinks / 2);

    const startPage = Math.max(currentPage - halfMax, 1);
    const endPage = Math.min(currentPage + halfMax, totalPages);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header Search */}
      <HeaderSearch onSearch={handleSearch} />

      <div className="flex space-x-6 py-4">
        {/* Desktop Filter */}
        <aside className="hidden lg:block w-1/4">
          <DoctorFilters onApplyFilters={applyFilters} onResetFilters={resetFilters} />
        </aside>

        {/* Listing Section */}
        <main className="flex-1 space-y-4">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Failed to fetch data.</p>}
          {data?.results?.length > 0 ? (
            <div className="space-y-4">
              {data.results.map((item, index) =>
                item?.is_hospital ? (
                  <HospitalCard key={index} listInfo={item} />
                ) : (
                  <DoctorCard key={index} listInfo={item} />
                )
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <img src={noData.src} alt="No data available" className="h-40 w-40 mb-4" />
              <p className="text-gray-500">No results found for your search.</p>
            </div>
          )}

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="hover:cursor-pointer"
                />
              </PaginationItem>

              {renderPageNumbers().map((page, index) =>
                typeof page === "number" ? (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => handlePageChange(page)}
                      className="hover:cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  <PaginationEllipsis key={index} />
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="hover:cursor-pointer"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  );
}
