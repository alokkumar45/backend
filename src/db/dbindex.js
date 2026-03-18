import mongoose from "mongoose";

import { Backend_DB } from "../constants.js";

const connectToDatabase = async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${Backend_DB}`);
        console.log("Connected to MongoDB !!");
    }
    catch(error){
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectToDatabase