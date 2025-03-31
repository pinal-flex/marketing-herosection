import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const navlinkVariants = cva("", {
  variants: {
    variant: {
      default: "font-semibold text-gray-900",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      primary: "bg-indigo-600 text-sm text-white hover:bg-indigo-500",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "text-sm/6 text-gray-900 font-semibold",
      link: "text-primary underline-offset-4 hover:underline",
      hidden: "block text-base/7 hover:bg-gray-50 font-semibold text-gray-900",
    },
    size: {
      default: "-mx-3 px-3 rounded-lg",
      sm: "text-sm/6",
      lg: "h-11 rounded-md px-8",
      icon: "-m-2.5 p-2.5 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

export default function NavLink({
  children,
  variant,
  size,
  className,
  ...props
}) {
  return (
    <a className={cn(navlinkVariants({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
}
