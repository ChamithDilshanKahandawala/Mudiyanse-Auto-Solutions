import mongoose  from "mongoose";

const vehicleSchema = new mongoose.Schema({
    mainType:{
        type:String,
        required :true,
        enum:['Indian Bike',"Japan Bikes","3-Wheel",'Car']
    },
    subType:{
        type:String,
        required:false,
        enum:[
            //Indian Bikes
            'Dio','CT100','FZ','Pleasure',
            //Japan Bikes
            'Hornet','WRX','D-Tracker','Jade'
        ]

    },
    vehicleNumber:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String
    },
    purchasePrice:{
        type:Number,
        required:true
    },

    upgrades:{
        partName:String,
        partCost:Number,
        partDetails:String
    },

    salePrice:{
        type:Number,
        
    },

    soldDate:{
        type:Date
    },
    isSold:{
        type:Boolean,
        default:false
    }

});

const Vehicle = mongoose.model('Vehicle',vehicleSchema);
export default Vehicle;