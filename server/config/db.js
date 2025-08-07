import mongoose from "mongoose";

const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connectted successfully.!!")
    } catch (error) {
        console.log("DB error",error);
    }
}

export default connectDB;