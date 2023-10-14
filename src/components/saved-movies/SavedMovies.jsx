import MoviesCard from '@/components/movies-card/MoviesCard.jsx';

function SavedMovies({ moviesData, unsaveMovie }) {
  return (
    <>
      {moviesData?.map((m) => (
        <MoviesCard
          key={m.movieId}
          movieData={m}
          unsaveMovie={unsaveMovie}
          savedMovies={moviesData}
        />
      ))}
    </>
  );
}

export default SavedMovies;
