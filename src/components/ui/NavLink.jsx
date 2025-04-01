import { cn } from "../../lib/utils";

export default function NavLink({ href, children, className = "" }) {
  return (
    <a href={href} className={cn('font-semibold text-gray-900', className)}>
      {children}
    </a>
  );
}
