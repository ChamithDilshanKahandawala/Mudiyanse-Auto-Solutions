import express from 'express';

// --- Import Custom Modules ---
import { register, login } from '../controllers/authController.js';

// --- Initialize Express Router ---
const router = express.Router();

// --- Define API Routes ---

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', register);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate a user and get a token
 * @access  Public
 */
router.post('/login', login);

// --- Export Router ---
export default router;
