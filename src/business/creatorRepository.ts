import { sql } from "../dependencies.ts";
import { Creator } from "./creator.ts";

export class CreatorRepository {
  async register(creator: Creator) {
    await sql`
      INSERT INTO creators ${sql(creator, "name", "description", "location")}
    `;
  }

  async search(query?: string): Promise<Creator[]> {
    if (!query) {
      return await sql`
        SELECT 
          name, description, location
        from
          creators
      `;
    }
    const lowerQuery = query.toLowerCase();
    return await sql`
      SELECT 
        name, description, location
      FROM 
        creators
      WHERE 
        LOWER(name) LIKE ${"%" + lowerQuery + "%"} OR
        LOWER(description) LIKE ${"%" + lowerQuery + "%"} OR
        LOWER(location) LIKE ${"%" + lowerQuery + "%"}
    `;
  }
}
