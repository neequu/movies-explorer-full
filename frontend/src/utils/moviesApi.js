import { MOVIES_API_URL } from './constants';
import { checkResponse } from './utils';

export async function fetchMovies() {
  try {
    const res = await fetch(MOVIES_API_URL);
    return checkResponse(res);
  } catch (e) {
    // console.log(e.message);
  }
}
