"use client";
import React, { useState } from "react";
import CanceledAppo_Card from "@/modules/appointmentHistory/components/CancelledAppo_Card";
import CompletedAppo_Card from "@/modules/appointmentHistory/components/CompletedAppo_Card";
import { useQuery } from "@tanstack/react-query";
import { getAppointmentHistory } from "./apis";
import UpcomingAppo_Card from "./components/UpcomingAppo_Card";
import moment from "moment/moment";
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
  const {
    data: appointmentHistoryList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["appointmentHistoryList", currentPage],
    queryFn: () => getAppointmentHistory(currentPage),
  });

  const [view, setView] = useState(1);

  const limit = 10; // Number of items per page
  const totalPages = Math.ceil((appointmentHistoryList?.count || 0) / limit);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
  

  if (isLoading) return <div>Loading...</div>;



  return (
    <div className="max-lg:mt-[85px] w-full  max-w-[1600px] mx-auto px-1 pt-[1px]  asm:px-3    gap-x-2  lg:px-[2rem]">
 
 {/* <div className="w-full lsm:hidden my-3 mb-5 flex bg-green-900 justify-between gap-x-16 text-[13px]  sm:text-sm" >
    <button onClick={()=>setView(1)}  type="button" className='flex-1 px-6 py-2 bg-primary font-medium text-white rounded-[10px]' >All Appointments</button>
    <button onClick={()=>setView(2)}  type="button" className='flex-1 px-6 py-2 bg-primary font-medium text-white rounded-[10px]' >All family members</button>
</div> */}
 
 {view===1 && <div className="flex ">




       {/* ---------1st part--------- */}
       <div className= " max-lg:hidden w-[240px]  esm:w-[300px] h-screen  px-2 py-3 space-y-2 ">
<p className='text-base xl:text-lg font-medium text-[#01549A] text-center'>All My Family Member's</p>
<div className="flex p-2 rounded-[10px]  gap-x-3 border-[1px] border-[#01549A]">
    <div className=" text-white text-sm esm:text-base size-9  esm:size-12 flexCenter bg-primary rounded-full">RN</div>
    <div className="text-xs lsm:text-sm flex flex-col justify-center">
        <p>Rakesh Nandre <span className='font-medium'>(Me)</span> </p>
        <p>Mumbai​</p>
    </div>
</div>
<button className=' max-xl:hidden text-[#01549A] font-medium px-4 py-2 rounded-[10px] border-[1px] border-[#01549A] text-base '>+ Add New Family Member's</button>
<button className='xl:hidden text-[#01549A] font-medium px-4 py-2 rounded-[10px] border-[1px] border-[#01549A] text-sm xl:text-base '>+ Family Member's</button>
    </div>


    {/* --------2nd part------------- */}
    <div className=" max-md:w-full px-1  flex-1 md:border-l-[1px] border-[#545454] h-screen overflow-y-scroll custom-scrollbar">

 
{/* ---------------main upcoming appointment cards------------ */}
<div className="w-full  md:px-5  py-2 pb-7  space-y-5 border-b-[1px] md:border-[#545454] ">
<p className='text-lg md"text-[20px]'>Upcoming Appointments</p>
{appointmentHistoryList?.results?.map((item, index) => {
  const appointmentDate = moment(item.appointment_date);
  const today = moment().startOf("day");
  const currentTime = moment();
  const expectedTime = moment(item.doctor_expected_visiting_time, "HH:mm:ss");

  if (appointmentDate.isSameOrAfter(today) && currentTime.isBefore(expectedTime)) {
    return (
      <UpcomingAppo_Card
        key={item?.id || index}
        appointmentData={item}
      />
    );
  }
  return null;
})}

</div>


{/* -----------history cards list--------- */}
<p className='text-lg  md:px-5 my-3 text-[#01549A] font-medium'>All Appointments</p>
         


<div className="w-full md:px-5 py-2 pb-7 space-y-5 border-b-[1px] border-[#545454] min-h-screen">
  {appointmentHistoryList?.results
    ?.filter((item) => {
      const today = moment().startOf("day");
      const appointmentDate = moment(item.appointment_date);
      const currentTime = moment();
      const expectedTime = moment(item.doctor_expected_visiting_time, "HH:mm:ss");

      // Check if the appointment date is older than today
      if (appointmentDate.isBefore(today)) {
        return true; // Include all past appointments
      }

      // If the appointment date is today, compare the time
      if (appointmentDate.isSame(today)) {
        return currentTime.isAfter(expectedTime); // Include only if the current time is greater
      }

      return false; // Exclude future appointments
    })
    .map((item, index) =>
      !item?.is_cancelled ? (
        <CompletedAppo_Card key={index} appointmentCardData={item} status={true} />
      ) : (
        <CanceledAppo_Card key={index} appointmentCardData={item} status={false} />
      )
    )}
</div>;





    </div>
 </div>}



{view===2 && <div className="w-full bg-gray-300 h-screen">
 hello   </div>}
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
