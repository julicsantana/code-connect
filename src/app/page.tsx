import { CardPost } from "@/components/CardPost";
import logger from "@/loggers";
import Post from "@/models/Post";
import styles from "./page.module.css";
import Link from "next/link";

async function getAllPosts(page: number) {
  try {
    const response = await fetch(
      `http://localhost:3042/posts?_page=${page}&_per_page=6`
    );
    if (!response.ok) throw new Error("Falha na rede");

    logger.info("Posts obtidos com sucesso!");
    return response.json();
  } catch (error: any) {
    logger.error("Ops, alguma coisa ocorreu: " + error.message);
    return [];
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main>
      <div className={styles.posts}>
        {posts?.map((post: Post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <div className={styles.actions}>
        {prev && (
          <Link className={styles.link} href={`/?page=${prev}`}>
            Anterior
          </Link>
        )}
        {next && (
          <Link className={styles.link} href={`/?page=${next}`}>
            Próxima
          </Link>
        )}
      </div>
    </main>
  );
}
