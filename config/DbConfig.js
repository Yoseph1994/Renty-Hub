import mongoose from "mongoose";

let connected = false;

async function connectDB() {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("Mongo already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connected succesfully");
    connected = true;
  } catch (error) {
    console.log("Unable to connect", error);
  }
}

export default connectDB;
