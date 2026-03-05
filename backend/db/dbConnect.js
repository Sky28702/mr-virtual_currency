import mongoose from "mongoose";

async function connectdb() {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);

    console.log("Database connection successfull ! ");
  } catch (error) {
    console.log(error);
  }
}
export default connectdb;
