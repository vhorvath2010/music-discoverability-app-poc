interface CreatorParams {
  name: string;
  location: string;
  description?: string;
}

export class Creator {
  name: string;
  location: string;
  description?: string;

  constructor({ name, location, description }: CreatorParams) {
    this.name = name;
    this.location = location;
    this.description = description;
  }
}
