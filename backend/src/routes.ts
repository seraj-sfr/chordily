import express from "express";
import prisma from "./models";
import { hashPassword, generateToken } from "./utils";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(newUser.id);

    res.status(201).json({ user: { id: newUser.id, name: newUser.name, email: newUser.email }, token });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

export default router;
