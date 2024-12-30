import { Context } from "@hono/hono";
import { CreatorRepository } from "./business/creatorRepository.ts";
import { creatorsListTemplate } from "./templates/creatorsList.ts";
import { Creator } from "./business/creator.ts";

export class CreatorController {
  private creatorRepository: CreatorRepository;

  constructor(creatorRepository: CreatorRepository) {
    this.creatorRepository = creatorRepository;
  }

  getCreators(c: Context) {
    return c.html(creatorsListTemplate(this.creatorRepository.search()));
  }

  async registerCreator(c: Context) {
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
    this.creatorRepository.register(new Creator({ name, location, description }));
    c.status(201);
    return c.redirect("/home");
  }
}
