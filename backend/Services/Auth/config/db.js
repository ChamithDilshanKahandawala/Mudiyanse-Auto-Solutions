import mongoose from 'mongoose';

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully🔌');

  }catch(error){
    console.log(`Auth service DB error: ${error.message}`)
    process.exit(1);
  };
}

export default connectDB; 