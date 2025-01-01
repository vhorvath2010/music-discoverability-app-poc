import { CreatorRepository } from "./business/creatorRepository.ts";
import { CreatorController } from "./creatorController.ts";
import pg from "pg";

export const creatorRepository = new CreatorRepository();
export const creatorController = new CreatorController(creatorRepository);

const { Client } = pg;
const client = new Client({
  connectionString: Deno.env.get("DATABASE_URI"),
});
await client.connect();
export { client };
