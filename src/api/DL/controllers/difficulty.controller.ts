import { Difficulty } from "@/lib/interface/difficulty";
import  difficultyModel from "../models/difficulty.Model";
import { FilterQuery, UpdateQuery } from "mongoose";

export const create = (difficulty: Difficulty) => difficultyModel.create(difficulty);
export const find = (data: FilterQuery<Difficulty>) => difficultyModel.find({...data,isActive:true});
export const findOne = (data: FilterQuery<Difficulty>) => difficultyModel.findOne({...data,isActive:true});
export const update = (id: string, data: UpdateQuery<Difficulty>) => difficultyModel.updateOne({_id:id,isActive:true},data);
export const del = (id:string) => update(id,{isActive:false});

