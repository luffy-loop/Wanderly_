import React from "react";

export default function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 z-50 bg-emerald-500 text-white px-5 py-3 rounded-xl shadow-lg">
      {message}
    </div>
  );
}