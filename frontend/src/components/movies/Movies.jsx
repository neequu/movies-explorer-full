import MoviesCard from '@/components/movies-card/MoviesCard.jsx';
import { getMovieFields } from '@/utils/utils.js';

function Movies({
  saveMovie,
  unsaveMovie,
  savedMovies,
  moviesData,
}) {
  return (
    <>
      {moviesData?.map((m) => (
        <MoviesCard
          key={m.id}
          movieData={getMovieFields(m)}
          saveMovie={saveMovie}
          unsaveMovie={unsaveMovie}
          savedMovies={savedMovies}
        />
      ))}
    </>
  );
}

export default Movies;
