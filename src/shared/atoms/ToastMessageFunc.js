import { toast } from "sonner";

export const successToast=(message)=>toast.success(message, {
    style: { fontSize:"14px", width: "max-content" ,padding:"10px", }
  });

export const errorToast=(message)=>toast.error(message, {
    style: { fontSize:"14px", width: "max-content" ,padding:"10px", }
  });

  export const infoToast=(message)=>toast.info(message, {
    style: { fontSize:"14px", width: "max-content" ,padding:"10px", }
  });