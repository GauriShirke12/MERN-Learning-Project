import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://gaurishirke2005:gaurishirke123@cluster0.hkgqo.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
