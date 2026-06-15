import { Link } from "react-router-dom";
import Button from "../components/common/Button.jsx";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="section-title mb-4">About TravelEase</h1>
      <div className="card-premium space-y-4 text-slate-600 leading-relaxed">
        <p>
          TravelEase is a premium travel booking platform designed to make your journey planning effortless.
          Whether you&apos;re booking flights, hotels, buses, trains, or complete holiday packages, we offer
          the best prices and a seamless experience.
        </p>
        <p>
          Our mission is to empower travelers with smart tools, exclusive deals, and personalized recommendations
          so every trip becomes a memorable adventure.
        </p>
        <p>
          Founded with a passion for travel and technology, TravelEase combines cutting-edge search technology
          with a beautiful, intuitive interface inspired by the best travel platforms in the world.
        </p>
      </div>
      <div className="mt-8">
        <Link to="/">
          <Button variant="primary">Start Booking</Button>
        </Link>
      </div>
    </div>
  );
}
