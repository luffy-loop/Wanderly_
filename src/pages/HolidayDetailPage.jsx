import { useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useAsync } from "../hooks/useAsync.js";
import { getHolidayById } from "../services/holidayService.js";
import { useBooking } from "../contexts/BookingContext.jsx";
import Skeleton from "../components/common/Skeleton.jsx";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import SafeImage from "../components/common/SafeImage.jsx";

export default function HolidayDetailPage() {
  const { id } = useParams();
  const { addBooking } = useBooking();

  const fetchHoliday = useCallback((holidayId, signal) => getHolidayById(holidayId, signal), []);
  const { data: holiday, loading, error, execute } = useAsync(fetchHoliday, false);

  useEffect(() => {
    execute(id);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-8 w-2/3" variant="text" />
      </div>
    );
  }

  if (error || !holiday) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
        <p className="text-red-500">{error || "Package not found"}</p>
        <Link to="/holidays"><Button variant="outline">Back to Packages</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <Link to="/holidays" className="text-sm text-brand-600 hover:text-brand-800 mb-6 inline-block">
        ← Back to Packages
      </Link>
      <div className="card-premium overflow-hidden !p-0">
        <div className="relative aspect-[16/7] md:aspect-[21/9] bg-slate-100 overflow-hidden">
          <SafeImage
            src={holiday.image}
            alt={holiday.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="section-title">{holiday.title}</h1>
              <p className="text-slate-500 mt-1">{holiday.destination} · {holiday.duration}</p>
            </div>
            <p className="font-display font-bold text-2xl text-brand-700">₹{holiday.price.toLocaleString()}</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 mb-2">Package Highlights</h2>
            <div className="flex flex-wrap gap-2">
              {holiday.highlights.map((h) => <Badge key={h} variant="success">{h}</Badge>)}
            </div>
          </div>
          <Button
            variant="accent"
            onClick={() => addBooking({ type: "holiday", item: holiday, price: holiday.price })}
            aria-label={`Book ${holiday.title}`}
          >
            Book This Package
          </Button>
        </div>
      </div>
    </div>
  );
}
