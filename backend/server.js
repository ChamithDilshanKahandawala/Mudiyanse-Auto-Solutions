import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Vehicle from './model/Vehicle.js';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Replace with your MongoDB connection string
const mongoURI = 'mongodb+srv://dilshankmc91_db_user:Kmcd2344316@cluster0.vaqhggg.mongodb.net/MAS_Test01?retryWrites=true&w=majority';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
	res.send('Backend server is running');
});

app.post('/api/vehicles', async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    console.error('Vehicle add error:', err); // <-- Add this line
    res.status(400).json({ error: err.message });
  }
});




app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
