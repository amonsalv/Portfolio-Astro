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
    liveUrl: z.url().optional(),
    githubUrl: z.url().optional(),
    problem: z.string(),
    solution: z.object({
      intro: z.string().optional(),
      columns: z.array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        })
      ).min(1).max(2),
    }),
    techStack: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      })
    ),
    architecture: z.object({
      code: z.string(),
      description: z.string(),
    }).optional(),
    outcome: z.object({
      highlights: z.array(z.string()).optional(),
      steps: z.array(z.string()),
    }),
  }),
});

export const collections = {
  work: workCollection,
};
