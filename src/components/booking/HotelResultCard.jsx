import { memo } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";
import Badge from "../common/Badge.jsx";
import SafeImage from "../common/SafeImage.jsx";

function HotelResultCard({ hotel, onBook }) {
  return (
    <article className="card-premium overflow-hidden !p-0 flex flex-col group" aria-label={hotel.name}>
      <div className="card-image card-image-hover">
        <SafeImage src={hotel.image} alt={hotel.name} loading="lazy" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold">
          ⭐ {hotel.rating}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-slate-900">{hotel.name}</h3>
        <p className="text-sm text-slate-500 mt-1">{hotel.city} · {hotel.reviews} reviews</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {hotel.amenities.map((a) => <Badge key={a} variant="neutral">{a}</Badge>)}
        </div>
        <div className="flex items-center justify-between mt-auto pt-4">
          <p className="font-display font-bold text-xl text-brand-700">
            ₹{hotel.price.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ night</span>
          </p>
          <div className="flex gap-2">
            <Link to={`/hotels/${hotel.id}`}>
              <Button variant="outline" className="!px-3 !py-2 text-sm">Details</Button>
            </Link>
            <Button onClick={() => onBook?.(hotel)} className="!px-3 !py-2 text-sm">Book</Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default memo(HotelResultCard);
