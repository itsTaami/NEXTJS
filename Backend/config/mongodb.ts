import mongoose from "mongoose";

const connectDB = async (uri: string): Promise<void> => {
  try {
    const db = await mongoose.connect(uri);
    console.log(`MongoDB -тэй холбогдлоо ${db.connection.host}`);
  } catch (err) {
    console.log("MongoDB -тэй холбогдkh үед алдаа гарлаа: ", err);
  }
};

export default connectDB;
