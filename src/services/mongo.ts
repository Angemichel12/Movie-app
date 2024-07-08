import mongoose from "mongoose";
import dotenv from "dotenv/config";

mongoose.connection.on("open", () => {
  console.info("Database connected");
});

mongoose.connection.on("close", () => {
  console.info("something went wrong");
});

const mongoConnect = async () => {
  const URI: string = String(process.env.DATABASE);
  await mongoose.connect(URI);
};
const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

export { mongoConnect, mongoDisconnect };
