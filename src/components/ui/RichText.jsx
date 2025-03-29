export default function RichText({ children, className = "" }) {
  return <p className={`text-gray-500 ${className}`}>{children}</p>;
}
