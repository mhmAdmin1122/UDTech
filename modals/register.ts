import { model, Schema, models } from "mongoose";

const RegisterSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  date: { type: Date },
});

export const Register = models.Register || model("Register", RegisterSchema);
