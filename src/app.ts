import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";

const app = new Hono();

app.use("*", serveStatic({ root: "./public" }));

Deno.serve(app.fetch);
