import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number(),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
};
