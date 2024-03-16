import { Request, Response } from "express";
import { UserService } from "../../domain/services/UserService";
import { PrismaUserRepository } from "../../infrastructure/database/PrismaUserRepository";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userRepository = new PrismaUserRepository();
  const userService = new UserService(userRepository);

  try {
    const user = await userService.createUser(name, email, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userRepository = new PrismaUserRepository();
  const userService = new UserService(userRepository);

  try {
    const { user, token } = await userService.authenticate(email, password);
    res.status(200).json({ user, token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
