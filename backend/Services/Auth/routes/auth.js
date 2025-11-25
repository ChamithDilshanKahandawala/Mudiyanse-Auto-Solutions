import express from 'express';

// import custom modules 
import {register, login} from '../controllers/authController.js';

//initialize the express router
const router = express.Router();

//Define API routes

/**
 * @route POST/api/auth/register
 * @desc Register  a new user
 * @access Public
 */
router.post('/register', register);

/**
 * @route POST/api/auth/login
 * @desc Authenticate a user and get token
 * @access Public
 */
router.post('/login',login);

//export router
export default router;