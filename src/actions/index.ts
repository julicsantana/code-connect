"use server";

import { revalidatePath } from "next/cache";
import db from "../../prisma/db";
import Post from "@/models/Post";
import Comment from "@/models/Comment";

export async function incrementThumbsUp(post: Post) {
  await db.post.update({
    where: {
      id: post.id,
    },
    data: {
      likes: {
        increment: 1,
      },
    },
  });

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function postComment(post: Post, formData: FormData) {
  const author: any = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  await db.comment.create({
    data: {
      text: formData.get("text")?.toString() || "",
      authorId: author.id,
      postId: post.id,
    },
  });

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

export async function postReply(parent: Comment, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const author: any = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  const post: any = await db.post.findFirst({
    where: {
      id: parent.postId,
    },
  });

  await db.comment.create({
    data: {
      text: formData.get("text")?.toString() || "",
      authorId: author.id,
      postId: post.id,
      parentId: parent.parentId ?? parent.id,
    },
  });

  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}
