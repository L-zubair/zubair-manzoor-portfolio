import { z } from "zod";
import { optionalHttpUrl } from "./commonSchemas.js";

const entrySchema = z.object({
  title: z.string().trim().min(2).max(140),
  organization: z.string().trim().min(2).max(140),
  location: z.string().trim().max(120).optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().nullable().optional(),
  current: z.boolean().optional(),
  description: z.string().trim().min(20).max(2000),
  highlights: z.array(z.string().trim().min(2).max(300)).max(12).default([])
});

export const resumeSchema = z.object({
  headline: z.string().trim().min(5).max(160),
  summary: z.string().trim().min(40).max(2500),
  email: z.string().trim().email().max(160),
  location: z.string().trim().max(120).optional(),
  resumeUrl: optionalHttpUrl,
  skills: z.array(z.string().trim().min(1).max(50)).max(40).default([]),
  experience: z.array(entrySchema).max(30).default([]),
  education: z.array(entrySchema).max(20).default([]),
  active: z.boolean().optional()
});

export const updateResumeSchema = resumeSchema.partial().refine(
  (value) => Object.keys(value).length > 0,
  "At least one field is required."
);
