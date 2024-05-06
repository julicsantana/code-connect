"use server";

import Post from "@/models/Post";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";

export async function incrementThumbsUp(post: Post) {
  await new Promise((resolve) => setTimeout(resolve, 2500));
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
