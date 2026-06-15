import { Router } from "express";
import {
  createResume,
  deleteResume,
  getResume,
  listResumes,
  updateResume
} from "../controllers/resumeController.js";
import adminAuth from "../middleware/adminAuth.js";
import validate from "../middleware/validate.js";
import { listQuerySchema, mongoIdSchema } from "../validators/commonSchemas.js";
import { resumeSchema, updateResumeSchema } from "../validators/resumeSchemas.js";

const router = Router();

router.get("/", validate(listQuerySchema, "query"), listResumes);
router.get("/:id", validate(mongoIdSchema, "params"), getResume);
router.post("/", adminAuth, validate(resumeSchema), createResume);
router.patch(
  "/:id",
  adminAuth,
  validate(mongoIdSchema, "params"),
  validate(updateResumeSchema),
  updateResume
);
router.delete("/:id", adminAuth, validate(mongoIdSchema, "params"), deleteResume);

export default router;
