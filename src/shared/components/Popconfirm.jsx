import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

export function PopConfirm({
  title,
  description,
  confirmLabel = "Yes",
  cancelLabel = "No",
  onConfirm,
  onCancel,
  visible,
  onVisibilityChange,
  loading = false, // Default is not loading
}) {
  const [isOpen, setIsOpen] = useState(!!visible);

  // Synchronize internal state with `visible` prop
  useEffect(() => {
    if (visible !== undefined) {
      setIsOpen(visible);
    }
  }, [visible]);

  const handleClose = () => {
    setIsOpen(false);
    onVisibilityChange?.(false);
    onCancel?.();
  };

  const handleConfirm = () => {
    if (!loading) {
      onConfirm();
      setIsOpen(false);
      onVisibilityChange?.(false);
    }
  };

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        onVisibilityChange?.(open);
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleClose}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm} disabled={loading}>
            {loading ? <Spinner /> : confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
