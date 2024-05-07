import html from "remark-html";
import { remark } from "remark";
import { redirect } from "next/navigation";
import { CardPost } from "@/components/CardPost";
import { CodePost } from "@/components/CodePost";
import { CommentList } from "@/components/CommentList";
import db from "../../../../prisma/db";
import logger from "@/loggers";
import Post from "@/models/Post";
import styles from "./posts.module.css";

async function getPostBySlug(slug: string) {
  try {
    const post: any = await db.post.findFirst({
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
          where: {
            parentId: null,
          },
        },
      },
      where: {
        slug,
      },
    });

    if (!post) {
      throw new Error(`Post com o slug ${slug} não foi encontrado`);
    }

    logger.info("Post obtido com sucesso!");

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
  } catch (error: any) {
    logger.error("Falha ao obter o post com o slug: ", {
      slug,
      error,
    });
  }

  redirect("/not-found");
}

export default async function PagePost({
  params,
}: {
  params: { slug: string };
}) {
  const post: Post = await getPostBySlug(params.slug);
  return (
    <main style={{ maxWidth: "993px" }}>
      <CardPost post={post} />
      <CodePost markdown={post.markdown} />
      <div className={styles.comentarios}>
        <h2>Comentários</h2>
        <CommentList comments={post.comments} />
      </div>
    </main>
  );
}
