"use client";

import React, { useEffect, useRef, useState } from "react";
import searchIcon from "@/asset/Icons/search.svg";
import filterDropdownButtonIcon from "@/asset/Icons/filterDropdownButton.svg";
import rotatingArrowIcon from "@/asset/Icons/rotatingArrow.svg";
import sliderArrowIcon from "@/asset/Icons/sliderArrow.svg";
import dynamic from "next/dynamic";
import axiosInstance from "@/shared/apis/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import SearchListingModule from "@/modules/searchListing/SearchListing.module";


export const page = () => {

  
  return (
   <SearchListingModule />
  );
};

export default page;
