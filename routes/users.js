import express from 'express';
import { getCurrentUser, updateProfile } from '../controllers/users.js';
import { validateGetCurrentUser, validateUpdateCurrentUser } from '../middlewares/validation.js';

const router = express.Router();

router.get('/me', validateGetCurrentUser, getCurrentUser);
router.patch('/me', validateUpdateCurrentUser, updateProfile);

export default router;
