import { memo } from "react";

const variants = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline:
    "inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-600 text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
  ghost:
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-slate-600 font-medium rounded-lg hover:bg-slate-100 transition-all duration-200",
};

function Button({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  "aria-label": ariaLabel,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${variants[variant]} ${className} ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading…
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default memo(Button);
