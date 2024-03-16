import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import jwt from "jsonwebtoken";

export class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = new User("", name, email, password);
    return this.userRepository.create(user);
  }

  async authenticate(
    email: string,
    password: string
  ): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== password) {
      throw new Error("Invalid credentials");
    }

    const payload = { userId: user.id, email: user.email };
    const secret = process.env.JWT_SECRET || "your-secret-key";
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });

    return { user, token };
  }
}
