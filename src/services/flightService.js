import { getCached, setCache } from "./cacheService.js";
import { CACHE_KEYS } from "../utils/constants.js";
import { createMockFetcher } from "./apiClient.js";
import { MOCK_FLIGHTS } from "../data/mockData.js";

const fetchFlights = createMockFetcher(MOCK_FLIGHTS, 800);

export async function searchFlights(params, signal) {
  const cacheKey = `${CACHE_KEYS.FLIGHTS}_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const results = await fetchFlights(signal);
  const filtered = results.filter(
    (f) =>
      (!params.from || f.from.toLowerCase().includes(params.from.toLowerCase())) &&
      (!params.to || f.to.toLowerCase().includes(params.to.toLowerCase()))
  );
  setCache(cacheKey, filtered);
  return filtered;
}

export async function getFlightById(id, signal) {
  const flights = await fetchFlights(signal);
  return flights.find((f) => f.id === id) ?? null;
}
