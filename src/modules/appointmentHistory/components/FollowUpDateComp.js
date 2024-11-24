import React from 'react'
import { getRemainingDays } from '../utilFunc/dateComparison';
import infoIcon from "@/asset/Icons/info.svg";
import moment from 'moment/moment';


export default function FollowUpDateComp({followUpDate}) {
    const remainingDays = getRemainingDays(followUpDate);
  
    return (
    <p className="w-full px-3 flex items-center text-sm text-wrap">
    <img src={infoIcon?.src} className="mr-2 " alt="load..." />{" "} 
{ followUpDate ? (remainingDays !== 0 ?
   ` Follow before – ${ moment(followUpDate).format("DD/MM/YYYY") ?? 'N?A'}, ${remainingDays} days remaining​  ` : 
"FollowUp Today") : "FollowUp Date - N/A " } 
  </p>
  )
}
 