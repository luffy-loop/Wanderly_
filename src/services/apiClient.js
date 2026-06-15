const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function apiClient(endpoint, options = {}) {
  const { signal, delayMs = 600 } = options;

  await delay(delayMs);

  if (signal?.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }

  const response = await fetch(endpoint, { signal });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export function createMockFetcher(data, delayMs = 600) {
  return async (signal) => {
    await delay(delayMs);
    if (signal?.aborted) throw new DOMException("Aborted", "AbortError");
    return data;
  };
}
