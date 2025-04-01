import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      sm: "text-sm leading-4 tracking-normal",
      base: "text-base/7",
      lg: "text-lg text-pretty text-gray-500",
      "4xl": "text-4xl tracking-tight text-gray-900",
      "5xl": "text-5xl tracking-tight text-gray-900",
    },
    weight: {
      medium: "font-medium mt-8",
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
