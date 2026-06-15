import { memo } from "react";
import { Link } from "react-router-dom";
import { MOCK_HOTELS } from "../../data/mockData.js";
import Badge from "../common/Badge.jsx";
import SafeImage from "../common/SafeImage.jsx";

function HotelRecommendations() {
  return (
    <section className="py-12 md:py-16 bg-slate-50" aria-labelledby="hotels-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 id="hotels-heading" className="section-title">Recommended Hotels</h2>
            <p className="section-subtitle">Premium stays at unbeatable prices</p>
          </div>
          <Link to="/hotels" className="text-brand-600 font-semibold text-sm hover:text-brand-800 transition-colors">
            Browse all hotels →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_HOTELS.slice(0, 3).map((hotel) => (
            <Link
              key={hotel.id}
              to={`/hotels/${hotel.id}`}
              className="card-premium overflow-hidden !p-0 group"
              aria-label={`View ${hotel.name}`}
            >
              <div className="card-image card-image-hover">
                <SafeImage src={hotel.image} alt={hotel.name} loading="lazy" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold text-brand-700">
                  ⭐ {hotel.rating}
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-display font-bold text-slate-900">{hotel.name}</h3>
                <p className="text-sm text-slate-500">{hotel.city} · {hotel.reviews} reviews</p>
                <div className="flex flex-wrap gap-1">
                  {hotel.amenities.map((a) => (
                    <Badge key={a} variant="neutral">{a}</Badge>
                  ))}
                </div>
                <p className="font-display font-bold text-brand-700 pt-1">
                  ₹{hotel.price.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ night</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(HotelRecommendations);
