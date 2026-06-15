import { z } from "zod";
import { optionalHttpUrl } from "./commonSchemas.js";

export const projectSchema = z.object({
  title: z.string().trim().min(2).max(120),
  slug: z
    .string()
    .trim()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase URL-safe slug."),
  summary: z.string().trim().min(20).max(400),
  description: z.string().trim().min(40).max(4000),
  technologies: z.array(z.string().trim().min(1).max(40)).max(20).default([]),
  imageUrl: optionalHttpUrl,
  liveUrl: optionalHttpUrl,
  sourceUrl: optionalHttpUrl,
  featured: z.boolean().optional(),
  order: z.number().int().min(0).optional(),
  status: z.enum(["draft", "published"]).optional()
});

export const updateProjectSchema = projectSchema.partial().refine(
  (value) => Object.keys(value).length > 0,
  "At least one field is required."
);
