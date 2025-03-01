import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import artistRoutes from './routes/artistRoutes';
import chordRoutes from './routes/chordRoutes';
import userRoutes from './routes/userRoutes';
import songRoutes from './routes/songRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/chords', chordRoutes);
app.use('/api/songs', songRoutes);

console.log("Starting server...");
console.log("PORT:", PORT);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
