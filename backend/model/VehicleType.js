import mongoose from "mongoose";

const vehicleTypeSchema = new mongoose.Schema({
  mainType:{
    type:String,
    required:true
  },
  subTypes:[{
    type:String
  }]
});

const vehicleType = mongoose.model('VehicleType',vehicleTypeSchema);
export default vehicleType;