import { CreatorRepository } from "./business/creatorRepository.ts";
import { CreatorController } from "./creatorController.ts";
import postgres from "postgres";

export const creatorRepository = new CreatorRepository();
export const creatorController = new CreatorController(creatorRepository);
export const sql = postgres(Deno.env.get("DATABASE_URL")!);
