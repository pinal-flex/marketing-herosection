import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const buttonVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      primary: "bg-indigo-600 text-sm text-white hover:bg-indigo-500",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "text-sm/6 text-gray-900 font-semibold",
      link: "text-primary underline-offset-4 hover:underline",
      hidden: "text-gray-700",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3.5 py-2.5",
      lg: "h-11 rounded-md px-8",
      heroicon: "-m-2.5 p-2.5 rounded-md",
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