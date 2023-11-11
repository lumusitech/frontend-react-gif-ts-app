import { Gif, GifsFromAPI } from "../types";

const baseUrl = "https://api.giphy.com/v1/gifs/search";
const apiKey = "jdvZMbDstUoUU74RPdsakdWajFgXfFIh";

export const fetchGifs = async (category: string): Promise<Array<Gif>> => {
  const url = `${baseUrl}?api_key=${apiKey}&limit=4&q=${category}`;

  const resp: Response = await fetch(url);
  const { data }: GifsFromAPI = await resp.json();

  const gifs: Array<Gif> = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
