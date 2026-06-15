import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useAsync } from "../hooks/useAsync.js";
import { searchHotels } from "../services/hotelService.js";
import { useBooking } from "../contexts/BookingContext.jsx";
import HotelSearchForm from "../components/booking/HotelSearchForm.jsx";
import HotelResultCard from "../components/booking/HotelResultCard.jsx";
import { SkeletonList } from "../components/common/Skeleton.jsx";
import Button from "../components/common/Button.jsx";

function HotelResultsPresenter({ results, loading, error, onBook, onRetry }) {
  if (loading) return <SkeletonList count={3} />;
  if (error) {
    return (
      <div className="text-center py-12 space-y-4" role="alert">
        <p className="text-red-500">{error}</p>
        <Button onClick={onRetry}>Retry</Button>
      </div>
    );
  }
  if (!results?.length) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p className="text-lg font-medium">No hotels found</p>
        <p className="text-sm mt-1">Try a different city or dates</p>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Hotel results">
      {results.map((hotel) => (
        <HotelResultCard key={hotel.id} hotel={hotel} onBook={onBook} />
      ))}
    </div>
  );
}

export default function HotelResultsContainer() {
  const location = useLocation();
  const { addBooking } = useBooking();
  const initialParams = location.state?.searchParams || {};

  const fetchHotels = useCallback(
    (params, signal) => searchHotels(params, signal),
    []
  );

  const { data, loading, error, execute } = useAsync(fetchHotels, false);

  useEffect(() => {
    if (Object.keys(initialParams).length > 0) {
      execute(initialParams);
    }
  }, []);

  const handleSearch = (params) => execute(params);
  const handleBook = (hotel) => {
    addBooking({ type: "hotel", item: hotel, price: hotel.price });
  };

  return (
    <div className="space-y-8">
      <HotelSearchForm onSearch={handleSearch} />
      <HotelResultsPresenter
        results={data}
        loading={loading}
        error={error}
        onBook={handleBook}
        onRetry={() => execute(initialParams)}
      />
    </div>
  );
}
