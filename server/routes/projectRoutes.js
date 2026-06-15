import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  listProjects,
  updateProject
} from "../controllers/projectController.js";
import adminAuth from "../middleware/adminAuth.js";
import validate from "../middleware/validate.js";
import { listQuerySchema, mongoIdSchema } from "../validators/commonSchemas.js";
import { projectSchema, updateProjectSchema } from "../validators/projectSchemas.js";

const router = Router();

router.get("/", validate(listQuerySchema, "query"), listProjects);
router.get("/:id", validate(mongoIdSchema, "params"), getProject);
router.post("/", adminAuth, validate(projectSchema), createProject);
router.patch(
  "/:id",
  adminAuth,
  validate(mongoIdSchema, "params"),
  validate(updateProjectSchema),
  updateProject
);
router.delete("/:id", adminAuth, validate(mongoIdSchema, "params"), deleteProject);

export default router;
