import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "../../domain/repositories/IPostRepository";
import { Post } from "../../domain/entities/Post";

export class PrismaPostRepository implements IPostRepository {
  private prisma = new PrismaClient();

  async createPost(
    title: string,
    content: string,
    authorId: string
  ): Promise<Post> {
    const post = await this.prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: authorId },
        },
      },
    });
    return new Post(post.title, post.content, authorId, post.id);
  }

  async findAllPosts(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return posts.map(
      (post) => new Post(post.title, post.content, post.author.id, post.id)
    );
  }
}
