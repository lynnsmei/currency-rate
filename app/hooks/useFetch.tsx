import { useState, useEffect } from "react";
import log from "../logger";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T,>(url: string | undefined, retryCountAllowed: number = 3, retryTimeout: number = 5000): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    if (!url) {
      log.error("URL is undefined, fetch cannot be performed");
      setLoading(false);
      setError(new Error("URL is undefined"));
      return;
    }

    const abortController = new AbortController();
    const { signal } = abortController;
    
    const fetchData = async () => {
      const startTime = performance.now();
      try {
        log.info(`Starting fetch from ${url}`);
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const result: T = await response.json();
        if (!signal.aborted) {
          setData(result);
          log.info(`Data fetched successfully from ${url}`);
        }
      } catch (error) {
        if (!signal.aborted) {
          if (error instanceof Error) {
            setError(error);
            log.error(`Error fetching data from ${url}: ${error.message}`);
          } else {
            setError(new Error("An unknown error occurred"));
            log.error(`Unknown error fetching data from ${url}`);
          }

          if (retryCount < retryCountAllowed) {
            setTimeout(() => {
              setRetryCount(retryCount + 1);
            }, retryTimeout);
          }
        }
      } finally {
        if (!signal.aborted) {
          const endTime = performance.now();
          log.info(`Fetch from ${url} took ${endTime - startTime} ms`);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
      log.info(`Fetch aborted for ${url}`);
    };
  }, [url, retryCount]);

  return { data, loading, error };
};

export default useFetch;
