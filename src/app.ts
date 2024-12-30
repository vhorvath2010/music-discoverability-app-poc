import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import { Creator } from "./creator.ts";
import { loginPage } from "./templates/pages/login.ts";
import { newCreatorPage } from "./templates/pages/newCreator.ts";
import { creatorsListTemplate } from "./templates/creatorsList.ts";
import { homePage } from "./templates/pages/home.ts";

const app = new Hono();

const creators: Creator[] = [];

app.use("*", serveStatic({ root: "./public" }));
app.get("/", (c) => c.redirect("/login"));

app.get("/login", (c) => c.html(loginPage()));
app.get("/login/creators", (c) => c.html(newCreatorPage()));

app.get("/creators", (c) => c.html(creatorsListTemplate(creators)));
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
  return c.redirect("/home");
});

app.get("/home", (c) => c.html(homePage()));

Deno.serve(app.fetch);
