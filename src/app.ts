import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { loginTemplate } from "./templates/login.ts";

const app = new Hono();

app.use("*", serveStatic({ root: "./public" }));
app.get("/", (c) => c.html(loginTemplate()));

Deno.serve(app.fetch);
