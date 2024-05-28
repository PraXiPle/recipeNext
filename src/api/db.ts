import mongoose from "mongoose";

const connectToDB = async () => {
  if (mongoose.connections[0]?.readyState) {
    return true;
  }
  
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("mongoose connected");
  } catch (error) {
    console.log(error);
    throw "error";
  }
};
export default connectToDB;
