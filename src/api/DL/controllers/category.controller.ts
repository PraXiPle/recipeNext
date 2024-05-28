import { Categories } from "@/lib/interface/categories";
import  categoryModel from "../models/category.Model";
import { FilterQuery, UpdateQuery } from "mongoose";

export const create = (Category: Categories) => categoryModel.create(Category);
export const find = (data: FilterQuery<Categories>) => categoryModel.find({...data,isActive:true});
export const findOne = (data: FilterQuery<Categories>) => categoryModel.findOne({...data,isActive:true});
export const update = (id: string, data: UpdateQuery<Categories>) => categoryModel.updateOne({_id:id,isActive:true},data);
export const del = (id:string) => update(id,{isActive:false});

