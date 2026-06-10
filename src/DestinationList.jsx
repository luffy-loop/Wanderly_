import React from "react";
import { useTravel } from "../src/TravelContext.jsx";
import DestinationCard from "./DestinationCard.jsx";

export default function DestinationList() {
  const { filtered, view } = useTravel();

  if (!filtered.length) {
    return <div className="card-glass p-6">No destinations match your search.</div>;
    }

  return (
    <div className={view === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
      {filtered.map(d => (
        <DestinationCard key={d.id} destination={d} compact={view === "list"} />
      ))}
    </div>
  );
}