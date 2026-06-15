import { memo } from "react";
import { Link } from "react-router-dom";
import { MOCK_HOLIDAYS } from "../../data/mockData.js";
import Badge from "../common/Badge.jsx";
import Button from "../common/Button.jsx";
import SafeImage from "../common/SafeImage.jsx";

function TravelPackages() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="packages-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="packages-heading" className="section-title">Travel Packages</h2>
          <p className="section-subtitle">Handpicked holiday experiences for every traveler</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_HOLIDAYS.slice(0, 3).map((pkg) => (
            <article key={pkg.id} className="card-premium overflow-hidden !p-0 group">
              <div className="card-image card-image-hover">
                <SafeImage src={pkg.image} alt={pkg.title} loading="lazy" />
                <div className="absolute top-3 right-3">
                  <Badge variant="success">{pkg.duration}</Badge>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-display font-bold text-lg text-slate-900">{pkg.title}</h3>
                <p className="text-sm text-slate-500">{pkg.destination}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.highlights.map((h) => (
                    <Badge key={h} variant="neutral">{h}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-xs text-slate-400">Starting from</span>
                    <p className="font-display font-bold text-xl text-brand-700">₹{pkg.price.toLocaleString()}</p>
                  </div>
                  <Link to={`/holidays/${pkg.id}`}>
                    <Button variant="primary" className="!px-4 !py-2 text-sm">View Details</Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TravelPackages);
