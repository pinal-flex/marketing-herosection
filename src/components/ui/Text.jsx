import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const textVariants = cva("", {
  variants: {
    variant: {
      sm: "text-sm/4 tracking-normal",
      base: "text-base/7",
      lg: "text-lg text-pretty",
      xl: "text-xl/8 tracking-tight",
      "3xl": "text-3xl tracking-tight",
      "4xl": "text-4xl tracking-tight",
      "5xl": "text-5xl tracking-tight",
    },
    weight: {
      medium: "font-medium",
      normal: "font-normal",
      semibold: "font-semibold",
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
