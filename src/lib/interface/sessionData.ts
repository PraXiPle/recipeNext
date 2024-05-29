import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  userName?: string;
  img?: string;
  isLoggedIn: boolean;
}
export const defualtSession: SessionData = {
  isLoggedIn: false,
};
export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_PASS,
  cookieName: "recipeSession",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",

  },
};
