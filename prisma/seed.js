// @ts-check

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed() {
  await db.post.create({
    data: {
      title: "hello",
    },
  });
}

await seed();
