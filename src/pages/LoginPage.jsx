import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import Input from "../components/common/Input.jsx";
import Button from "../components/common/Button.jsx";
import { validateLogin } from "../utils/validation.js";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
    setAuthError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const result = login(form.email, form.password);
    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setAuthError(result.error);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl" aria-hidden="true">🌍</span>
            <span className="font-display font-bold text-2xl text-brand-800">TravelEase</span>
          </Link>
          <h1 className="section-title">Welcome Back</h1>
          <p className="section-subtitle">Sign in to access your bookings and dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="card-premium space-y-5" noValidate aria-label="Login form">
          {authError && (
            <p className="text-sm text-red-500 bg-red-50 p-3 rounded-lg" role="alert">{authError}</p>
          )}
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            error={errors.email}
            required
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange("password")}
            error={errors.password}
            required
            autoComplete="current-password"
          />
          <p className="text-xs text-slate-400">Demo: use any email with password 4+ characters</p>
          <Button type="submit" variant="accent" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
