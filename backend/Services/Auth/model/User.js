import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true

    },
    passwordHash:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin','staff'],
        default:'user'
    }

},{timestamps:true});// Automatically adds createdAt and updatedAt fields

const user = mongoose.model('User',userSchema);

export default user;