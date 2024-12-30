import { CreatorRepository } from "./business/creatorRepository.ts";
import { CreatorController } from "./creatorController.ts";

export const creatorRepository = new CreatorRepository();
export const creatorController = new CreatorController(creatorRepository);
