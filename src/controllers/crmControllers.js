import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
const ContactModel = mongoose.model("Contact", ContactSchema);
export const addNewContact = (req, res) => {
  let newContact = new ContactModel(req.body);
  newContact
    .save()
    .then((addedContact) => {
      res.json(addedContact);
    })
    .catch((error) => {
      res.send(error);
    });
};

export const getAllContacts = (req, res) => {
  let allContacts = ContactModel.find()
    .then((resultOfFind) => {
      res.send(resultOfFind);
    })
    .catch((error) => res.send(error));
};
export const getOneContact = (req, res) => {
  ContactModel.findById(req.params.contactId)
    .then((found) => {
      res.send(found);
    })
    .catch((error) => {
      res.send(error);
    });
};
export const editContact = (req, res) => {
  ContactModel.findOneAndUpdate({ _id: req.params.contactId }, req.body, {
    new: true,
  })
    .then((updatedContact) => {
      res.send(updatedContact);
    })
    .catch((error) => {
      res.send(error);
    });
};

export const deleteContact = (req, res) => {
  ContactModel.deleteOne({ _id: req.params.contactId })
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
};
