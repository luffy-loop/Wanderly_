import { createContext, useContext, useState, useMemo } from "react";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [activeTab, setActiveTab] = useState("flights");
  const [searchParams, setSearchParams] = useState({});
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings((prev) => [
      ...prev,
      { ...booking, id: `bk_${Date.now()}`, createdAt: Date.now() },
    ]);
  };

  const totalBookings = bookings.length;

  const value = useMemo(
    () => ({
      activeTab,
      setActiveTab,
      searchParams,
      setSearchParams,
      bookings,
      addBooking,
      totalBookings,
    }),
    [activeTab, searchParams, bookings, totalBookings]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
