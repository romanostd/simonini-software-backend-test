import express from "express";
import { createPost, getPosts } from "../interfaces/controllers/postController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", getPosts);

export default router;
