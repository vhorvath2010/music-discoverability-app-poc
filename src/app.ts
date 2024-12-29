import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { loginTemplate } from "./templates/login.ts";
import { newCreatorTemplate } from "./templates/newCreator.ts";

const app = new Hono();

app.use("*", serveStatic({ root: "./public" }));
app.get("/", (c) => c.html(loginTemplate()));
app.get("/creators", (c) => c.html(newCreatorTemplate()));

Deno.serve(app.fetch);
