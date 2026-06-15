import { memo } from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/about" },
    { label: "Press", to: "/about" },
    { label: "Blog", to: "/#blogs" },
  ],
  support: [
    { label: "Help Center", to: "/about" },
    { label: "Contact Us", to: "/about" },
    { label: "FAQs", to: "/about" },
    { label: "Cancellation Policy", to: "/about" },
  ],
  services: [
    { label: "Flights", to: "/flights" },
    { label: "Hotels", to: "/hotels" },
    { label: "Bus", to: "/buses" },
    { label: "Trains", to: "/trains" },
    { label: "Holidays", to: "/holidays" },
  ],
};

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden="true">🌍</span>
              <span className="font-display font-bold text-xl text-white">TravelEase</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your premium travel companion. Book flights, hotels, buses, trains and holiday packages with ease.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-white mb-4 capitalize">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TravelEase. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
