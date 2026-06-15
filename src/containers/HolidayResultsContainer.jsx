import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useAsync } from "../hooks/useAsync.js";
import { searchHolidays } from "../services/holidayService.js";
import { useBooking } from "../contexts/BookingContext.jsx";
import HolidaySearchForm from "../components/booking/HolidaySearchForm.jsx";
import HolidayResultCard from "../components/booking/HolidayResultCard.jsx";
import { SkeletonList } from "../components/common/Skeleton.jsx";
import Button from "../components/common/Button.jsx";

export default function HolidayResultsContainer() {
  const location = useLocation();
  const { addBooking } = useBooking();
  const initialParams = location.state?.searchParams || {};

  const fetchHolidays = useCallback((params, signal) => searchHolidays(params, signal), []);
  const { data, loading, error, execute } = useAsync(fetchHolidays, false);

  useEffect(() => {
    if (Object.keys(initialParams).length > 0) execute(initialParams);
  }, []);

  const handleBook = (holiday) => addBooking({ type: "holiday", item: holiday, price: holiday.price });

  return (
    <div className="space-y-8">
      <HolidaySearchForm onSearch={(params) => execute(params)} />
      {loading ? (
        <SkeletonList count={3} />
      ) : error ? (
        <div className="text-center py-12 space-y-4" role="alert">
          <p className="text-red-500">{error}</p>
          <Button onClick={() => execute(initialParams)}>Retry</Button>
        </div>
      ) : data?.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {data.map((holiday) => (
            <HolidayResultCard key={holiday.id} holiday={holiday} onBook={handleBook} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          <p>Search for holiday packages to see results</p>
        </div>
      )}
    </div>
  );
}
