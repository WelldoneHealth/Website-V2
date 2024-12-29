"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import DoctorCardSkeleton from "./skeleton/DoctorCardSkeleton";
import DataFetchingError from "@/shared/errorDataComponent/DataFetchingError";

export default function SearchListingPage() {
  // State for query parameters
  const [queryParams, setQueryParams] = useState({
    is_hospital: null,
    specialty: null,
    search: "",
    page: 1,
    limit: 10, // Items per page
  });

  // Initialize URL parameters once on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQueryParams((prev) => ({
      ...prev,
      is_hospital: params.get("is_hospital")
        ? params.get("is_hospital") === "true"
          ? true
          : false
        : null,
      specialty: params.get("practice-specialty") || null,
    }));
  }, []);

  // Fetch data with react-query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchList", queryParams],
    queryFn: () => getSerachList(queryParams),
    keepPreviousData: true, // Keeps previous data until new data is fetched
  });

  // Update queryParams helper functions
  const updateQueryParams = (newParams) => {
    setQueryParams((prev) => ({
      ...prev,
      ...newParams,
    }));
  };

  // Pagination
  const totalPages = Math.ceil((data?.count || 0) / queryParams.limit);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      updateQueryParams({ page });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle Search
  const handleSearch = (query) => {
    updateQueryParams({ search: query, page: 1 });
  };

  // Filters
  const applyFilters = (newFilters) => {
    updateQueryParams({ ...newFilters, page: 1 });
  };

  const resetFilters = () => {
    setQueryParams({
      is_hospital: null,
      specialty: null,
      search: "",
      page: 1,
      limit: 10,
    });
  };

  // Pagination rendering logic
  const renderPageNumbers = useMemo(() => {
    const pageNumbers = [];
    const maxPageLinks = 3;
    const halfMax = Math.floor(maxPageLinks / 2);
    const startPage = Math.max(queryParams.page - halfMax, 1);
    const endPage = Math.min(queryParams.page + halfMax, totalPages);

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
  }, [queryParams.page, totalPages]);


if ( !isLoading && isError) return <DataFetchingError /> ;

  return (
    <div className="w-full max-w-7xl mx-auto px-[2px] asm:p-4 ">
      {/* Header Search */}
      <HeaderSearch onSearch={handleSearch} />

      <div className="flex lg:space-x-6 py-4 ">
        {/* Filters */}
        <aside className="hidden lg:block w-1/4">
          <DoctorFilters
            onApplyFilters={applyFilters}
            onResetFilters={resetFilters}
          />
        </aside>

        {/* Listings */}
        <main className="flex-1 space-y-4 ">
          {isLoading && <div className="space-y-5 px-1 " >
          {Array.from({length:10}).map((_,index)=><DoctorCardSkeleton key={index} />)}
            </div>}
          { !isLoading && isError && <p>Failed to fetch data.</p>}
          {  !isLoading && data?.results  &&  data?.results?.length > 0 ? (
            <div className=" space-y-4 px-1"> 
              {data.results.map((item, index) =>
                item?.is_hospital ? (
                  <HospitalCard key={index} listInfo={item} />
                ) : (
                  <DoctorCard key={index} listInfo={item} />
                )
              )}
            </div>
          ) : (
            !isLoading &&
  !isError && (
            <div className="flex flex-col items-center justify-center py-16">
              <img
                src={noData.src}
                alt="No data available"
                className="h-40 w-40 mb-4"
              />
              <p className="text-gray-500">No results found for your search.</p>
            </div> )
          )} 

          {/* Pagination */}
        {!isLoading &&  !isError && ( <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(queryParams.page - 1)}
                  disabled={queryParams.page === 1}
                />
              </PaginationItem>

              {renderPageNumbers.map((page, index) =>
                typeof page === "number" ? (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={queryParams.page === page}
                      onClick={() => handlePageChange(page)}
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
                  onClick={() => handlePageChange(queryParams.page + 1)}
                  disabled={queryParams.page === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>)}
        </main> 
      </div>
    </div>
  );
}