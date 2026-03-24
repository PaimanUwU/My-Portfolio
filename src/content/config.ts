import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    status: z.string(), // e.g., "In Progress" or "Completed"
    stack: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(),
    github: z.string().url().optional(),
  }),
});

export const collections = { works };
