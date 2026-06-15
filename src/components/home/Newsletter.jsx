import { useState, memo } from "react";
import Input from "../common/Input.jsx";
import Button from "../common/Button.jsx";
import { validateEmail } from "../../utils/validation.js";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }
    setSubscribed(true);
    setError(null);
  };

  return (
    <section className="py-12 md:py-16" aria-labelledby="newsletter-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 text-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />
          <div className="relative max-w-xl mx-auto space-y-4">
            <h2 id="newsletter-heading" className="font-display font-bold text-2xl md:text-3xl text-white">
              Get Travel Deals in Your Inbox
            </h2>
            <p className="text-blue-100">
              Subscribe for exclusive offers, travel tips and destination guides.
            </p>
            {subscribed ? (
              <p className="text-cyan-200 font-semibold text-lg" role="status">
                🎉 Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-6" noValidate aria-label="Newsletter subscription">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  error={error}
                  className="flex-1"
                  aria-label="Email address"
                />
                <Button type="submit" variant="accent" className="!px-8">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Newsletter);
