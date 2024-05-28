import { User } from "@/lib/interface/user";
import userModel from "../models/user.Model";
import { FilterQuery, UpdateQuery, ProjectionType } from "mongoose";

export const create = (user: User) => userModel.create(user);
export const find = (data: FilterQuery<User>) =>
  userModel.find({ ...data, isActive: true });
export const findOne = (
  data: FilterQuery<User>,
  projection?: ProjectionType<User>
) => userModel.findOne({ ...data, isActive: true }, projection);
export const update = (id: string, data: UpdateQuery<User>) =>
  userModel.updateOne({ _id: id, isActive: true }, data);
export const del = (id: string) => update(id, { isActive: false });
