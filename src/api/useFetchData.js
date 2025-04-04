import { useEffect, useState } from "react";

export function useFetchData(fetch) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchedData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch();
        if (isMounted) {
          setData(response);
        }
      } catch (err) {
        console.error("Fetching error:", err);
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
  }, [fetch]);

  return { isLoading, data };
}
