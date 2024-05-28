import { User } from "@/lib/interface/user";
import { create, find, findOne } from "../DL/controllers/user.Controllers";
import { FilterQuery } from "mongoose";

export const getUsers = async (data: FilterQuery<User> = {}) => {
  return find(data);
};
export const getOneUser = async (data: FilterQuery<User> = {}) => {
  return findOne(data);
};
export const findUsers = async (data: FilterQuery<User> = {}) => {
  return find(data);
};

