import { BASE_API_URL } from './constants';
import { checkResponse } from './utils';

async function request(endpoint, options) {
  const res = await fetch(`${BASE_API_URL}${endpoint}`, options);
  return checkResponse(res);
}

// auth
export async function register(data) {
  return await request(`/signup`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export async function login(data) {
  return await request(`/signin`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export async function validate(jwt) {
  const url = `/users/me`;
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };
  return await request(url, headers);
}

// user
export async function getCurrentUserInfo(jwt) {
  return await request(`/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export async function editCurrentUserInfo(jwt, data) {
  return await request(`/users/me`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
}

// movies
export async function getSavedMovies(jwt) {
  return await request(`/movies`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export async function saveMovie(jwt, data) {
  return await request(`/movies`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
}
export async function deleteSavedMovieById(jwt, movieId) {
  return await request(`/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
}
