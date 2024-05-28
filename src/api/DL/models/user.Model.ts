import { User } from "@/lib/interface/user";
import mongoose, { Schema } from "mongoose";

const userSchema: Schema<User> = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  password: { type: String, required: true, select: false },
  isActive: { type: Boolean, default: true },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
