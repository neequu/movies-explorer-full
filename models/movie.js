import { Schema, model } from 'mongoose';
import isURL from 'validator/lib/isURL.js';

const { ObjectId } = Schema.Types;

const MovieSchema = new Schema({
  country: { type: String, required: true },
  director: { type: String, required: true },
  duration: { type: Number, required: true },
  year: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
      message: 'incorrect link',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
      message: 'incorrect link',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
      message: 'incorrect link',
    },
  },
  owner: {
    type: ObjectId,
    ref: 'user',
    required: true,
  },
  id: { type: Number, required: true },
  nameRU: { type: String, required: true },
  nameEN: { type: String, required: true },
});

export default model('movie', MovieSchema);
