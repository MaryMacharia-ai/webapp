import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js"; // ✅ already imported

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // ✅ middleware stays here

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// ✅ Auth Routes
app.use("/api/auth", authRoutes);

// ✅ ✅ ✅ ADD THIS LINE (THIS WAS MISSING)
app.use("/api/protected", protectedRoutes);

// ✅ TEST ROUTE
app.get("/api/test", (req, res) => {
  console.log("✅ TEST ROUTE HIT");
  res.json({ message: "✅ Backend test route working" });
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
