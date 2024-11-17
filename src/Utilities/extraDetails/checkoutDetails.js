export const paymentOptions = [
  //   {
  //     id: 0,
  //     primaryText: "Pay online",
  //     subText:
  //       "Allows patients to pay for services through a secure platform, integrated with your EMR.",
  //   },
  {
    id: 1,
    primaryText: "Pay on counter",
    subText: "Pay digitally with SMS Pay Link. Cash may not be accepted.",
  },
];

export const appointmentOptions = [
  {
    id: 0,
    isFirstVisit: true,
    mainInfo: "First Consult ",
    key: "first_time_charge",
  },
  {
    id: 1,
    isFirstVisit: false,
    mainInfo: " Follow Up",
    key: "returning_charge",
  },
];
