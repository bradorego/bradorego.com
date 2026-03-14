import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**\/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().nullable(),
    date: z.string().or(z.date()).optional().nullable(),
    publishdate: z.string().or(z.date()).optional().nullable(),
    image: z.string().optional().nullable(),
    draft: z.boolean().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    categories: z.array(z.string()).optional().nullable(),
    aliases: z.array(z.string()).optional().nullable(),
    lessonsLearned: z.array(z.string()).optional().nullable(),
    photoCredit: z.string().optional().nullable()
  }),
});

const casestudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/casestudies" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional().nullable(),
    client: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    year: z.string().optional().nullable()
  }),
});

export const collections = { blog, casestudies };
