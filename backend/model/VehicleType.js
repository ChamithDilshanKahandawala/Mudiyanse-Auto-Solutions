import mongoose from 'mongoose';

const vehicleTypeSchema = new mongoose.Schema({
  mainType: {
    type: String,
    required: true
  },
  subTypes: [{
    type: String
  }]
});

const VehicleType = mongoose.model('VehicleType', vehicleTypeSchema);
export default VehicleType;
