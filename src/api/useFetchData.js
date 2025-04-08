import { useEffect, useState } from "react";

export function useFetchData(fetchHandler) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;

    const fetchedData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchHandler();
        if (isMounted) {
          setData(response);
        }
      } catch (err) {
        console.error("Fetching error:", err);
        setError(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchedData();

    return () => {
      isMounted = false;
    };
  }, [fetchHandler]);

  return { isLoading, data, error, setData };
}
