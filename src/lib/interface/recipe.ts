import { Difficulty } from "./difficulty";
import { Products } from "./products";
import { User } from "./user";
export interface Recipe {
  _id: string;
  created_at: Date;
  images: string[];
  video?: string[];
  title: string;
  likes: string[];
  disLikes: string[];
  categories: string[];
  creator: User;
  preparation_method: string;
  difficulty: Difficulty;
  preparation_time: number;
  products: Products[];
  isActive: boolean;
}
