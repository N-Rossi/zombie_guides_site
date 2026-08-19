import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { GAME_IDS, GUIDE_TYPE_IDS, getMap } from './data/games';

// Every guide is a markdown file under src/content/guides/<game>/<map>/<slug>.md
// The frontmatter below is validated at build time — a typo'd game or map id
// fails the build with a clear error instead of silently vanishing.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z
    .object({
      title: z.string(),
      game: z.enum(GAME_IDS),
      map: z.string(),
      type: z.enum(GUIDE_TYPE_IDS),
      author: z.string().default('Anonymous'),
      updated: z.coerce.date(),
      summary: z.string().optional(),
      youtube: z.array(z.string().url()).default([]),
      tags: z.array(z.string()).default([]),
    })
    .superRefine((data, ctx) => {
      if (!getMap(data.game, data.map)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Unknown map "${data.map}" for game "${data.game}". Check src/data/games.ts for valid map ids.`,
        });
      }
    }),
});

export const collections = { guides };
