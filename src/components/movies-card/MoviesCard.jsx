import { useLocation } from 'react-router-dom';
import { formatTime } from '@/utils/utils.js';
function MoviesCard({ movieData, saveMovie, unsaveMovie, savedMovies }) {
  const { pathname } = useLocation();
  const { movieId, nameRU, duration, image, trailerLink } = movieData;

  const newTime = formatTime(duration);

  const isLiked = savedMovies?.find((m) => m.movieId === movieId);

  function handleButtonClick() {
    isLiked ? unsaveMovie(movieId) : saveMovie(movieData);
  }

  return (
    <li className='movies-card' title={nameRU}>
      <a
        target='_blank'
        rel='noreferrer'
        className='movies-card__link'
        href={trailerLink}>
        <div className='movies-card__top'>
          <h2 className='movies-card__title'>{nameRU}</h2>
          <span className='movies-card__time'>{newTime}</span>
        </div>
        <img
          loading='lazy'
          src={image}
          alt={nameRU}
          className='movies-card__image'
        />
      </a>

      {pathname === '/movies' && (
        <button
          type='button'
          onClick={handleButtonClick}
          className={`movies-card__button ${
            isLiked ? 'movies-card__button_saved' : ''
          }`}>
          {!isLiked && <span>Сохранить</span>}
        </button>
      )}

      {pathname === '/saved-movies' && (
        <button
          type='button'
          onClick={() => unsaveMovie(movieId)}
          className='movies-card__button movies-card__button_remove'></button>
      )}
    </li>
  );
}

export default MoviesCard;
