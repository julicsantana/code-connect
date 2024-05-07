import Author from "./Author";
import Post from "./Post";

export default interface Comment {
  id: number;
  text: string;
  createdAt: any;
  updatedAt: any;
  authorId: number;
  postId: number;
  parentId: number;
  author: Author;
  parent: Comment;
  childrens: Comment[];
  post: Post;
}
