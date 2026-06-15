export const BOOKING_TABS = [
  { id: "flights", label: "Flights", icon: "✈️", path: "/flights" },
  { id: "hotels", label: "Hotels", icon: "🏨", path: "/hotels" },
  { id: "buses", label: "Bus", icon: "🚌", path: "/buses" },
  { id: "trains", label: "Train", icon: "🚂", path: "/trains" },
  { id: "holidays", label: "Holidays", icon: "🌴", path: "/holidays" },
];

export const CACHE_KEYS = {
  FLIGHTS: "travelease_flights",
  HOTELS: "travelease_hotels",
  BUSES: "travelease_buses",
  TRAINS: "travelease_trains",
  HOLIDAYS: "travelease_holidays",
  AUTH: "travelease_auth",
};

export const CACHE_TTL = 5 * 60 * 1000;

export const CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata",
  "Hyderabad", "Pune", "Jaipur", "Goa", "Kerala",
  "Rajasthan", "Manali", "Udaipur", "Andaman", "Kashmir",
  "Agra", "Varanasi", "Shimla",
];
