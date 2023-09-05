import mongoose from 'mongoose';

import User from '../models/user.js';
import { OK_STATUS } from '../utils/constants.js';

import BadRequestError from '../errors/bad-request.js';
import NotFoundError from '../errors/not-found.js';
import ConflictError from '../errors/confilct.js';

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
    if (err instanceof mongoose.Error.ValidationError) { return next(new BadRequestError('bad data')); }
    if (err.code === 11000) {
        return next(new ConflictError('user already exists'));
     }
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
    const user = await User.findById(userId).orFail(() => {
      throw new NotFoundError('user not found');
    });
    return res.status(OK_STATUS).json(user);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) { return next(new BadRequestError('bad data')); }
    return next(err);
  }
};
