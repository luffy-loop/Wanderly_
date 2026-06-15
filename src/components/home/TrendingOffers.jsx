import { memo } from "react";
import { TRENDING_OFFERS } from "../../data/mockData.js";
import Badge from "../common/Badge.jsx";

function TrendingOffers() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="offers-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="offers-heading" className="section-title">Trending Offers</h2>
          <p className="section-subtitle">Exclusive deals to make your travel more affordable</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRENDING_OFFERS.map((offer, i) => (
            <div
              key={offer.id}
              className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${offer.color} text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-in`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl" aria-hidden="true">{offer.icon}</span>
                <Badge variant="neutral" className="!bg-white/20 !text-white text-[10px]">
                  {offer.code}
                </Badge>
              </div>
              <h3 className="font-display font-bold text-lg mt-4">{offer.title}</h3>
              <p className="text-sm text-white/80 mt-1">{offer.subtitle}</p>
              <button
                className="mt-4 text-sm font-semibold underline underline-offset-2 hover:text-cyan-200 transition-colors"
                aria-label={`Apply offer code ${offer.code}`}
              >
                Apply Code →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TrendingOffers);
