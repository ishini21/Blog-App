import mongoose from "mongoose";
import 'dotenv/config'; 

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DB Connected");
}