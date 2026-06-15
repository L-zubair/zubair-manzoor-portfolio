import { Router } from "express";
import {
  createAchievement,
  deleteAchievement,
  getAchievement,
  listAchievements,
  updateAchievement
} from "../controllers/achievementController.js";
import adminAuth from "../middleware/adminAuth.js";
import validate from "../middleware/validate.js";
import { listQuerySchema, mongoIdSchema } from "../validators/commonSchemas.js";
import {
  achievementSchema,
  updateAchievementSchema
} from "../validators/achievementSchemas.js";

const router = Router();

router.get("/", validate(listQuerySchema, "query"), listAchievements);
router.get("/:id", validate(mongoIdSchema, "params"), getAchievement);
router.post("/", adminAuth, validate(achievementSchema), createAchievement);
router.patch(
  "/:id",
  adminAuth,
  validate(mongoIdSchema, "params"),
  validate(updateAchievementSchema),
  updateAchievement
);
router.delete("/:id", adminAuth, validate(mongoIdSchema, "params"), deleteAchievement);

export default router;
