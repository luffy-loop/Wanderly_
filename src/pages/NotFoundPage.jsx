import { Link } from "react-router-dom";
import Button from "../components/common/Button.jsx";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <p className="text-8xl font-display font-bold text-gradient" aria-hidden="true">404</p>
        <h1 className="section-title">Page Not Found</h1>
        <p className="text-slate-500 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="accent">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
