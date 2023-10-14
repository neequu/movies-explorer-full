import { BASE_URL } from './constants';

export function checkResponse(res) {
  if (res.ok) return res.json();

  return Promise.reject(`Ошибка: ${res.status}`);
}

export function saveToken(jwt) {
  localStorage.setItem('jwt', jwt);
}

export function getToken() {
  return localStorage.getItem('jwt');
}

export function getMovieFields(movie) {
  const fields = {
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    country: movie.country,
    year: movie.year,
    director: movie.director,
    duration: movie.duration,
    description: movie.description,
    trailerLink: movie.trailerLink,
    image: BASE_URL + movie.image?.url,
    thumbnail: BASE_URL + movie.image?.formats?.thumbnail?.url,
  };
  return fields;
}

export function getLocalStorageValues() {
  const defaultInputValue = localStorage.getItem('queryStored') || '';
  const defaultFilterValue =
    JSON.parse(localStorage.getItem('filteredStored')) || false;

  return { defaultFilterValue, defaultInputValue };
}

export function formatTime(duration) {
  const hours = Math.floor(duration / 60);
  const mins = duration - hours * 60;

  const formattedMins = mins > 9 && mins > 0 ? mins : `0${mins}`;
  return `${hours}ч ${formattedMins}м`;
}
