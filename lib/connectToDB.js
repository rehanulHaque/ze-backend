import mongoose from "mongoose";

const connectToDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to DB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: "main" });
        console.log("Connected to DB");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};

export default connectToDB;
