import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB";
import morgan from "morgan";

const app = express();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3500;

//  Allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://your-custom-domain.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));

// Import routes
import authRoutes from "./routes/user.routes";
app.use("/api/auth", authRoutes);

app.get("/", (_req, res) => {
  res.send("SaveFi Backend is running!");
});

// 🚀 Always start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

export default app;
