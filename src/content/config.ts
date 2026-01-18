import { defineCollection, z } from "astro:content";

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(), // 简化：用字符串 "YYYY-MM-DD"
    summary: z.string(),
    tag: z.string().optional(),      // Draft / Published / Updated
    version: z.string().optional(),  // v1.0 / v1.1
    tickers: z.array(z.string()).optional(),
  }),
});

export const collections = { research };