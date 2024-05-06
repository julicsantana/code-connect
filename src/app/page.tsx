import { CardPost } from "@/components/CardPost";
import logger from "@/loggers";
import Post from "@/models/Post";
import styles from "./page.module.css";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page: number) {
  try {
    const perPage = 6;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count();
    const totalPages = Math.ceil(totalItems / perPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts: any = await db.post.findMany({
      take: perPage,
      skip: skip,
      orderBy: { createdAt: "desc" },
      include: {
        author: true,
      },
    });

    return {
      data: posts,
      prev: prev,
      next: next,
    };
  } catch (error: any) {
    logger.error("Falha ao obter posts: " + error.message);
    return {
      data: [],
      prev: null,
      next: null,
    };
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const currentPage = parseInt(searchParams?.page || "1");
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
