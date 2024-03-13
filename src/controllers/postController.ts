// src/controllers/postController.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
    const { title, content, userId } = req.body;
    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                author: {
                    connect: { id: userId }
                }
            }
        });
        return res.status(201).json(post);
    } catch (error) {
        return res.status(500).json({ error: "Error creating post" });
    }
};

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ error: "Error retrieving posts" });
    }
};

