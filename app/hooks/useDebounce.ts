import { useEffect, useState } from "react";

export function useDebounce(query: string, delay: number) {
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(query);
    }, delay);
    return () => clearTimeout(timer);
  }, [query, delay]);

  return debounce;
}
