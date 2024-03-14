import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (req: any, res: Response) => {
  if (!req.user) {
    return res.status(403).json({ error: "User must be logged in to create a post" });
  }

  const { title, content } = req.body;
  try {
    console.log('User ID from request:', req.user.id);
  const post = await prisma.post.create({
      data: {
        title,
        content,
        author: { 
          connect: { id: req.user!.id }, 
        },
      },
    });

    res.status(201).json(post);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "An error occurred while creating the post" });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });

    res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "An error occurred while retrieving posts" });
  }
};
