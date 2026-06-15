import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useAsync } from "../hooks/useAsync.js";
import { searchTrains } from "../services/trainService.js";
import { useBooking } from "../contexts/BookingContext.jsx";
import TrainSearchForm from "../components/booking/TrainSearchForm.jsx";
import GenericResultCard from "../components/booking/GenericResultCard.jsx";
import { SkeletonList } from "../components/common/Skeleton.jsx";
import Button from "../components/common/Button.jsx";

export default function TrainResultsContainer() {
  const location = useLocation();
  const { addBooking } = useBooking();
  const initialParams = location.state?.searchParams || {};

  const fetchTrains = useCallback((params, signal) => searchTrains(params, signal), []);
  const { data, loading, error, execute } = useAsync(fetchTrains, false);

  useEffect(() => {
    if (Object.keys(initialParams).length > 0) execute(initialParams);
  }, []);

  const handleBook = (train) => addBooking({ type: "train", item: train, price: train.price });

  return (
    <div className="space-y-8">
      <TrainSearchForm onSearch={(params) => execute(params)} />
      {loading ? (
        <SkeletonList count={3} />
      ) : error ? (
        <div className="text-center py-12 space-y-4" role="alert">
          <p className="text-red-500">{error}</p>
          <Button onClick={() => execute(initialParams)}>Retry</Button>
        </div>
      ) : data?.length ? (
        <div className="space-y-4" role="list">
          {data.map((train) => (
            <GenericResultCard key={train.id} item={train} type="train" onBook={handleBook} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          <p>Search for trains to see results</p>
        </div>
      )}
    </div>
  );
}
