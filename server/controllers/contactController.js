import Contact from "../models/Contact.js";
import {
  createResource,
  deleteResource,
  getResource,
  listResources,
  updateResource
} from "./crudFactory.js";

export const listContacts = listResources(Contact, { sort: { createdAt: -1 } });
export const getContact = getResource(Contact);
export const createContact = createResource(Contact, {
  select: (contact) => ({
    id: contact.id,
    createdAt: contact.createdAt
  })
});
export const updateContact = updateResource(Contact);
export const deleteContact = deleteResource(Contact);
