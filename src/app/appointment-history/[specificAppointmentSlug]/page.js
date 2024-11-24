import React from 'react'
import SpecificAppointmentHistory from '@/modules/appointmentHistory/SpecificAppointmentHistory.module'
import { notFound } from "next/navigation";


export default function page({params}) {
  const { specificAppointmentSlug } = params;


  if (!specificAppointmentSlug) {
    notFound(); // Handles 404 if slugs are invalid or missing
  }
  return (
  <SpecificAppointmentHistory appointmentId={specificAppointmentSlug} />
  )
}
 