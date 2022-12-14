import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? console.log("Connection error")
        : console.log("MongoDB connected")
})

export default mongoose;
