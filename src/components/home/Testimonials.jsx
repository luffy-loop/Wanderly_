import { memo } from "react";
import { TESTIMONIALS } from "../../data/mockData.js";

function Testimonials() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="testimonials-heading" className="section-title">What Travelers Say</h2>
          <p className="section-subtitle">Real experiences from our happy customers</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.id} className="card-premium space-y-4">
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold" aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-sm text-slate-900">{t.name}</cite>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
