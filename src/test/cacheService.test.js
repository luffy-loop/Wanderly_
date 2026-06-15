import { describe, it, expect } from "vitest";
import { getCached, setCache } from "../services/cacheService.js";

describe("cacheService", () => {
  it("stores and retrieves cached data", () => {
    const key = "test_cache_key";
    const data = { flights: [1, 2, 3] };
    setCache(key, data);
    expect(getCached(key)).toEqual(data);
    localStorage.removeItem(key);
  });

  it("returns null for missing cache", () => {
    expect(getCached("nonexistent_key_12345")).toBeNull();
  });
});
