import mongoose from "mongoose";

// Connects the application to MongoDB
const connectDB = async () => {
  try {
    // Uses connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    // Stops the server if database connection fails
    console.error("DB Connection Failed ❌", error.message);
    process.exit(1);
  }
};

export default connectDB;
