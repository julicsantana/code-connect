"use client";

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import styles from "./modalcomment.module.css";
import { postComment } from "@/actions";
import Post from "@/models/Post";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "../SubmitButton";
import { Textarea } from "../TextArea";
import { Subheading } from "../Subheading";

export const ModalComment = ({ post }: { post: Post }) => {
  const modalRef: any = useRef(null);
  const postNewComment = postComment.bind(null, post);
  return (
    <>
      <Modal ref={modalRef}>
        <Subheading>Deixe seu comentário sobre o post:</Subheading>
        <form
          action={postNewComment}
          className={styles.form}
          onSubmit={() => modalRef.current.closeModal()}>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
