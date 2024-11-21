// app/doctor-details/[doctorSlug]/[branchSlug]/page.js

import DoctorDetailsModule from "@/modules/doctorDetails/DoctorDetails.module";
import { notFound } from "next/navigation";

export default async function DoctorDetailsPage({ params }) {
  const { doctorSlug, branchSlug } = params;

  // console.log(" the ",hello)

  // You can add your server-side logic here, such as fetching data
  // const doctorData = await fetchDoctorData(doctorSlug, branchSlug);

  if (!doctorSlug || !branchSlug) {
    notFound(); // Handles 404 if slugs are invalid or missing
  }

  return (
    <DoctorDetailsModule doctorSlug={doctorSlug} branchSlug={branchSlug} />
  );
}
