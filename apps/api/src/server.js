import dotenv from "dotenv";
import { connectDatabase } from "./config/db.js";
import { createApp } from "./app.js";

dotenv.config();

const port = Number(process.env.PORT || 8080);
const app = createApp();

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`ELIVATX API running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
