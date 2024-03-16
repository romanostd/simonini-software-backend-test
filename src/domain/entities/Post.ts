export class Post {
  id?: string;
  title: string;
  content: string;
  authorId: string;

  constructor(title: string, content: string, authorId: string, id?: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.authorId = authorId;
  }
}
