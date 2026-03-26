// ✅ dotenv FIRST — before any other import
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectToDatabase from "./db/dbindex.js";
import { app } from "./app.js";

connectToDatabase()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting the server:", error);
  });