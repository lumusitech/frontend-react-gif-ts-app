import { useState, useEffect } from "react";
import { fetchGifs } from "../helpers/fetchGifs";
import { Gif } from "../types";

export const useFetchGifs = (category: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifs, setGifs] = useState<Array<Gif>>([]);

  useEffect(() => {
    const fetching = async () => {
      const gifsFetched = await fetchGifs(category);
      setGifs(gifsFetched);
      setIsLoading(false);
    };

    fetching();
  }, [category]);

  return {
    isLoading,
    gifs,
  };
};
