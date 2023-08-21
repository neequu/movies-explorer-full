import { celebrate, Joi } from 'celebrate';
import { objIdRegex, linkRegex } from '../utils/constants.js';
// auth
export const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

export const validateRegister = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  }),
});

// user
export const validateGetCurrentUser = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().regex(objIdRegex),
  }),
});

export const validateUpdateCurrentUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

// movies
export const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().min(1).max(100),
    director: Joi.string().required().min(1).max(100),
    duration: Joi.number().required(),
    year: Joi.string().required().max(4),
    description: Joi.string().required().min(1).max(1000),
    image: Joi.string().required().regex(linkRegex),
    trailer: Joi.string().required().regex(linkRegex),
    thumbnail: Joi.string().required().regex(linkRegex),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().min(1).max(100),
    nameEN: Joi.string().required().min(1).max(100),
  }),
});

export const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().regex(objIdRegex),
  }),
});
