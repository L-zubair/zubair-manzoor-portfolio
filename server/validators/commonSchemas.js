import { z } from "zod";

export const mongoIdSchema = z.object({
  id: z.string().regex(/^[a-f\d]{24}$/i, "Invalid resource ID.")
});

export const listQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  featured: z
    .enum(["true", "false"])
    .transform((value) => value === "true")
    .optional()
});

export const httpUrl = z
  .string()
  .trim()
  .url()
  .refine((value) => ["http:", "https:"].includes(new URL(value).protocol), {
    message: "Only HTTP and HTTPS URLs are allowed."
  });

export const optionalHttpUrl = z.union([httpUrl, z.literal("")]).optional();
