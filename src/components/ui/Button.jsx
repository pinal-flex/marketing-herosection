import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils/cn";

const buttonVariants = cva(
  "px-3.5 py-2.5 text-sm font-semibold shadow-xs",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default function Button({ className, variant, size, ref, ...props }) {
  return (
    <button
      className={cn(
        buttonVariants({ className, variant, size })
      )}
      ref={ref}
      {...props}
    ></button>
  );
}
