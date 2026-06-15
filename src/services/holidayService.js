import { getCached, setCache } from "./cacheService.js";
import { CACHE_KEYS } from "../utils/constants.js";
import { createMockFetcher } from "./apiClient.js";
import { MOCK_HOLIDAYS } from "../data/mockData.js";

const fetchHolidays = createMockFetcher(MOCK_HOLIDAYS, 700);

export async function searchHolidays(params, signal) {
  const cacheKey = `${CACHE_KEYS.HOLIDAYS}_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const results = await fetchHolidays(signal);
  const filtered = results.filter(
    (h) =>
      !params.destination ||
      h.destination.toLowerCase().includes(params.destination.toLowerCase())
  );
  setCache(cacheKey, filtered);
  return filtered;
}

export async function getHolidayById(id, signal) {
  const holidays = await fetchHolidays(signal);
  return holidays.find((h) => h.id === id) ?? null;
}
