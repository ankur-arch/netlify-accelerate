import { PrismaClient } from "../../generated/client/deno/edge.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { handle } from "https://deno.land/x/hono/adapter/netlify/mod.ts";
import type { Env } from "https://deno.land/x/hono/adapter/netlify/mod.ts";

const app = new Hono<Env>();

app.get("/hello", async (context) => {
  const prisma = new PrismaClient({
    datasourceUrl: Deno.env.get("DATABASE_URL"),
  });

  const result = await prisma.person.findMany({
    take: 10,
  });

  return context.json({
    ...result,
  });
});

export default handle(app);

export const config = { path: "/hello" };
