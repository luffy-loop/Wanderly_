import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useAsync } from "../hooks/useAsync.js";
import { searchBuses } from "../services/busService.js";
import { useBooking } from "../contexts/BookingContext.jsx";
import BusSearchForm from "../components/booking/BusSearchForm.jsx";
import GenericResultCard from "../components/booking/GenericResultCard.jsx";
import { SkeletonList } from "../components/common/Skeleton.jsx";
import Button from "../components/common/Button.jsx";

export default function BusResultsContainer() {
  const location = useLocation();
  const { addBooking } = useBooking();
  const initialParams = location.state?.searchParams || {};

  const fetchBuses = useCallback((params, signal) => searchBuses(params, signal), []);
  const { data, loading, error, execute } = useAsync(fetchBuses, false);

  useEffect(() => {
    if (Object.keys(initialParams).length > 0) execute(initialParams);
  }, []);

  const handleBook = (bus) => addBooking({ type: "bus", item: bus, price: bus.price });

  return (
    <div className="space-y-8">
      <BusSearchForm onSearch={(params) => execute(params)} />
      {loading ? (
        <SkeletonList count={3} />
      ) : error ? (
        <div className="text-center py-12 space-y-4" role="alert">
          <p className="text-red-500">{error}</p>
          <Button onClick={() => execute(initialParams)}>Retry</Button>
        </div>
      ) : data?.length ? (
        <div className="space-y-4" role="list">
          {data.map((bus) => (
            <GenericResultCard key={bus.id} item={bus} type="bus" onBook={handleBook} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          <p>Search for buses to see results</p>
        </div>
      )}
    </div>
  );
}
