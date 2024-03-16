import { Request, Response } from "express";
import { PrismaPostRepository } from "../../infrastructure/database/PrismaPostRepository";
import { PostService } from "../../domain/services/PostService";

const postRepository = new PrismaPostRepository();
const postService = new PostService(postRepository);

export const createPost = async (req: any, res: Response) => {
  if (!req.user) {
    return res
      .status(403)
      .json({ error: "User must be logged in to create a post" });
  }

  const { title, content } = req.body;
  try {
    const newPost = await postService.createPost(title, content, req.user.id);
    res.status(201).json(newPost);
  } catch (error: any) {
    res
      .status(500)
      .json({
        error: error.message || "An error occurred while creating the post.",
      });
  }
};

export const getPosts = async (req: any, res: Response) => {
  try {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
  } catch (error: any) {
    res
      .status(500)
      .json({
        error: error.message || "An error occurred while retrieving posts.",
      });
  }
};
