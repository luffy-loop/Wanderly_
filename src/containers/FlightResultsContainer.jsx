import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useAsync } from "../hooks/useAsync.js";
import { searchFlights } from "../services/flightService.js";
import { useBooking } from "../contexts/BookingContext.jsx";
import FlightSearchForm from "../components/booking/FlightSearchForm.jsx";
import FlightResultCard from "../components/booking/FlightResultCard.jsx";
import { SkeletonList } from "../components/common/Skeleton.jsx";
import Button from "../components/common/Button.jsx";

function FlightResultsPresenter({ results, loading, error, onBook, onRetry }) {
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
        <p className="text-lg font-medium">No flights found</p>
        <p className="text-sm mt-1">Try adjusting your search criteria</p>
      </div>
    );
  }
  return (
    <div className="space-y-4" role="list" aria-label="Flight results">
      {results.map((flight) => (
        <FlightResultCard key={flight.id} flight={flight} onBook={onBook} />
      ))}
    </div>
  );
}

export default function FlightResultsContainer() {
  const location = useLocation();
  const { addBooking } = useBooking();
  const initialParams = location.state?.searchParams || {};

  const fetchFlights = useCallback(
    (params, signal) => searchFlights(params, signal),
    []
  );

  const { data, loading, error, execute } = useAsync(fetchFlights, false);

  useEffect(() => {
    if (Object.keys(initialParams).length > 0) {
      execute(initialParams);
    }
  }, []);

  const handleSearch = (params) => execute(params);

  const handleBook = (flight) => {
    addBooking({ type: "flight", item: flight, price: flight.price });
  };

  const resultCount = data?.length ?? 0;

  return (
    <div className="space-y-8">
      <FlightSearchForm onSearch={handleSearch} />
      {resultCount > 0 && (
        <p className="text-sm text-slate-500" role="status">
          {resultCount} flight{resultCount !== 1 ? "s" : ""} found
        </p>
      )}
      <FlightResultsPresenter
        results={data}
        loading={loading}
        error={error}
        onBook={handleBook}
        onRetry={() => execute(initialParams)}
      />
    </div>
  );
}
