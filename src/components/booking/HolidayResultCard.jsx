import { memo } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";
import Badge from "../common/Badge.jsx";
import SafeImage from "../common/SafeImage.jsx";

function HolidayResultCard({ holiday, onBook }) {
  return (
    <article className="card-premium overflow-hidden !p-0 flex flex-col group" aria-label={holiday.title}>
      <div className="card-image card-image-hover">
        <SafeImage src={holiday.image} alt={holiday.title} loading="lazy" />
        <div className="absolute top-3 right-3">
          <Badge variant="success">{holiday.duration}</Badge>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col space-y-3">
        <h3 className="font-display font-bold text-lg text-slate-900">{holiday.title}</h3>
        <p className="text-sm text-slate-500">{holiday.destination}</p>
        <div className="flex flex-wrap gap-1">
          {holiday.highlights.map((h) => <Badge key={h} variant="neutral">{h}</Badge>)}
        </div>
        <div className="flex items-center justify-between pt-2 mt-auto">
          <p className="font-display font-bold text-xl text-brand-700">₹{holiday.price.toLocaleString()}</p>
          <div className="flex gap-2">
            <Link to={`/holidays/${holiday.id}`}>
              <Button variant="outline" className="!px-3 !py-2 text-sm">Details</Button>
            </Link>
            <Button onClick={() => onBook?.(holiday)} className="!px-3 !py-2 text-sm">Book</Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default memo(HolidayResultCard);
