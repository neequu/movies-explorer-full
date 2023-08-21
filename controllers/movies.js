import mongoose from 'mongoose';
// schema
import Movie from '../models/movie.js';
import { OK_STATUS, CREATED_STATUS } from '../utils/constants.js';
// errors
import BadRequestError from '../errors/bad-request.js';
import NotFoundError from '../errors/not-found.js';
import ForbiddenError from '../errors/forbidden.js';

// get /movies
export const getMovies = async (req, res, next) => {
  const owner = req.user._id;
  try {
    const movies = await Movie.find({ owner });
    return res.status(OK_STATUS).json(movies);
  } catch (err) {
    return next(err);
  }
};

// delete /:movieId
export const deleteMovie = async (req, res, next) => {
  const { movieId } = req.params;
  const ownerId = req.user._id;
  try {
    const movie = await Movie.findById(movieId).orFail(() => {
      throw new NotFoundError('movie not found');
    });
    if (!movie.owner.equals(ownerId)) {
      throw new ForbiddenError('forbidden');
    }
    await Movie.deleteOne(movie);
    return res.status(OK_STATUS).json({ message: 'success' });
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      return next(new BadRequestError('bad data'));
    }
    return next(err);
  }
};
// post /movies
export const createMovie = async (req, res, next) => {
  const owner = req.user._id;
  try {
    const movie = await Movie.create({ owner, ...req.body });
    return res.status(CREATED_STATUS).json(movie);
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      return next(new BadRequestError(err.message));
    }
    return next(err);
  }
};
