"use client"

import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"; // Custom Drawer components
import { useMutation } from "@tanstack/react-query";
import { addPatient } from "../../modules/checkout/apis";
import { Spinner } from "@/shared/components/Spinner";
import backArrow from "@/asset/Icons/backArrow.svg";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bloodGroups } from "../usefulData/addPatientDrawerData";
import { toast } from "sonner";

const AddPatientDrawer = ({ isOpen, onClose, successCallback,updatePatientListFunc,patientDataToEdit }) => {

// console.log("the final detail to edit is",patientDataToEdit )  

  const [formData, setFormData] = useState({
    patientName:patientDataToEdit?.first_name || "" ,
    lastName:patientDataToEdit?.last_name  ||  "",
    middleName:patientDataToEdit?.middle_name  ||   "",
    email:patientDataToEdit?.email  ||  "",
    age:patientDataToEdit?.age  ||  "",
    gender:patientDataToEdit?.gender  ||  "",
    bloodGroup:patientDataToEdit?.blood_group  ||  "",
    primaryLanguage:patientDataToEdit?.primary_language || "",
    address:patientDataToEdit?.address  ||  "",
    pincode:patientDataToEdit?.pincode  ||  "",
    city:patientDataToEdit?.city   ||  "",
    relationship:patientDataToEdit?.relation  || "",
    mobileNumber:patientDataToEdit?.contact   ||  "",
  });


  useEffect(() => {
    setFormData({
      patientName: patientDataToEdit?.first_name || "",
      lastName: patientDataToEdit?.last_name || "",
      middleName: patientDataToEdit?.middle_name || "",
      email: patientDataToEdit?.email || "",
      age: patientDataToEdit?.age || "",
      gender: patientDataToEdit?.gender || "",
      bloodGroup: patientDataToEdit?.blood_group || "",
      primaryLanguage: patientDataToEdit?.primary_language || "",
      address: patientDataToEdit?.address || "",
      pincode: patientDataToEdit?.pincode || "",
      city: patientDataToEdit?.city || "",
      relationship: patientDataToEdit?.relation || "",
      mobileNumber: patientDataToEdit?.contact || "",
    });
  }, [patientDataToEdit]);  
  
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Mutation for adding patient
  const addPatientMutation = useMutation({
    mutationFn: addPatient,
    onSuccess: (data) => {
      console.log("Patient added successfully:", data);
      successCallback(data);
      toast("Patient added successfully!")
      onClose(); 
      // updatePatientListFunc()
      setFormData({
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
    },
    onError: (error) => {
      console.error("Error adding patient:", error);
      toast("Patient addition error")
      // Optionally show an error notification
    },
  });

  const validateForm = () => {
    let formErrors = {};
    if (!formData.patientName) formErrors.patientName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.mobileNumber) formErrors.mobileNumber = "Mobile Number is required";
    if (!formData.age || isNaN(formData.age) || formData.age <= 0) formErrors.age = "Age must be a positive number";
    if (!formData.gender) formErrors.gender = "Gender is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.relationship) formErrors.relationship = "Relationship is required";
    if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (formData.mobileNumber && !/^\d{10}$/.test(formData.mobileNumber)) {
      formErrors.mobileNumber = "Mobile number should be 10 digits";
    }
    if( formData.pincode && ( isNaN(formData.pincode) || formData.pincode.length !==6)) formErrors.pincode="Pin Code must be a valid Number"

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      first_name: formData.patientName,
      last_name: formData.lastName,
      middle_name: formData.middleName || null,
      gender: formData.gender,
      age: formData.age,
      blood_group: formData.bloodGroup,
      email: formData.email || null,
      city: formData.city,
      primaryLanguage:formData.primaryLanguage,
      address: formData.address,
      relation: formData.relationship,
      contact: formData.mobileNumber, // Placeholder value; replace as needed
      user: "9c278b86-4b81-436c-9d35-1f5fdf26bbc6", // Example value; replace as needed
      updated_at: new Date().toISOString(),
      is_deleted: false,
      medical_history: "",
    };
    addPatientMutation.mutate(payload); // Trigger the mutation
  };




  return (
    <div className=" ">
      <Drawer className open={isOpen} onClose={onClose}>
        <DrawerContent className="overflow-y-scroll w-full  msm:w-[490px]  overflow-x-hidden ">
          <DrawerClose onClick={onClose} />
          <DrawerHeader className="mt-16 relative flex flex-col gap-y-2 items-center">
            <DrawerTitle>Patient Information</DrawerTitle>
            <div onClick={onClose} className="absolute left-5 top-3 flex lsm:hidden cursor-pointer">
              <img src={backArrow?.src} className="rotate-180 w-7" alt="back" />
            </div>
            {/* <DrawerDescription>Please provide the necessary details.</DrawerDescription> */}
          </DrawerHeader>

          <div onClick={(e) => e.stopPropagation()} className="w-full px-5 space-y-2 ">
            {/* <button type="bitton" onClick={()=>console.log("-->>>",patientDataToEdit)} >jhsdgjhdfjhh</button> */}
            {/* ---- First Name ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">First Name <span className="text-lg text-red-600">*</span></label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.patientName ? 'border-red-600' : ''}`}
                required
              />
              {errors.patientName && <p className="text-red-600 text-sm">{errors.patientName}</p>}
            </div>

            {/* ---- Last Name ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">Last Name <span className="text-lg text-red-600">*</span></label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-600' : ''}`}
                required
              />
              {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
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
              <label className="block text-sm font-medium mb-1">Mobile Number <span className="text-lg text-red-600">*</span></label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.mobileNumber ? 'border-red-600' : ''}`}
                required
              />
              {errors.mobileNumber && <p className="text-red-600 text-sm">{errors.mobileNumber}</p>}
            </div>

            {/* ---- Email ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-600' : ''}`}
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            {/* ---- Age ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">Age <span className="text-lg text-red-600">*</span></label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.age ? 'border-red-600' : ''}`}
                required
              />
              {errors.age && <p className="text-red-600 text-sm">{errors.age}</p>}
            </div>

            {/* ---- Gender ---- */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Gender <span className="text-lg text-red-600">*</span></label>
             
                <Select
    className="w-full max-w-[100%]"
    name="gender"
    onValueChange={(value)=>setFormData({ ...formData, gender: value })}
    value={formData.gender}
  >
    <SelectTrigger className="w-full border rounded-md px-3 h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-500">
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Gender</SelectLabel>
        {["Male","Female","Other"].map((item, index) => (
          <SelectItem className="cursor-pointer" key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
              {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}
            </div>

{/* ---- Blood Group ---- */}
<div>
              <label className="block text-sm font-medium mb-1">
                Blood Group 
              </label>
              <Select
    className="w-full max-w-[100%]"
    name="bloodGroup"
    onValueChange={(value)=>setFormData({ ...formData, bloodGroup: value })}
    value={formData.bloodGroup}
  >
    <SelectTrigger className="w-full border rounded-md px-3 h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-500">
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Blood Group</SelectLabel>
        {bloodGroups.map((item, index) => (
          <SelectItem className="cursor-pointer" key={index} value={item?.value}>
            {item?.label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
            </div>

            {/* ---- Primary Language ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Primary Language 
              </label>
              <Select
    className="w-full max-w-[100%]"
    name="bloodGroup"
    onValueChange={(value)=>setFormData({ ...formData, primaryLanguage: value })}
    value={formData.primaryLanguage}
  >
    <SelectTrigger className="w-full border rounded-md px-3 h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-500">
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Primary Language</SelectLabel>
        {["English","Hindi","Marathi"].map((item, index) => (
          <SelectItem className="cursor-pointer" key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
            </div>

            {/* ---- Patient Address ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Address 
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full h-[70px] border-[1px] border-[#C4C4C4] rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
               
              />
            </div>


   {/* ---- Pincode ---- */}
   <div>
              <label className="block text-sm font-medium mb-1">
                Pincode 
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.pincode ? 'border-red-600' : ''}`}
            
              />
                {errors.pincode && <p className="text-red-600 text-sm">{errors.pincode}</p>}
            </div>

            {/* ---- City ---- */}
            <div>
              <label className="block text-sm font-medium mb-1">City <span className="text-lg text-red-600">*</span></label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.city ? 'border-red-600' : ''}`}
                required
              />
              {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
            </div>

            {/* ---- Relationship ---- */}
            {/* <div className="w-full ">
              <label className="block text-sm font-medium mb-1">Relationship <span className="text-lg text-red-600">*</span></label>
           
               <select
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className={`w-full h-[45px] border rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.gender ? 'border-red-600' : ''}`}
                required
              >
                 <option value="">Select</option>
                 {["Me","Daughter","Son","Sister","Brother","Relative","Friend"].map((item,index)=><option key={index} value={item}>{item}</option>)}
              </select>
              {errors.relationship && <p className="text-red-600 text-sm">{errors.relationship}</p>}
            </div> */}

          <div className="w-full">
  <label className="block text-sm font-medium mb-1">
    Relationship <span className="text-lg text-red-600">*</span>
  </label>

  <Select
    className="w-full max-w-[100%]"
    name="relationship"
    onValueChange={(value)=>setFormData({ ...formData, relationship: value })}
    // onValueChange={handleChange}
    value={formData.relationship}
  >
    <SelectTrigger className="w-full border rounded-md px-3 h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-500">
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Relationship</SelectLabel>
        {["Me", "Daughter", "Son", "Sister", "Brother", "Relative", "Friend","Guest"].map((item, index) => (
          <SelectItem className="cursor-pointer" key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>

  {errors.relationship && <p className="text-red-600 text-sm">{errors.relationship}</p>}
</div>

          </div>

          <DrawerFooter className="pt-12">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white rounded-md px-5 py-2"
              // disabled={addPatientMutation.isLoading}
            >
              {addPatientMutation.isLoading ? <Spinner /> : "Save"}
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AddPatientDrawer;
