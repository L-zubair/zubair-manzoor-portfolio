import { z } from "zod";
import { optionalHttpUrl } from "./commonSchemas.js";

export const achievementSchema = z.object({
  title: z.string().trim().min(2).max(140),
  description: z.string().trim().min(20).max(1000),
  issuer: z.string().trim().max(120).optional(),
  date: z.coerce.date(),
  credentialUrl: optionalHttpUrl,
  imageUrl: optionalHttpUrl,
  featured: z.boolean().optional(),
  order: z.number().int().min(0).optional()
});

export const updateAchievementSchema = achievementSchema.partial().refine(
  (value) => Object.keys(value).length > 0,
  "At least one field is required."
);
