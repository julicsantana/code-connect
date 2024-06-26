import Image from "next/image";
import Post from "@/models/Post";
import { Avatar } from "../Avatar";
import styles from "./card-post.module.css";
import Link from "next/link";
import { incrementThumbsUp } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";

export const CardPost = ({ post }: { post: Post }) => {
  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <Image
            fill
            src={post.cover}
            alt={`Capa do Post - ${post.title}`}
            className={styles.capa}
          />
        </figure>
      </header>
      <section className={styles.section}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`} className={styles.cardLink}>
          Ver Detalhes
        </Link>
      </section>
      <footer className={styles.footer}>
        <div className={styles.items}>
          <div>
            <form action={submitThumbsUp}>
              <ThumbsUpButton />
              {post.likes}
            </form>
          </div>
          <div>
            <ModalComment post={post} />
            {post.comments.length}
          </div>
        </div>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
