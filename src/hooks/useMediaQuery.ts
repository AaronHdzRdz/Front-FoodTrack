import { useEffect, useState } from "react";

// Hook para consultar media queries de forma segura en SSR
export function useMediaQuery(query: string) {
  const getMatches = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatches);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQueryList = window.matchMedia(query);

    const listener = () => setMatches(mediaQueryList.matches);
    listener();
    mediaQueryList.addEventListener?.("change", listener);

    return () => mediaQueryList.removeEventListener?.("change", listener);
  }, [query]);

  return matches;
}
