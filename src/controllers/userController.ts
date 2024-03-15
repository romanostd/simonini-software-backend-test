import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || user.password !== password) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ userId: user.id }, "secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
