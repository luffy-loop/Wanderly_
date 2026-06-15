import { memo } from "react";

function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-brand-100 text-brand-700",
    accent: "bg-accent-100 text-accent-600",
    success: "bg-emerald-100 text-emerald-700",
    neutral: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default memo(Badge);
