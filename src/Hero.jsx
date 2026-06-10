import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="h-64 sm:h-80 gradient-brand"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="card-glass p-6 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Color your next escape
          </h1>

          <p className="mt-2 text-slate-600">
            Handpicked destinations, playful UI, and instant booking—powered
            by React + Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
}