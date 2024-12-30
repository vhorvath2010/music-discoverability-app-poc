import { Creator } from "./creator.ts";

export class CreatorRepository {
  private creators: Creator[] = [
    {
      name: "The Strokes",
      location: "New York, NY, USA",
      description:
        "A New York-based band that pioneered the garage rock revival of the early 2000s with catchy riffs, raw vocals, and a cool, effortless style.",
    },
    {
      name: "LCD Soundsystem",
      location: "New York, NY, USA",
      description:
        "A dance-punk outfit known for blending electronic beats with sharp lyrics, nostalgic melodies, and James Murphy's distinctive vocal style.",
    },
    {
      name: "Arctic Monkeys",
      location: "Sheffield, UK",
      description:
        "A British rock band blending witty lyricism, energetic riffs, and evolving sounds from indie rock to lounge-inspired crooning.",
    },
  ];

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
