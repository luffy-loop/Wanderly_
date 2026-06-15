import { memo } from "react";
import { Link } from "react-router-dom";
import { POPULAR_DESTINATIONS } from "../../data/mockData.js";
import Badge from "../common/Badge.jsx";
import SafeImage from "../common/SafeImage.jsx";

function PopularDestinations() {
  return (
    <section className="py-12 md:py-16 bg-white" aria-labelledby="destinations-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 id="destinations-heading" className="section-title">Popular Destinations</h2>
            <p className="section-subtitle">Top picks loved by travelers across India</p>
          </div>
          <Link to="/holidays" className="text-brand-600 font-semibold text-sm hover:text-brand-800 transition-colors">
            View all packages →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
          {POPULAR_DESTINATIONS.map((dest) => (
            <Link
              key={dest.id}
              to="/holidays"
              state={{ searchParams: { destination: dest.name } }}
              className="group card-premium overflow-hidden !p-0 hover:!shadow-card-hover"
              aria-label={`Explore ${dest.name}`}
            >
              <div className="card-image card-image-hover">
                <SafeImage
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="accent">{dest.tag}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-xl text-white">{dest.name}</h3>
                  <p className="text-white/80 text-sm">{dest.country}</p>
                </div>
              </div>
              <div className="p-4 md:p-5 flex items-center justify-between">
                <span className="text-sm text-slate-500">Starting from</span>
                <span className="font-display font-bold text-brand-700">{dest.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(PopularDestinations);
