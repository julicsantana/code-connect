"use client";

import { useEffect, useState } from "react";
import styles from "./replies.module.css";
import Comment from "@/models/Comment";
import { CommentComponent } from "../Comment";
import { ModalReply } from "../ModalReply";

export const Replies = ({ comment }: { comment: Comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState<Comment[]>([]);

  async function fetchData() {
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
  }

  useEffect(() => {
    if (showReplies) {
      fetchData();
    }
  }, [showReplies]);

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)}>
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
        {showReplies && (
          <ul>
            {replies.map((reply) => (
              <li key={reply.id}>
                <CommentComponent comment={reply} />
                <ModalReply comment={reply} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
