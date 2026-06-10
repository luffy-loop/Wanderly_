import React from "react";

const items = [
  { id: 1, name: "Leo", text: "Kyoto in spring is a dream!" },
  { id: 2, name: "Mina", text: "Sunrise yoga in Bali was magical." },
  { id: 3, name: "Omar", text: "Paris croissants every morning, no regrets." }
];

export default function Comments() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {items.map((c) => (
        <div key={c.id} className="card-glass p-4">
          <p className="font-semibold">{c.name}</p>
          <p className="text-sm text-slate-700 mt-1">
            "{c.text}"
          </p>
        </div>
      ))}
    </div>
  );
}