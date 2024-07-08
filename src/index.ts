import app from "./app";
import dotenv from "dotenv/config";
import { mongoConnect } from "./services/mongo";

const startServer = async () => {
  await mongoConnect();

  app.listen(8080, () => {
    console.log("server is listening ..... 8080");
  });
};

startServer();
