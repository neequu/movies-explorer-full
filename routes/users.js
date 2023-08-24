import express from 'express';
import { getCurrentUser, updateProfile } from '../controllers/users.js';
import { validateUpdateCurrentUser } from '../middlewares/validation.js';

const router = express.Router();

router.get('/me', getCurrentUser);
router.patch('/me', validateUpdateCurrentUser, updateProfile);

export default router;
