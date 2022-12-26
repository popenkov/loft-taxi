import { useEffect, useState } from 'react';

export const useMediaQuery = (value) => {
  const query = `(max-width: ${value})`;
  const [mediaQuery, setMediaQuery] = useState(null);
  const [matches, setMatches] = useState(mediaQuery?.matches);

  useEffect(() => {
    const listener = () => setMatches(mediaQuery?.matches);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [mediaQuery, query]);

  useEffect(() => {
    const mediaObj = window.matchMedia(query);

    setMediaQuery(mediaObj);
    setMatches(mediaObj.matches);
  }, [query]);

  return matches;
};
