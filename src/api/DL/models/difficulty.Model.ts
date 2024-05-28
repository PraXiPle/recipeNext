import { Difficulty } from "@/lib/interface/difficulty";
import mongoose, { Schema } from "mongoose";

const difficultySchema: Schema<Difficulty> = new mongoose.Schema({
  difficulty: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  name: { type: String, required: true },
});
const difficultyModel = mongoose.model("difficulty", difficultySchema);
export default difficultyModel;
