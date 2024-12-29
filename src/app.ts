import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { loginTemplate } from "./templates/login.ts";
import { newCreatorTemplate } from "./templates/newCreator.ts";
import { Creator } from "./creator.ts";
import { creatorsTemplate } from "./templates/creators.ts";

const app = new Hono();

const creators: Creator[] = [];

app.use("*", serveStatic({ root: "./public" }));
app.get("/", (c) => c.redirect("/login"));

app.get("/login", (c) => c.html(loginTemplate()));
app.get("/login/creators", (c) => c.html(newCreatorTemplate()));

app.post("/creators", async (c) => {
  const formData = await c.req.formData();
  const name = formData.get("name");
  const location = formData.get("location");
  const description = formData.get("description");
  if (!name || !location) {
    c.status(400);
    return c.text("Error: A name and location are required");
  }
  if (!(typeof name == "string") || !(typeof location == "string") || !(typeof description == "string")) {
    c.status(400);
    return c.text("Error: All input fields must be strings");
  }
  creators.push(new Creator({ name, location, description }));
  c.status(201);
  return c.redirect("/creators");
});
app.get("/creators", (c) => c.html(creatorsTemplate(creators)));

Deno.serve(app.fetch);
