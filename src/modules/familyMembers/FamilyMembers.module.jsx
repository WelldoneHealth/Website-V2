"use client";

import React, { useState } from "react";
import { deleteFamilyMember, fetchFamilyMemberList } from "./apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MemberCard from "./components/MemberCard";
import { PlusIcon } from "lucide-react";
import { PopConfirm } from "@/shared/components/Popconfirm";
import { toast } from "sonner";
import AddPatientDrawer from "@/shared/atoms/addPatientDrawer";

const FamilyMembersModule = () => {
  const queryClient = useQueryClient();
  const [popconfirm, setPopconfirm] = useState({
    show: false,
    data: null,
  });
  const [showAddPatientDrawer, setShowAddPatientDrawer] = useState(false);

  const { data: familyMemberList = [], isLoading } = useQuery({
    queryKey: ["familyMemberList"],
    queryFn: fetchFamilyMemberList,
  });

  // Delete member mutation
  const deleteMemberMutation = useMutation({
    mutationFn: () => deleteFamilyMember(popconfirm?.data?.id),
    onSuccess: () => {
      toast("Member has been deleted", {
        description: `${popconfirm?.data?.first_name ?? ""} ${
          popconfirm?.data?.last_name ?? ""
        }`,
      });
      handleClosePopconfirm();
      queryClient.invalidateQueries(["familyMemberList"]); // Refresh patient list
    },
    onError: () => {
      toast("Something went wrong!");
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

  return (
    <div className="max-w-[1600px] mx-auto p-5">
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg ">
          Here you can see the list of all members and also add new member.
        </p>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white  rounded shadow "
          onClick={() => {
            setShowAddPatientDrawer(true);
          }}
        >
          <PlusIcon /> Add New Patient
        </button>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {familyMemberList?.map((item, index) => (
          <MemberCard
            key={index}
            memberDetails={item}
            deleteMember={handleDeleteMember}
          />
        ))}
      </div>
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
      <AddPatientDrawer
        isOpen={showAddPatientDrawer}
        onClose={() => {
          setShowAddPatientDrawer(false);
        }}
        successCallback={(item) => {
          setShowAddPatientDrawer(false);
          toast("Member Added Successfully", {
            description: `${item?.first_name ?? ""} ${item?.last_name ?? ""}`,
          });
        }}
      />
    </div>
  );
};

export default FamilyMembersModule;
