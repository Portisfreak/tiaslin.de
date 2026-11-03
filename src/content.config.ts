import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    nav: z.string().optional(),
    eyebrow: z.string().optional(),
    subtitle: z.string().optional(),
    order: z.number(),
    heading: z.enum(['h1', 'h2']).default('h2'),
  }),
});

export const collections = { pages };
