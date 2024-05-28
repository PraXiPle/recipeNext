import { Recipe } from "@/lib/interface/recipe";
import  recipeModal from "../models/recipe.Model";
import { FilterQuery, UpdateQuery } from "mongoose";

export const create = (recipe: Recipe) => recipeModal.create(recipe);
export const find = (data: FilterQuery<Recipe>) => recipeModal.find({...data,isActive:true});
export const findOne = (data: FilterQuery<Recipe>) => recipeModal.findOne({...data,isActive:true});
export const update = (id: string, data: UpdateQuery<Recipe>) => recipeModal.updateOne({_id:id,isActive:true},data);
export const del = (id:string) => update(id,{isActive:false});

