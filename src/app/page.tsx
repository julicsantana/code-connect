import { CardPost } from "@/components/CardPost";
import logger from "@/loggers";
import Post from "@/models/Post";
import styles from "./page.module.css";

async function getAllPosts() {
  try {
    const response = await fetch("http://localhost:3042/posts");
    if (!response.ok) throw new Error("Falha na rede");

    logger.info("Posts obtidos com sucesso!");
    return response.json();
  } catch (error: any) {
    logger.error("Ops, alguma coisa ocorreu: " + error.message);
    return [];
  }
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className={styles.posts}>
      {posts?.map((post: Post) => (
        <CardPost post={post} />
      ))}
    </main>
  );
}
