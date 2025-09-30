import express from 'express';
import VehicleType from '../model/VehicleType.js';

const router = express.Router();

// Get all vehicle types
router.get('/', async (req, res) => {
  try {
    const types = await VehicleType.find();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new vehicle type
router.post('/', async (req, res) => {
  try {
    const { mainType, subTypes } = req.body;
    const newType = new VehicleType({ mainType, subTypes });
    await newType.save();
    res.status(201).json(newType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a vehicle type
router.put('/:id', async (req, res) => {
  try {
    const { mainType, subTypes } = req.body;
    const updatedType = await VehicleType.findByIdAndUpdate(
      req.params.id,
      { mainType, subTypes },
      { new: true }
    );
    res.json(updatedType);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a vehicle type
router.delete('/:id', async (req, res) => {
  try {
    await VehicleType.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vehicle type deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
