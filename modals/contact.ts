import { model, Schema, models } from "mongoose";

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date },
});

export const Contact = models.Contact || model("Contact", ContactSchema);
