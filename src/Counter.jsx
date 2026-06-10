import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(() =>
    Number(localStorage.getItem("funCount") || 0)
  );

  const mood = count % 5 === 0 && count !== 0 ? "Party!" : "Chill";

  useEffect(() => {
    localStorage.setItem("funCount", String(count));
  }, [count]);

  return (
    <div className="card-glass p-6 flex items-center justify-between">
      <div>
        <p className="font-bold">
          Mood: <span className="text-fuchsia-700">{mood}</span>
        </p>
        <p className="text-slate-600 text-sm">
          Every 5 clicks triggers Party!
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          className="px-3 py-2 rounded-lg bg-slate-200"
        >
          -
        </button>

        <span className="w-10 text-center font-bold">{count}</span>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-2 rounded-lg bg-amber-400"
        >
          +
        </button>
      </div>
    </div>
  );
}