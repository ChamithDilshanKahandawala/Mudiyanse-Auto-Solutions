import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// --- Import Custom Modules ---
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

// --- Configuration ---
// Load environment variables from the .env file
dotenv.config();

// --- Database Connection ---
// Establish the connection to MongoDB
connectDB();

// --- Initialize Express App ---
const app = express();

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) to allow requests from your frontend
app.use(cors());
// Enable the express.json middleware to parse incoming JSON request bodies
app.use(express.json());

// --- API Routes ---
// Mount the authentication routes at the '/api/auth' path
app.use('/api/auth', authRoutes);

// --- Server Startup ---
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Auth service started on port ${PORT} 🚀`));

