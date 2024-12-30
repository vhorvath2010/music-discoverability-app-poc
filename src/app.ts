import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { loginPage } from "./templates/pages/login.ts";
import { newCreatorPage } from "./templates/pages/newCreator.ts";
import { homePage } from "./templates/pages/home.ts";
import { creatorController } from "./dependencies.ts";

const app = new Hono();

app.use("*", serveStatic({ root: "./public" }));
app.get("/", (c) => c.redirect("/login"));

app.get("/login", (c) => c.html(loginPage()));
app.get("/login/creators", (c) => c.html(newCreatorPage()));

app.get("/creators", (c) => creatorController.getCreators(c));
app.post("/creators", (c) => creatorController.registerCreator(c));

app.get("/home", (c) => c.html(homePage()));

Deno.serve(app.fetch);
