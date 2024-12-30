import { Context } from "@hono/hono";
import { CreatorRepository } from "./business/creatorRepository.ts";
import { creatorsTemplate } from "./templates/creators.ts";
import { Creator } from "./business/creator.ts";

export class CreatorController {
  private creatorRepository: CreatorRepository;

  constructor(creatorRepository: CreatorRepository) {
    this.creatorRepository = creatorRepository;
  }

  async getCreators(c: Context) {
    const query = c.req.query("query");
    return c.html(
      creatorsTemplate({
        creators: await this.creatorRepository.search(query),
        query,
      }),
    );
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
    if (
      !(typeof name == "string") || !(typeof location == "string") ||
      !(typeof description == "string")
    ) {
      c.status(400);
      return c.text("Error: All input fields must be strings");
    }
    this.creatorRepository.register(
      new Creator({ name, location, description }),
    );
    c.status(201);
    return c.redirect("/creators");
  }
}
