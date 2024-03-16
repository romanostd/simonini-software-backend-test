import { Post } from "../entities/Post";

export interface IPostRepository {
  createPost(title: string, content: string, authorId: string): Promise<Post>;
  findAllPosts(): Promise<Post[]>;
}