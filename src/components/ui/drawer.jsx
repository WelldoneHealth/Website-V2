"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const DrawerContext = React.createContext({
  direction: "right",
});

const Drawer = ({
  shouldScaleBackground = true,
  direction = "right",
  ...props
}) => (
  <DrawerContext.Provider value={{ direction }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      direction={direction}
      {...props}
    />
  </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...rest}
    />
  );
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerContentVariants = cva(
  "fixed z-50 flex h-auto flex-col border bg-background",
  {
    variants: {
      direction: {
        right: "ml-24 right-0 rounded-l-[10px] inset-y-0",
        top: "mb-24 top-0 rounded-b-[10px] inset-x-0",
        bottom: "mt-24 rounded-t-[10px] bottom-0 inset-x-0",
        left: "mr-24 left-0 rounded-r-[10px] inset-y-0",
      },
    },
    defaultVariants: {
      direction: "right",
    },
  }
);

const DrawerContent = React.forwardRef((props, ref) => {
  const { className, children, ...rest } = props;
  const { direction } = React.useContext(DrawerContext);

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(drawerContentVariants({ direction, className }))}
        {...rest}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...rest}
    />
  );
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    />
  );
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
