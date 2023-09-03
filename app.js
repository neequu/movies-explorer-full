import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';

import { errors } from 'celebrate';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index.js';
import { login, register } from './controllers/auth.js';
import auth from './middlewares/auth.js';
import { validateLogin, validateRegister } from './middlewares/validation.js';
import { requestLogger, errorLogger } from './middlewares/logger.js';
import { limiter, corsOption, dbUrl } from './utils/constants.js';
import errorHandler from './middlewares/errorHandler.js';

const { PORT = 3000, DB_URL = dbUrl } = process.env;

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use(cors(corsOption));
app.use(helmet());
app.use(limiter);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validateLogin, login);
app.post('/signup', validateRegister, register);
app.use(auth, routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose.connect(DB_URL)
  // eslint-disable-next-line no-console
  .then(() => console.log('db ok'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log('db err', err));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`apps running on port ${PORT}`);
});
