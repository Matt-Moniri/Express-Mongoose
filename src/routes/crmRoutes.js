import {
  addNewContact,
  deleteContact,
  editContact,
  getAllContacts,
  getOneContact,
} from "../controllers/crmControllers";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      console.log(`request from= ${req.originalUrl}`);
      console.log(`request method= ${req.method}`);
      next();
    }, getAllContacts)
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getOneContact)
    .put(editContact)
    .delete(deleteContact);
};
export default routes;
