import express from "express";
import {
  createUser,
  loginUser,
} from "../interfaces/controllers/userController";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

export default router;
