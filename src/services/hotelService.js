import { getCached, setCache } from "./cacheService.js";
import { CACHE_KEYS } from "../utils/constants.js";
import { createMockFetcher } from "./apiClient.js";
import { MOCK_HOTELS } from "../data/mockData.js";

const fetchHotels = createMockFetcher(MOCK_HOTELS, 700);

export async function searchHotels(params, signal) {
  const cacheKey = `${CACHE_KEYS.HOTELS}_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const results = await fetchHotels(signal);
  const filtered = results.filter(
    (h) =>
      !params.city ||
      h.city.toLowerCase().includes(params.city.toLowerCase())
  );
  setCache(cacheKey, filtered);
  return filtered;
}

export async function getHotelById(id, signal) {
  const hotels = await fetchHotels(signal);
  return hotels.find((h) => h.id === id) ?? null;
}
