import React from "react";
import { useTravel } from "./TravelContext.jsx";

export default function DestinationCard({ destination, compact = false }) {
  const { addToCart } = useTravel();
  const { name, image, country, price, rating, blurb, tags } = destination;

  return (
    <article className={`card-glass overflow-hidden ${compact ? "flex" : ""}`}>
      <img
        src={image}
        alt={name}
        className={`${compact ? "w-40 h-40" : "w-full h-44"} object-cover`}
      />

      <div className="p-4 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="text-amber-600 font-semibold">★ {rating}</span>
        </div>

        <p className="text-sm text-slate-600">{country}</p>
        <p className="mt-2 text-sm">{blurb}</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-700"
            >
              #{t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-extrabold text-sky-700">${price}</span>

          <button
            onClick={() => addToCart(destination)}
            className="px-3 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}