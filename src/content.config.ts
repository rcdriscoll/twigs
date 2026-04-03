import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    image: z.string(),
    location: z.string(),
    length: z.string().optional(),
    diameter: z.string().optional(),
    scientific_name: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
