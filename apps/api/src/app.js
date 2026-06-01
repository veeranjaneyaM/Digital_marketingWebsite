import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { publicRoutes } from "./routes/public-routes.js";
import { adminRoutes } from "./routes/admin-routes.js";
import { authRoutes } from "./routes/auth-routes.js";
import { errorHandler } from "./middleware/error-handler.js";

dotenv.config();

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN?.split(",") || "*"
    })
  );
  app.use(express.json({ limit: "2mb" }));
  app.use(morgan("dev"));

  app.get("/health", (req, res) => {
    res.json({ success: true, status: "ok" });
  });

  app.use("/api", publicRoutes);
  app.use("/api/admin", authRoutes);
  app.use("/api/admin", adminRoutes);
  app.use(errorHandler);

  return app;
}
