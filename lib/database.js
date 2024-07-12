/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mongoose from "mongoose";



export const connectedToDB = async () => {

    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected to mongodb')
    }
    catch(error){
        console.log("error connecting to mongodb")
    }
};
