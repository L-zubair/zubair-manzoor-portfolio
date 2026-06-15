import { Router } from "express";
import rateLimit from "express-rate-limit";
import {
  createContact,
  deleteContact,
  getContact,
  listContacts,
  updateContact
} from "../controllers/contactController.js";
import adminAuth from "../middleware/adminAuth.js";
import validate from "../middleware/validate.js";
import { listQuerySchema, mongoIdSchema } from "../validators/commonSchemas.js";
import { createContactSchema, updateContactSchema } from "../validators/contactSchemas.js";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact requests. Please try again later."
  }
});

router.get("/", adminAuth, validate(listQuerySchema, "query"), listContacts);
router.get("/:id", adminAuth, validate(mongoIdSchema, "params"), getContact);
router.post("/", contactLimiter, validate(createContactSchema), createContact);
router.patch(
  "/:id",
  adminAuth,
  validate(mongoIdSchema, "params"),
  validate(updateContactSchema),
  updateContact
);
router.delete("/:id", adminAuth, validate(mongoIdSchema, "params"), deleteContact);

export default router;
