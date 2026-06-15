import Resume from "../models/Resume.js";
import {
  createResource,
  deleteResource,
  getResource,
  listResources,
  updateResource
} from "./crudFactory.js";

const publicOptions = {
  publicFilter: { active: true },
  sort: { updatedAt: -1 }
};

export const listResumes = listResources(Resume, publicOptions);
export const getResume = getResource(Resume, publicOptions);
export const createResume = createResource(Resume);
export const updateResume = updateResource(Resume);
export const deleteResume = deleteResource(Resume);
