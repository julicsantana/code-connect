import Author from "./Author";
import Comment from "./Comment";

export default interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: any;
  updatedAt: any;
  author: Author;
  likes: number;
  comments: Comment[];
}
