import { memo, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import Button from "../common/Button.jsx";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/flights", label: "Flights" },
    { to: "/hotels", label: "Hotels" },
    { to: "/buses", label: "Bus" },
    { to: "/trains", label: "Trains" },
    { to: "/holidays", label: "Holidays" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2 group" aria-label="TravelEase Home">
            <span className="text-2xl" aria-hidden="true">🌍</span>
            <span className="font-display font-bold text-xl text-brand-800 group-hover:text-brand-600 transition-colors">
              TravelEase
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-700 bg-brand-50"
                      : "text-slate-600 hover:text-brand-700 hover:bg-slate-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-slate-600 hover:text-brand-700"
                >
                  {user?.name}
                </Link>
                <Button variant="outline" onClick={handleLogout} className="!px-4 !py-2 text-sm">
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="accent" className="!px-5 !py-2.5 text-sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-1 animate-in" role="menu">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive ? "text-brand-700 bg-brand-50" : "text-slate-600"
                  }`
                }
                role="menuitem"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-slate-100">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="block px-4 py-3 text-sm font-medium text-slate-600" onClick={() => setMobileOpen(false)}>
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-3 text-sm font-medium text-red-600">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="block px-4 py-3 text-sm font-medium text-brand-700" onClick={() => setMobileOpen(false)}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default memo(Navbar);
