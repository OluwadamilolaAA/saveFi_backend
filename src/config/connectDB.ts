import mongoose from "mongoose";

let isConnected = false; 

const connectDB = async (): Promise<void> => {
  if (isConnected) {
    // If already connected, skip re-connecting
    console.log(" Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL as string);

    isConnected = db.connection.readyState === 1; 
    console.log(" MongoDB connected");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(" MongoDB connection failed:", error.message);
    } else {
      console.error(" MongoDB connection failed:", error);
    }
    throw error; 
  }
};

export default connectDB;
