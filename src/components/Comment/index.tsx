import Comment from "@/models/Comment";
import Image from "next/image";
import styles from "./comment.module.css";
import { ModalReply } from "../ModalReply";

export const CommentComponent = ({ comment }: { comment: Comment }) => {
  return (
    <div className={styles.comment}>
      <Image
        src={comment.author.avatar}
        alt={comment.author.name}
        width={32}
        height={32}></Image>
      <strong>@{comment.author.username}</strong>
      <p>{comment.text}</p>
    </div>
  );
};
