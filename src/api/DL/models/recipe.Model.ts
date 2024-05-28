import { Recipe } from "@/lib/interface/recipe";
import { Products } from "@/lib/interface/products";
import mongoose, { Schema } from "mongoose";

const productSchema: Schema<Products> = new mongoose.Schema({
  amount: { type: Number, default: 1 },
  name: { type: String, required: true },
});
const recipeSchema: Schema<Recipe> = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  images: { type: [String], default: [] },
  video: { type: [String], default: [] },
  title: { type: String, required: true },
  likes: { type: [String], default: [] },
  disLikes: { type: [String], default: [] },
  categories: [
    { type: mongoose.Types.ObjectId, ref: "category", required: true },
  ],
  creator: { type: mongoose.Types.ObjectId, ref: "user", required: true },
  difficulty: {
    type: mongoose.Types.ObjectId,
    ref: "difficulty",
    required: true,
  },
  products: { type: [productSchema], default: [] },
  preparation_method: { type: String, required: true },
  preparation_time: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});
const recipeModal = mongoose.model("user", recipeSchema);
export default recipeModal;
