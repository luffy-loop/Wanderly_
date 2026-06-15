import { memo } from "react";

function Card({ children, className = "", hover = true, padding = "p-6", onClick, ...props }) {
  return (
    <div
      className={`card-premium ${padding} ${hover ? "" : "hover:shadow-card hover:translate-y-0"} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

export default memo(Card);
