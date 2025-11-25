import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//import custom modules
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

//--configuration--
//load environment variables
dotenv.config();

//connect to database
connectDB();

//initialize express app
const app =express();


//--middleware--
app.use(cors());
app.use(express.json());

//--API Routes--
app.use('/api/auth', authRoutes);

//--start server--
const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`Auth Service running on port ${PORT}`);
});
