import dotenv from "dotenv";
import connectToDatabase from "./db/dbindex.js";
import { app} from "./app.js";

dotenv.config({
    path: ".env"
});

connectToDatabase()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });





/*
import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${Backend_DB}`);
        console.log("Connected to MongoDB");
      app.on("error", (error)=>{
        console.error("Error in Express server:", error);
      })
         app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
   } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();*/
