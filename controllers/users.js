import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import {
  OK_STATUS, CREATED_STATUS, saltRounds, secretKey,
} from '../utils/constants.js';
import BadRequestError from '../errors/bad-request.js';
import NotFoundError from '../errors/not-found.js';
import ConflictError from '../errors/confilct.js';

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

export const createUser = async (req, res, next) => {
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

const updateUser = async (req, res, next, data) => {
  const owner = req.user._id;
  try {
    const user = await User.findByIdAndUpdate(owner, data, {
      new: true,
      runValidators: true,
    }).orFail(() => {
      throw new NotFoundError('user not found');
    });

    return res.status(OK_STATUS).json(user);
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) return next(new BadRequestError('bad data'));
    return next(err);
  }
};

export const updateProfile = (req, res, next) => {
  const { name, email } = req.body;
  return updateUser(req, res, next, { name, email });
};

export const getCurrentUser = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId).orFail(() => { throw new NotFoundError('user not found'); });

    return res.status(OK_STATUS).json(user);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) return next(new BadRequestError('bad data'));
    return next(err);
  }
};
