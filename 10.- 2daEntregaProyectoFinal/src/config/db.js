import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? console.log("Connectio error to MongoDB")
        : console.log("MongoDB connected...")
})

export default mongoose;
