import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react"
import { PrismaClient } from "@prisma/client";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const db = new PrismaClient();

export async function loader() {
  return await db.post.findMany()
}


export default function Index() {
  const posts = useLoaderData<typeof loader>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Posts</h1>
        <ul>
          {
            posts.map(post => (
              <li key={post.id}>
                {post.title} {post.createdAt}
              </li>
            ))
          }
        </ul>
    </div>
  );
}
