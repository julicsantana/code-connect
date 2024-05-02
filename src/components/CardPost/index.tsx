import Image from "next/image";
import Post from "@/models/Post";
import { Avatar } from "../Avatar";
import styles from "./card-post.module.css";
import Link from "next/link";

export const CardPost = ({ post }: { post: Post }) => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <Image
            src={post.cover}
            alt={`Capa do Post - ${post.title}`}
            width={438}
            height={133}
            className={styles.capa}
          />
        </figure>
      </header>
      <section className={styles.section}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href="#" className={styles.link}>
          Ver Detalhes
        </Link>
      </section>
      <footer>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
