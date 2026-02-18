import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import studentRoutes from "./src/routes/studentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());

// db connection
connectDB();

// test route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello Backend Running" });
});

app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
