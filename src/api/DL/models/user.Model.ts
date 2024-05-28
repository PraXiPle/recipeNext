import { User } from "@/lib/interface/user";
import mongoose, { Schema, Document, model, models } from "mongoose";

const userSchema: Schema<User> = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: { type: String, required: true, unique: true },
  img: { type: String },
  password: { type: String, required: true, select: false },
  isActive: { type: Boolean, default: true },
});

const userModel = mongoose.models.user || model("user", userSchema);
export default userModel;
