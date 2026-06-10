import React from "react";
import { useTravel } from "../src/TravelContext.jsx";

export default function SearchBar() {
  const { query, setQuery, view, setView } = useTravel();
  return (
    <div className="flex gap-2">
      <input
        aria-label="search"
        className="w-64 px-3 py-2 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        placeholder="Search beach, Kyoto, art..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => setView(v => (v === "grid" ? "list" : "grid"))}
        className="px-3 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
      >
        {view === "grid" ? "List" : "Grid"}
      </button>
    </div>
  );
}