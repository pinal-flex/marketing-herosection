import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      primary:
        "bg-indigo-600 text-sm text-white hover:bg-indigo-500 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
      ghost: "text-sm/6 text-gray-900 font-semibold",
      hidden: "text-gray-700",
    },
    size: {
      default: "",
      sm: "rounded-md px-3.5 py-2.5",
      icon: "p-2.5 rounded-md",
    },
  },
   
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export default function Button({ className, variant, size, ref, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      ref={ref}
      {...props}
    ></button>
  );
}
