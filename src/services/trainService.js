import { getCached, setCache } from "./cacheService.js";
import { CACHE_KEYS } from "../utils/constants.js";
import { createMockFetcher } from "./apiClient.js";
import { MOCK_TRAINS } from "../data/mockData.js";

const fetchTrains = createMockFetcher(MOCK_TRAINS, 750);

export async function searchTrains(params, signal) {
  const cacheKey = `${CACHE_KEYS.TRAINS}_${JSON.stringify(params)}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const results = await fetchTrains(signal);
  const filtered = results.filter(
    (t) =>
      (!params.from || t.from.toLowerCase().includes(params.from.toLowerCase())) &&
      (!params.to || t.to.toLowerCase().includes(params.to.toLowerCase()))
  );
  setCache(cacheKey, filtered);
  return filtered;
}
