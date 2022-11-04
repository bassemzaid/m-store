import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3b5vnqz1",
  dataset: "production",
  apiVersion: "2022-10-24",
  useCdn: true,
  token:
    "skPkV9YoAcCiU8oQSeDtNfq3HYAvkYOkoIXhuErFy0HFtnu7zJhGoNcYrJndSqVqqJ64ZN4CoNbtRRnD3O1rGNTRePTtgVXCOmQrgQIo7Zufi0QseJE8XVtWY4an5CkpVJnDnKQFqf2hwdjpJxLUHNVLn6H6qest6g2nOBYmkqx76vlQJFhf",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
