import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/user.js';
import {
  OK_STATUS, CREATED_STATUS, saltRounds, secretKey,
} from '../utils/constants.js';
import ConflictError from '../errors/confilct.js';
import BadRequestError from '../errors/bad-request.js';

const { JWT_SECRET, NODE_ENV } = process.env;

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : secretKey, { expiresIn: '7d' });
    return res.status(OK_STATUS).json({ token });
  } catch (err) {
    return next(err);
  }
};

export const register = async (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    await User.create({ name, email, password: hash });

    return res.status(CREATED_STATUS).json({ name, email });
  } catch (err) {
    if (err.code === 11000) return next(new ConflictError('already exists'));
    if (err instanceof mongoose.Error.ValidationError) return next(new BadRequestError('bad data'));

    return next(err);
  }
};
