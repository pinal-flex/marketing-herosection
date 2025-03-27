export default function Button({ children, className = "", variant = "primary", ...props }) {
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-500",
      secondary: "text-gray-900 hover:underline",
    };
  
    return (
      <button {...props} className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs ${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  }
  