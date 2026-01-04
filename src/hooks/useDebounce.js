// src/hooks/useDebounce.js
import { useEffect, useState } from "react";

export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);

    // cleanup to avoid memory leaks
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}