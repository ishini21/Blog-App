import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://ishinishavindhya:1vsgkmI6ThlG6GTq@cluster0.nr2kkmu.mongodb.net/blog-app')
    console.log("DB Connected");
}