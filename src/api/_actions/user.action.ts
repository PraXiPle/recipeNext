"use server";
import { sessionOptions, SessionData } from "@/lib/interface/sessionData";
import { create, update, findOne } from "../DL/controllers/user.Controllers";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { cloudinary } from "@/lib/functions/cloudinary";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
};

export const registerUser = async (formData: FormData) => {
  try {
    // console.log({
    //   userName: formData.get("userName") as string,
    //   password: formData.get("passw") as string,
    // });

    const newUser = create({
      userName: formData.get("userName") as string,
      password: formData.get("password") as string,
    });
    return newUser;
  } catch (error) {
    console.log(error);
    throw "error user alredy exist ";
  }
};
export const uploadImage = async (formData: FormData) => {
  const file = formData.get("img") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  new Promise((resolve) => {
    cloudinary.uploader
      .upload_stream({ folder: "next_profiles" }, (error, uploadResult) => {
        return resolve(uploadResult);
      })
      .end(buffer);
  }).then((uploadResult: any) => {
    console.log(uploadResult);

    // update("", { img: uploadResult.url });
  });
};
export const login_User = async (formData: FormData) => {
  const { userName, password } = Object.fromEntries(formData);

  // const userName = formData.get("userName") as string;
  // const password = formData.get("userName") as string;
  const user = await findOne({ userName }, "+password");
  if (!user) throw "no user";
  if (user.password !== password) throw "password dont mach ";
  console.log(user);
  return user;
};

export const updateUser = async (id: string, formData: FormData) => {
  return update(id, {
    userName: formData.get("userName") as string,
    // password: formData.get("userName") as string,
  });
};
