import moment from "moment";
import generateInvoiceNo from "@/shared/utils/generateInvoiceNo";
import generateQR from "@/shared/utils/generateQr";
import { toast } from "sonner";
import axiosInstance from "@/shared/apis/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import generateInvoice from "@/shared/utils/generateInvoice";

// Custom hook to fetch appointment data
const useAppointmentInvoice = (appointmentId, appointmentData) => {
  const {
    data: servicesPaidData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["servicesPaid", appointmentId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`apiV1/service-history/`, {
        params: { appointment: appointmentId },
      });
      return data;
    },
    enabled: !!appointmentId, // Only fetch if the appointmentId is provided
  });

  const transformData = (inputData) => {
    return inputData.map((item, index) => {
      // Calculate values
      const unitCost = parseFloat(item?.charge);
      const discountAmount = parseFloat(item?.discount) || 0;
      const gstPercentage = item.gst__percentage || 0;

      // Calculate net amount (before GST)
      const netAmount = unitCost - discountAmount;

      // Calculate GST amount
      const gstAmount = (netAmount * gstPercentage) / 100;

      // Calculate total amount
      const totalAmount = netAmount + gstAmount;

      return {
        serialNo: index + 1,
        description: item?.service,
        qty: 1, // Assuming quantity is always 1
        perUnitCost: unitCost?.toFixed(2),
        dicount: discountAmount?.toFixed(2),
        netAmount: netAmount?.toFixed(2),
        gst: gstPercentage + "%",
        taxAmount: gstAmount?.toFixed(2),
        totalAmount: totalAmount?.toFixed(2),
        isCancelled:
          item?.is_cancelled && item?.is_cancelled == true ? true : false,
      };
    });
  };

  const downloadInvoice = async () => {
    if (!servicesPaidData) {
      toast("No payment history available.");
      return;
    }

    try {
      const servicesPaid = transformData(servicesPaidData);
      const invoiceNo = generateInvoiceNo();

      const details = {
        appointmentDetails: {
          appointmentNumber: appointmentData?.appointment_number,
          appointmentDate: appointmentData?.appointment_date,
          bookedDate: appointmentData?.created_at,
          opdNumber: appointmentData?.equeue_no,
        },
        patientDetails: {
          name: appointmentData?.patient_name,
          age: appointmentData?.patient_age,
          gender: appointmentData?.patient_gender,
          address: appointmentData?.patient_address || "",
          patientId: appointmentData?.patient,
        },
        clinicDetails: {
          doctorName: appointmentData?.doctor_name,
          clinicAddress: appointmentData?.clinic_address,
          clinicPan: appointmentData?.clinic_pan,
          clinicGst: appointmentData?.clinic_gst_no,
          clinicName: appointmentData?.clinic_name,
          clinicNameShort: appointmentData?.clinic_name_short,
        },
        servicesPaid: servicesPaid,
        invoiceNo: invoiceNo,
        invoiceDate: moment().format("YYYY-MM-DD"),
      };

      // Generate QR code
      const qrLink = `https://welldonehealth.in/appointment-history/${appointmentId}`;
      const qrCodeDataUrl = await generateQR(qrLink);

      const pdfBlob = generateInvoice(details, qrCodeDataUrl);
      // Create a URL for the blob
      const blobUrl = URL.createObjectURL(pdfBlob);

      // Create a temporary anchor element
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = `invoice_${appointmentData?.appointment_number}.pdf`;

      // Append the anchor to the body, click it, and remove it
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Release the blob URL
      URL.revokeObjectURL(blobUrl);
      toast("Invoice will be downloaded!");
    } catch (error) {
      console.log({ error });
      toast("Failed to load payment history!");
    }
  };

  return { downloadInvoice, isLoading, error };
};

export default useAppointmentInvoice;
