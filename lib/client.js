import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity Client
export const client = sanityClient({
  projectId: "7fvfibo0", // change this to yours
  dataset: "production",
  apiVersion: "2022-06-13",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
