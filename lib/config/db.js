import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://devdut01:devdut1234@cluster0.sm438.mongodb.net/blog-app');
    console.log("DataBase Connected!");
}
