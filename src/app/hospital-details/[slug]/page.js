import HospitalDetailsModule from "@/modules/hospitalDetails/HospitalDetails.module";
import { notFound } from "next/navigation";
import React from "react";

const HospitalDetails = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    notFound(); // Handles 404 if slugs are invalid or missing
  }

  return <HospitalDetailsModule slug={slug} />;
};

export default HospitalDetails;
