import Comment from "./Comment";
import Post from "./Post";

export default interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
  Post: Post[];
  comments: Comment[];
}
