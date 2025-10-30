import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// --- Import Custom Modules ---
import User from '../model/User.js';

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check for missing fields
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password.' });
    }

    // 2. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    // 3. Hash the password
    const salt = await bcryptjs.genSalt(10);
    const passwordHash = await bcryptjs.hash(password, salt);

    // 4. Create the new user in the database
    const newUser = await User.create({
      name,
      email,
      passwordHash,
    });

    // 5. Generate a JWT token
    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // 6. Send a successful response
    res.status(201).json({
      message: 'User registered successfully!',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });

  } catch (error) {
    console.error('REGISTER ERROR:', error);
    res.status(500).json({ error: 'Server Error' });
  }
};

/**
 * @desc    Authenticate a user and get token
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials.' });
        }

        // 2. Compare the provided password with the stored hashed password
        const isMatch = await bcryptjs.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials.' });
        }
        
        // 3. Generate a JWT token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        // 4. Send a successful response
        res.status(200).json({
            message: 'Logged in successfully!',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        console.error('LOGIN ERROR:', error);
        res.status(500).json({ error: 'Server Error' });
    }
};

export default { register, login }; 