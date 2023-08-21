import express from 'express';

import usersRoutes from './users.js';
import moviesRoutes from './movies.js';
import page404 from '../controllers/404.js';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/movies', moviesRoutes);

router.use('*', page404);

export default router;
