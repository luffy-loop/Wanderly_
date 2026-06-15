import { memo } from "react";
import Button from "../common/Button.jsx";
import Badge from "../common/Badge.jsx";

function FlightResultCard({ flight, onBook }) {
  return (
    <article className="card-premium flex flex-col md:flex-row md:items-center gap-4 md:gap-6" aria-label={`${flight.airline} flight from ${flight.from} to ${flight.to}`}>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-slate-900">{flight.airline}</span>
          <Badge variant="neutral">{flight.class}</Badge>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div>
            <p className="font-semibold text-lg">{flight.departTime}</p>
            <p className="text-slate-500">{flight.from}</p>
          </div>
          <div className="flex-1 flex items-center gap-2 text-slate-400">
            <div className="flex-1 border-t border-dashed border-slate-300" />
            <span className="text-xs">{flight.duration}</span>
            <div className="flex-1 border-t border-dashed border-slate-300" />
          </div>
          <div>
            <p className="font-semibold text-lg">{flight.arriveTime}</p>
            <p className="text-slate-500">{flight.to}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 md:flex-col md:items-end">
        <p className="font-display font-bold text-2xl text-brand-700">₹{flight.price.toLocaleString()}</p>
        <Button onClick={() => onBook?.(flight)} className="!px-5 !py-2 text-sm" aria-label={`Book flight for ₹${flight.price}`}>
          Book Now
        </Button>
      </div>
    </article>
  );
}

export default memo(FlightResultCard);
