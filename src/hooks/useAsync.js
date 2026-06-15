import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Async hook with race-condition handling via AbortController.
 * Only the latest request updates state.
 */
export function useAsync(asyncFn, immediate = true) {
  const [state, setState] = useState({ data: null, loading: immediate, error: null });
  const abortRef = useRef(null);
  const requestIdRef = useRef(0);

  const execute = useCallback(
    async (...args) => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
      const controller = new AbortController();
      abortRef.current = controller;
      const currentId = ++requestIdRef.current;

      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const data = await asyncFn(...args, controller.signal);
        if (currentId === requestIdRef.current) {
          setState({ data, loading: false, error: null });
        }
        return data;
      } catch (err) {
        if (err.name === "AbortError") return;
        if (currentId === requestIdRef.current) {
          setState({ data: null, loading: false, error: err.message || "Something went wrong" });
        }
      }
    },
    [asyncFn]
  );

  useEffect(() => {
    if (immediate) execute();
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  return { ...state, execute, refetch: execute };
}
