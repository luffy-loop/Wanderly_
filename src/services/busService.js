import { getCached, setCache } from "./cacheService.js";
import { CACHE_KEYS } from "../utils/constants.js";
import { createMockFetcher } from "./apiClient.js";
import { MOCK_BUSES } from "../data/mockData.js";

const fetchBuses = createMockFetcher(MOCK_BUSES, 650);

export async function searchBuses(params, signal) {
  const cacheKey = `${CACHE_KEYS.BUSES}_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const results = await fetchBuses(signal);
  const filtered = results.filter(
    (b) =>
      (!params.from || b.from.toLowerCase().includes(params.from.toLowerCase())) &&
      (!params.to || b.to.toLowerCase().includes(params.to.toLowerCase()))
  );
  setCache(cacheKey, filtered);
  return filtered;
}
