import Achievement from "../models/Achievement.js";
import {
  createResource,
  deleteResource,
  getResource,
  listResources,
  updateResource
} from "./crudFactory.js";

export const listAchievements = listResources(Achievement, {
  sort: { featured: -1, date: -1, order: 1 }
});
export const getAchievement = getResource(Achievement);
export const createAchievement = createResource(Achievement);
export const updateAchievement = updateResource(Achievement);
export const deleteAchievement = deleteResource(Achievement);
