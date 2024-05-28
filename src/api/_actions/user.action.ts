"use server";
import {
  sessionOptions,
  SessionData,
  defualtSession,
} from "@/lib/interface/sessionData";
import {
  create,
  update,
  findOne,
  updateNewUser,
} from "../DL/controllers/user.Controllers";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { cloudinary } from "@/lib/functions/cloudinary";
import connectToDB from "../db";
import { redirect } from "next/navigation";
import { User } from "@/lib/interface/user";

export const getSession = async () => {
  const cookieHeader = cookies();
  const session = await getIronSession<SessionData>(
    cookieHeader,
    sessionOptions
  );
  if (!session.isLoggedIn) {
    session.isLoggedIn = defualtSession.isLoggedIn;
  }

  return session;
};

export const registerUser = async (formData: FormData) => {
  await connectToDB();
  const userName = formData.get("userName") as string,
    password = formData.get("password") as string;
  try {
    const newUser = await create({
      userName: userName,
      password: password,
    });
  } catch (error) {
    throw "user Alredy exist";
  }
  redirect("/");
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
    return uploadResult;
    // update("", { img: uploadResult.url });
  });
};
export const login_User = async (formData: FormData) => {
  `use server`;
  await connectToDB();

  const session = await getSession();
  const { userName, password } = Object.fromEntries(formData);
  const user: User = await findOne({ userName }, "+password");
  if (!user) throw "no user";
  if (user.password !== password) throw "password dont mach ";

  session.userId = user._id;
  session.userName = user.userName;
  session.img = user.img || null;
  session.isLoggedIn = true;
  await session.save();
  redirect("/");
};

export const updateUser = async (formData: FormData) => {
  const session = await getSession();
  const userName = formData.get("userName") as string;
  const file = formData.get("img") as File;

  if (file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    new Promise((resolve) => {
      cloudinary.uploader
        .upload_stream({ folder: "next_profiles" }, (error, uploadResult) => {
          return resolve(uploadResult);
        })
        .end(buffer);
    }).then(async (uploadResult: any) => {

      const userFromDb = await updateNewUser(session.userId, {
        userName: userName,
        img: uploadResult.url,
      });
      console.log(userFromDb);
      session.userName = userFromDb.userName;
      session.img = userFromDb.img;
      await session.save();
      console.log("finish");
      
    });
  }

  const userFromDb = await updateNewUser(session.userId, {
    userName: userName,
  });
  console.log(userFromDb);
  session.userName = userFromDb.userName;
  await session.save();

  // redirect("/");
};

export const logOut = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
