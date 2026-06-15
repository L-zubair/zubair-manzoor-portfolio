import { z } from "zod";

export const createContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(160),
  subject: z.string().trim().min(3).max(180),
  message: z.string().trim().min(20).max(2000)
});

export const updateContactSchema = z.object({
  status: z.enum(["new", "read", "replied", "archived"])
});
