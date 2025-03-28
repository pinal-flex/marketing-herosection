import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva(
  "font-sans transition-colors",
  {
    variants: {
      type: {
        h1: "text-4xl font-bold",
        h2: "text-3xl font-semibold",
        h3: "text-2xl font-medium",
        p: "text-base font-normal",
      },
      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        gray: "text-gray-800",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      type: "p",
      color: "gray",
      size: "default",
    },
  }
);

export function Text({ type = "p", color, size, className, children, ...props }) {
  const Component = type;
  return (
    <Component className={cn(textVariants({ type, color, size, className }))} {...props}>
      {children}
    </Component>
  );
}

  

