import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    img: z.string(),
    img_alt: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  work: workCollection,
};
