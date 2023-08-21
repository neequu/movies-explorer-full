import { Schema, model } from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcrypt';
import UnathorizedError from '../errors/unathorized.js';

const UserSchema = new Schema({
  name: {
    type: String,
    default: 'Без Имени',
    minlength: [2, 'length of this field should be 2-30 symbols'],
    maxlength: [30, 'length of this field should be 2-30 symbols'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (email) => isEmail(email),
      message: 'incorrect email',
    },
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
});

// eslint-disable-next-line func-names
UserSchema.statics.findUserByCredentials = async function (email, password) {
  try {
    const user = await this.findOne({ email }).select('+password');

    if (!user) return Promise.reject(new UnathorizedError('bad email or password'));

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) return Promise.reject(new UnathorizedError('bad email or password'));

    return user;
  } catch (err) {
    return err;
  }
};

export default model('user', UserSchema);
