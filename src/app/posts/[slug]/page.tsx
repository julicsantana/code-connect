import { remark } from "remark";
import html from "remark-html";
import logger from "@/loggers";
import Post from "@/models/Post";
import { CardPost } from "@/components/CardPost";
import { CodePost } from "@/components/CodePost";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug: string) {
  try {
    const post: any = await db.post.findFirst({
      include: {
        author: true,
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
    </main>
  );
}
