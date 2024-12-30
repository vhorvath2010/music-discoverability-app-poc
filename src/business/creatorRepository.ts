import { Creator } from "./creator.ts";

export class CreatorRepository {
  private creators: Creator[] = [];

  register(creator: Creator) {
    this.creators.push(creator);
  }

  search(): Creator[] {
    return this.creators;
  }
}
