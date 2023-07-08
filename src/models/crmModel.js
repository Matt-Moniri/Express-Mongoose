import mongoose from "mongoose";

export const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requiered: "First Name must be entered",
  },
  lastName: {
    type: String,
    required: "Last name must be entered",
  },
  email: { type: String },
  company: { type: String },
  phone: { type: Number },
  created_date: { type: Date, default: Date.now },
});
