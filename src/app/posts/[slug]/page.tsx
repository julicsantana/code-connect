import { remark } from "remark";
import html from "remark-html";
import logger from "@/loggers";
import Post from "@/models/Post";
import { CardPost } from "@/components/CardPost";
import { CodePost } from "@/components/CodePost";

async function getPostBySlug(slug: string) {
  try {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error("Falha na rede");
    }

    logger.info("Post obtido com sucesso!");

    const data = await response.json();
    if (data.length == 0) {
      return {};
    }

    const post = data[0];
    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    return post;
  } catch (error: any) {
    logger.error("Ops, alguma coisa ocorreu: " + error.message);
    return {};
  }
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
