import { Creator } from "./creator.ts";

export class CreatorRepository {
  private creators: Creator[] = [];

  register(creator: Creator) {
    this.creators.push(creator);
  }

  search(query?: string): Creator[] {
    if (!query) {
      return this.creators;
    }
    const lowerQuery = query.toLowerCase();
    return this.creators.filter(
      (creator) =>
        creator.name.toLowerCase().includes(lowerQuery) ||
        creator.description?.toLowerCase().includes(lowerQuery) ||
        creator.location.toLowerCase().includes(lowerQuery)
    );
  }
}
