"use client";

import { useRef } from "react";
import { Modal } from "../Modal";
import styles from "./modalcomment.module.css";
import { postReply } from "@/actions";
import { SubmitButton } from "../SubmitButton";
import { Textarea } from "../TextArea";
import Comment from "@/models/Comment";
import { CommentComponent } from "../Comment";

export const ModalReply = ({ comment }: { comment: Comment }) => {
  const modalRef: any = useRef(null);
  const postNewReply = postReply.bind(null, comment);
  return (
    <>
      <Modal ref={modalRef}>
        <CommentComponent comment={comment} />
        <form
          action={postNewReply}
          className={styles.form}
          onSubmit={() => modalRef.current.closeModal()}>
          <Textarea required rows={8} name="text" />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button
        className={styles.replySpan}
        onClick={() => modalRef.current.openModal()}>
        Responder
      </button>
    </>
  );
};
