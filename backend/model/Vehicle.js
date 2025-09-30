import mongoose from 'mongoose';


const vehicleSchema = new mongoose.Schema({
    mainType: {
        type: String,
        required: true,
        enum: ['Indian Bike', 'Japan Bike', '3-Wheel', 'Car']
    },
        subType: {
            type: String,
            enum: [
                // Indian Bikes
                'Dio', 'CT100', 'FZ', 'Pleasure',
                // Japan Bikes
                'Hornet', 'WRX', 'D-Tracker', 'Jade'
                // Add more as needed
            ],
            required: false
        },
    number: { type: String, required: true }, // vehicle number
    photo: { type: String }, // URL or path to photo
    upgrades: [{
        part: String,
        cost: Number,
        details: String
    }],
    isSold: { type: Boolean, default: false },
    purchasePrice: { type: Number, required: true },
    salePrice: { type: Number },
    soldDate: { type: Date }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;

