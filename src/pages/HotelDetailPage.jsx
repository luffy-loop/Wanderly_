import { useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useAsync } from "../hooks/useAsync.js";
import { getHotelById } from "../services/hotelService.js";
import { useBooking } from "../contexts/BookingContext.jsx";
import Skeleton from "../components/common/Skeleton.jsx";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import SafeImage from "../components/common/SafeImage.jsx";

export default function HotelDetailPage() {
  const { id } = useParams();
  const { addBooking } = useBooking();

  const fetchHotel = useCallback((hotelId, signal) => getHotelById(hotelId, signal), []);
  const { data: hotel, loading, error, execute } = useAsync(fetchHotel, false);

  useEffect(() => {
    execute(id);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-8 w-2/3" variant="text" />
        <Skeleton className="h-4 w-1/2" variant="text" />
      </div>
    );
  }

  if (error || !hotel) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
        <p className="text-red-500">{error || "Hotel not found"}</p>
        <Link to="/hotels"><Button variant="outline">Back to Hotels</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <Link to="/hotels" className="text-sm text-brand-600 hover:text-brand-800 mb-6 inline-block">
        ← Back to Hotels
      </Link>
      <div className="card-premium overflow-hidden !p-0">
        <div className="relative aspect-[16/7] md:aspect-[21/9] bg-slate-100 overflow-hidden">
          <SafeImage
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="section-title">{hotel.name}</h1>
              <p className="text-slate-500 mt-1">{hotel.city} · ⭐ {hotel.rating} ({hotel.reviews} reviews)</p>
            </div>
            <p className="font-display font-bold text-2xl text-brand-700">
              ₹{hotel.price.toLocaleString()} <span className="text-sm text-slate-400 font-normal">/ night</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((a) => <Badge key={a} variant="neutral">{a}</Badge>)}
          </div>
          <Button
            variant="accent"
            onClick={() => addBooking({ type: "hotel", item: hotel, price: hotel.price })}
            aria-label={`Book ${hotel.name}`}
          >
            Book This Hotel
          </Button>
        </div>
      </div>
    </div>
  );
}
