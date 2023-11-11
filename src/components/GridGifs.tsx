import { useFetchGifs } from '../hooks/useFetchGifs';
import { Gif } from '../types';

export const GridGifs = ({ category }: { category: string }) => {

  const { isLoading, gifs } = useFetchGifs(category)

  return (
    <section>
      <h2>{category}</h2>
      <article>
        {isLoading && <h2>Loading...</h2>}

        {gifs.map(({ id, title, url }: Gif) => (
          <div className="card" key={id}>
            <img src={url} alt={id} />
            <h3>{title.substring(0, 25)}...</h3>
          </div>
        ))}
      </article>
    </section>
  )
}
