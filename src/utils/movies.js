import { SHORT_MOVIE_LENGTH } from './constants';

export default function filterMovies(movies, filtered = false, query = '') {
  if (!movies) return [];
  const filteredMovies = movies.filter((m) => {
    const matchName =
      m.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      m.nameEN.toLowerCase().includes(query.toLowerCase());

    if (filtered) {
      return matchName && m.duration <= SHORT_MOVIE_LENGTH;
    }

    return matchName;
  });

  return { filteredMovies };
}
