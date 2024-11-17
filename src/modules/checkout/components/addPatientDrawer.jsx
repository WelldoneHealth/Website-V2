import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
} from "@/components/ui/drawer"; // Custom Drawer components
import { useMutation } from "@tanstack/react-query";
import { addPatient } from "../apis";
import { Spinner } from "@/shared/components/Spinner";


const AddPatientDrawer = ({ isOpen, onClose, setSelectedPatient }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    lastName: "",
    middleName: "",
    email: "",
    age: "",
    gender: "",
    bloodGroup: "",
    primaryLanguage: "",
    address: "",
    pincode: "",
    city: "",
    relationship: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Mutation for adding patient
  const addPatientMutation = useMutation({
    mutationFn: addPatient,
    onSuccess: (data) => {
      console.log("Patient added successfully:", data);
      setSelectedPatient(data);
      onClose(); // Close the drawer
    },
    onError: (error) => {
      console.error("Error adding patient:", error);
      // Optionally show an error notification
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      first_name: formData.patientName,
      last_name: formData.lastName,
      middle_name: formData.middleName || null,
      gender: formData.gender,
      age: formData.age,
      blood_group: formData.bloodGroup,
      email: formData.email || null,
      city: formData.city,
      address: formData.address,
      relation: formData.relationship,
      contact: formData.mobileNumber, // Placeholder value; replace as needed
      user: "9c278b86-4b81-436c-9d35-1f5fdf26bbc6", // Example value; replace as needed
      updated_at: new Date().toISOString(),
      is_deleted: false,
      medical_history: "",
    };
    addPatientMutation.mutate(payload); // Trigger the mutatio
  };

  return (
    <div>
      <Drawer open={isOpen} onClose={onClose}>
        <DrawerContent className="overflow-y-scroll w-[400px]">
          <DrawerClose onClick={onClose} />
          <DrawerHeader>
            <DrawerTitle>Patient Information</DrawerTitle>
            <DrawerDescription>
              Please provide the necessary details.
            </DrawerDescription>
          </DrawerHeader>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full px-5 space-y-2"
          >
            {/* ---- First Name ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-lg text-red-600">*</span>
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ---- Last Name ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ---- Middle Name ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ---- Mobile Number ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number <span className="text-lg text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ---- Email ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ---- Age ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Age <span className="text-lg text-red-600">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ---- Gender ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Gender <span className="text-lg text-red-600">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* ---- Blood Group ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Blood Group <span className="text-lg text-red-600">*</span>
              </label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full h-[45px] border-[1px] border-[#C4C4C4] rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
              </select>
            </div>

            {/* ---- Primary Language ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Primary Language <span className="text-lg text-red-600">*</span>
              </label>
              <select
                name="primaryLanguage"
                value={formData.primaryLanguage}
                onChange={handleChange}
                className="w-full h-[45px] border-[1px] border-[#C4C4C4] rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="marathi">Marathi</option>
              </select>
            </div>

            {/* ---- Patient Address ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address <span className="text-lg text-red-600">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full h-[70px] border-[1px] border-[#C4C4C4] rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ---- Pincode ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Pincode <span className="text-lg text-red-600">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full h-[45px] border-[1px] border-[#C4C4C4] rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ---- City ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                City <span className="text-lg text-red-600">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-[45px] border-[1px] border-[#C4C4C4] rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ---- Relationship ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Relationship with Patient
                <span className="text-lg text-red-600">*</span>
              </label>
              <input
                type="text"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="w-full h-[45px] border-[1px] border-[#C4C4C4] rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <DrawerFooter>
            <button
              type="button"
              onClick={handleSubmit}
              className="my-7 rounded-[10px] w-full bg-primary text-white font-medium p-3 flex items-center justify-center"
            >
            {addPatientMutation.isLoading?<Spinner /> :"Submit"}
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AddPatientDrawer;
