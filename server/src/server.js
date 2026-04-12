import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import carsRouter from "./routes/cars.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "AutoExpo API is running."
  });
});

app.use("/api/cars", carsRouter);

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error(
        `Port ${PORT} is already in use. Stop the existing server or change PORT in server/.env.`
      );
      return;
    }

    console.error("Server failed to start.");
    console.error(error);
  });
});
