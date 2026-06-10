import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()} Wanderly • Built with React + Tailwind + Vite
        </p>
      </div>
    </footer>
  );
}