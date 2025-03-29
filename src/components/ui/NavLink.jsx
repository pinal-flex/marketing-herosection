export default function NavLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`font-semibold text-gray-900 ${className}`}
    >
      {children}
    </a>
  );
}
