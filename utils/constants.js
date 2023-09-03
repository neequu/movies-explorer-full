import rateLimit from 'express-rate-limit';

// errors
export const OK_STATUS = 200;
export const CREATED_STATUS = 201;

export const BAD_REQUEST_STATUS = 400;
export const UNATHORIZED_STATUS = 401;
export const FORBIDDEN_STATUS = 403;
export const NOT_FOUND_STATUS = 404;
export const CONFLICT_STATUS = 409;

export const INTERNAL_SERVER_STATUS = 500;

// jwt
export const saltRounds = 10;
export const secretKey = 'secret';

// regex
export const objIdRegex = /^[0-9a-fA-F]{24}$/;
export const linkRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

// limiter
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
});

// cors
export const corsOption = {
  origin: ['http://localhost:3000', 'https://moovees.nomoredomainsicu.ru'],
};

// db
export const dbUrl = 'mongodb://127.0.0.1:27017/bitfilmsdb';
