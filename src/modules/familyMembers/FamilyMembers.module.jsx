"use client";

import React, { useState } from "react";
import { deleteFamilyMember, fetchFamilyMemberList } from "./apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MemberCard from "./components/MemberCard";
import { PlusIcon } from "lucide-react";
import { PopConfirm } from "@/shared/components/Popconfirm";
import AddPatientDrawer from "@/shared/atoms/addPatientDrawer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AuthenticatedLayout from "@/shared/layouts/AuthenticatedLayout";
import { errorToast, successToast } from "@/shared/atoms/ToastMessageFunc";

const FamilyMembersModule = () => {
  const queryClient = useQueryClient();
  const [popconfirm, setPopconfirm] = useState({
    show: false,
    data: null,
  });
  const [showAddPatientDrawer, setShowAddPatientDrawer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editPatientData, setEditPatientData] = useState(null);

  const limit = 10; // Number of items per page

  const { data: familyMemberList = { results: [], count: 0 }, isLoading } =
    useQuery({
      queryKey: ["familyMemberList", currentPage],
      queryFn: () => fetchFamilyMemberList(currentPage), // Updated to return a function
    });

  const totalPages = Math.ceil((familyMemberList?.count || 0) / limit);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Delete member mutation
  const deleteMemberMutation = useMutation({
    mutationFn: () => deleteFamilyMember(popconfirm?.data?.id),
    onSuccess: () => {
      successToast("Member has been deleted", {
        description: `${popconfirm?.data?.first_name ?? ""} ${
          popconfirm?.data?.last_name ?? ""
        }`,
      });
      handleClosePopconfirm();
      queryClient.invalidateQueries(["familyMemberList"]); // Refresh patient list
    },
    onError: () => {
      errorToast("Something went wrong!");
    },
  });

  const handleDeleteMember = (member) => {
    setPopconfirm({
      show: true,
      data: member,
    });
  };

  const handleClosePopconfirm = () => {
    setPopconfirm({
      show: false,
      data: null,
    });
  };

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

  const handleEditPatient = (patientData) => setEditPatientData(patientData);

  if (isLoading) return <div>Loading...</div>;

  return (
    <AuthenticatedLayout>
      {familyMemberList?.results?.length === 0 ? (
        <div className="w-full h-[80vh]  text-lg   flex flex-col items-center justify-center  gap-y-3 ">
          <p>No Members Yet!</p>
          <button
            type="button"
            className="w-[200px] text-sm font-semibold bg-primary rounded-[10px] text-white py-3 text-center cursor-pointer"
            onClick={() => {
              setShowAddPatientDrawer(true);
            }}
          >
            Add Patient
          </button>
        </div>
      ) : (
        <div className="max-w-[1600px] mx-auto p-5">
          <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
            <p className="text-lg ">
              Here you can see the list of all members and also add new member.
            </p>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded shadow"
              onClick={() => {
                setShowAddPatientDrawer(true);
              }}
            >
              <PlusIcon /> Add New Patient
            </button>
          </div>
          {isLoading ? (
            <p>Loading family members...</p>
          ) : familyMemberList?.results?.length > 0 ? (
            <div className="grid grid-cols-12 gap-6">
              {familyMemberList?.results?.map((item, index) => (
                <MemberCard
                  key={index}
                  memberDetails={item}
                  deleteMember={handleDeleteMember}
                  isOpen={() => setShowAddPatientDrawer(true)}
                  patientEditFunc={() => handleEditPatient(item)}
                />
              ))}
            </div>
          ) : (
            <p>No family members found.</p>
          )}
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
          <PopConfirm
            triggerLabel="Delete Member"
            title="Are you absolutely sure?"
            description={
              <div>
                This action cannot be undone. This will permanently delete{" "}
                <b>
                  {[
                    popconfirm?.data?.first_name ?? "",
                    popconfirm?.data?.last_name ?? "",
                  ]?.join(" ")}
                </b>{" "}
                from your account and remove the member's data from our servers.
              </div>
            }
            confirmLabel="Delete"
            cancelLabel="Cancel"
            onConfirm={deleteMemberMutation.mutate}
            onCancel={handleClosePopconfirm}
            variant="destructive"
            visible={popconfirm.show}
            loading={deleteMemberMutation.isPending}
          />
        </div>
      )}
      <AddPatientDrawer
        isOpen={showAddPatientDrawer}
        patientDataToEdit={editPatientData}
        onClose={() => {
          setShowAddPatientDrawer(false);
        }}
        successCallback={(item) => {
          setShowAddPatientDrawer(false);
          successToast("Member Added Successfully", {
            description: `${item?.first_name ?? ""} ${item?.last_name ?? ""}`,
          });
          queryClient.invalidateQueries(["familyMemberList"]);
        }}
      />
    </AuthenticatedLayout>
  );
};

export default FamilyMembersModule;
