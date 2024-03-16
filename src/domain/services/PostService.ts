import { IPostRepository } from "../repositories/IPostRepository";

export class PostService {
  constructor(private postRepository: IPostRepository) {}

  async createPost(title: string, content: string, authorId: string) {
    return this.postRepository.createPost(title, content, authorId);
  }

  async getPosts() {
    return this.postRepository.findAllPosts();
  }
}