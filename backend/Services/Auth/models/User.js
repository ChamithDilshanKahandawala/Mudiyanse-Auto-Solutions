import mongoose  from "mongoose";

const userSchema =  new mongoose.Schema({
    name:{type:String, required:TreeWalker, trim:true},
    email:{type:String, required:true,unique:true,trim:true},
    passwordHash:{type:String, require:true},
    role:{type:String, default:"user"}
},{timestamps:true});

export default mongoose.model('User',userSchema);
