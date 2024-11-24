"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import UpcomingAppo_Card from "./components/UpcomingAppo_Card";
import CompletedAppo_Card from "./components/CompletedAppo_Card";
import CanceledAppo_Card from "./components/CancelledAppo_Card";
import { getAppointmentHistory } from "./apis";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function AppointmentHistoryModule() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: appointmentHistoryList, isLoading } = useQuery({
    queryKey: ["appointmentHistoryList", currentPage],
    queryFn: () => getAppointmentHistory(currentPage),
  });

  const limit = 10; // Number of items per page
  const totalPages = Math.ceil((appointmentHistoryList?.count || 0) / limit);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const categorizeAppointments = (appointments) => {
    const currentTime = moment(); // Current time including date

    return appointments.reduce(
      (acc, appointment) => {
        const appointmentDate = moment(appointment.appointment_date); // Parse appointment date
        const expectedTime = moment(
          appointment.doctor_expected_visiting_time,
          "HH:mm:ss"
        ); // Parse expected visiting time

        // Combine date and time to create a complete moment object for the appointment
        const appointmentMoment = moment(appointmentDate).set({
          hour: expectedTime.hour(),
          minute: expectedTime.minute(),
          second: expectedTime.second(),
        });

        // Classify the appointment based on the date and time
        if (appointmentMoment.isSameOrAfter(currentTime)) {
          acc.upcoming.push(appointment); // Upcoming appointment
        } else {
          acc.past.push(appointment); // Past appointment
        }

        return acc;
      },
      { upcoming: [], past: [] }
    );
  };

  if (isLoading) return <div>Loading...</div>;

  const { upcoming, past } = categorizeAppointments(
    appointmentHistoryList?.results || []
  );

  // Render pagination numbers with ellipsis logic
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageLinks = 3; // Maximum number of page links to show
    const halfMax = Math.floor(maxPageLinks / 2); // Calculate half of max links to display before/after current page

    // Calculate start and end page numbers to display based on current page
    const startPage = Math.max(currentPage - halfMax, 1);
    const endPage = Math.min(currentPage + halfMax, totalPages);

    if (startPage > 1) {
      pageNumbers.push(1); // Always show the first page
      if (startPage > 2) pageNumbers.push("..."); // Add ellipsis if there are pages skipped
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i); // Add the page numbers in the range
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pageNumbers.push("..."); // Add ellipsis if there are pages skipped
      pageNumbers.push(totalPages); // Always show the last page
    }

    return pageNumbers;
  };

  return (
    <div className="max-lg:mt-[85px] w-full max-w-[1600px] mx-auto px-1 pt-[1px] asm:px-3 gap-x-2 lg:px-[2rem]">
      <div
        className="overflow-hidden px-1 overflow-y-scroll custom-scrollbar"
        style={{ height: "calc(100vh - 170px)" }}
      >
        {/* Upcoming Appointments */}
        {upcoming?.length > 0 && (
          <div className="w-full md:px-5 py-2 pb-7 space-y-5">
            <p className="text-lg my-3 text-[#01549A] font-medium">
              Upcoming Appointments
            </p>
            {upcoming.map((item, index) => (
              <UpcomingAppo_Card
                key={item?.id || index}
                appointmentData={item}
                currentPage={currentPage}
              />
            ))}
          </div>
        )}

        {/* All Appointments */}
        {past?.length > 0 && (
          <>
            <p className="text-lg md:px-5 my-3 text-[#01549A] font-medium">
              All Appointments
            </p>
            <div className="w-full md:px-5 py-2 pb-7 space-y-5 border-b-[1px] border-[#545454]">
              {past.map((item, index) =>
                !item?.is_cancelled ? (
                  <CompletedAppo_Card
                    key={index}
                    appointmentCardData={item}
                    status={true}
                  />
                ) : (
                  <CanceledAppo_Card
                    key={index}
                    appointmentCardData={item}
                    status={false}
                  />
                )
              )}
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem className="my-8">
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
    </div>
  );
}