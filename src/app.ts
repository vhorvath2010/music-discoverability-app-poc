import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { loginLayout } from "./templates/login.ts";
import { newCreatorLayout } from "./templates/newCreator.ts";
import { creatorController } from "./dependencies.ts";

const app = new Hono();

app.use("*", serveStatic({ root: "./public" }));
app.get("/", (c) => c.redirect("/login"));

app.get("/login", (c) => c.html(loginLayout()));
app.get("/login/creators", (c) => c.html(newCreatorLayout()));

app.get("/creators", (c) => creatorController.getCreators(c));
app.post("/creators", (c) => creatorController.registerCreator(c));

Deno.serve(app.fetch);
