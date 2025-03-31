import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      xs: "text-xs tracking-normal",
      sm: "text-sm leading-4 tracking-normal",
      base: "text-base tracking-normal",
      lg: "text-lg text-pretty text-gray-500",
      xl: "text-xl tracking-tight",
      "3xl": "text-3xl tracking-tightest",
      "5xl": "text-5xl tracking-tight text-balance text-gray-900",
    },
    weight: {
      light: "font-light",
      medium: "font-medium mt-8",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },

  defaultVariants: {
    variant: "sm",
    weight: "normal",
  },
});

export function Text({
  type = "p",
  className,
  variant,
  children,
  weight,
  ...props
}) {
  const Component = type;
  return (
    <Component
      className={cn(textVariants({ variant, weight }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
