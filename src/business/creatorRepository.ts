import { client } from "../dependencies.ts";
import { Creator } from "./creator.ts";

export class CreatorRepository {
  async register(creator: Creator) {
    const query = `--sql
      INSERT INTO creators (name, description, location)
      VALUES ($1, $2, $3)
    `;
    const values = [creator.name, creator.description, creator.location];
    await client.query(query, values);
  }

  async search(query?: string): Promise<Creator[]> {
    if (!query) {
      const result = await client.query(`--sql
        SELECT 
          name, description, location
        FROM
          creators
      `);
      return result.rows as Creator[];
    }
    const lowerQuery = `%${query.toLowerCase()}%`;
    const result = await client.query(
      `--sql
      SELECT 
        name, description, location
      FROM 
        creators
      WHERE 
        LOWER(name) LIKE $1 OR
        LOWER(description) LIKE $1 OR
        LOWER(location) LIKE $1
    `,
      [lowerQuery],
    );
    return result.rows as Creator[];
  }
}
