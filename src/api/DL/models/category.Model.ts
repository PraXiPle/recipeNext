import { Categories } from "@/lib/interface/categories";
import mongoose, { Schema } from "mongoose";

const categorySchema: Schema<Categories> = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});
const categoryModel = mongoose.model("category", categorySchema);
export default categoryModel;
