import { Hono } from "@hono/hono";

const app = new Hono();

app.get("", (c) => c.text("Hello Musical World!"));

Deno.serve(app.fetch);
