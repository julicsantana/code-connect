import { CardPost } from "@/components/CardPost";
import logger from "@/loggers";
import Post from "@/models/Post";
import styles from "./page.module.css";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page: number, searchTerm: string) {
  try {
    const where: any = {};

    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const perPage = 4;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts: any = await db.post.findMany({
      take: perPage,
      skip: skip,
      where,
      orderBy: { id: "desc" },
      include: {
        author: true,
        comments: {
          where: {
            parentId: null,
          },
        },
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
  searchParams: { page: string; q: string };
}) {
  const currentPage = parseInt(searchParams?.page || "1");
  const searchTerm: string = searchParams?.q;

  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(currentPage, searchTerm);

  return (
    <main>
      <div className={styles.posts}>
        {posts?.map((post: Post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <div className={styles.actions}>
        {prev && (
          <Link
            className={styles.link}
            href={{ pathname: "/", query: { page: prev, q: searchTerm } }}>
            Anterior
          </Link>
        )}
        {next && (
          <Link
            className={styles.link}
            href={{ pathname: "/", query: { page: next, q: searchTerm } }}>
            Próxima
          </Link>
        )}
      </div>
    </main>
  );
}
