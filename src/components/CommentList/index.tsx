import Comment from "@/models/Comment";
import { CommentComponent } from "../Comment";
import styles from "./commentlist.module.css";
import { ModalReply } from "../ModalReply";
import { Replies } from "../Replies";

export const CommentList = ({ comments }: { comments: Comment[] }) => {
  return (
    <ul className={styles.list}>
      {comments.map((comment: Comment) => (
        <li className={styles.itemList} key={comment.id}>
          <CommentComponent comment={comment} />
          <ModalReply comment={comment} />
          <Replies comment={comment} />
          <div className={styles.divider} />
        </li>
      ))}
    </ul>
  );
};
