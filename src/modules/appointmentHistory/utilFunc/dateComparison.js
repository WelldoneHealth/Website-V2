import moment from "moment";

export const getRemainingDays = (followupDate) => {
  if (!followupDate) return null; 

  const today = moment().startOf('day'); 
  const followUp = moment(followupDate).startOf('day'); 

  const remainingDays = followUp.diff(today, 'days');

  return remainingDays > 0 ? remainingDays : 0; 
};