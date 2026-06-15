import Project from "../models/Project.js";
import {
  createResource,
  deleteResource,
  getResource,
  listResources,
  updateResource
} from "./crudFactory.js";

const publicOptions = {
  publicFilter: { status: "published" },
  sort: { featured: -1, order: 1, createdAt: -1 }
};

export const listProjects = listResources(Project, publicOptions);
export const getProject = getResource(Project, publicOptions);
export const createProject = createResource(Project);
export const updateProject = updateResource(Project);
export const deleteProject = deleteResource(Project);
