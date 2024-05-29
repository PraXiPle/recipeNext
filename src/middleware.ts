import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./api/_actions/user.action";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import {
  SessionData,
  defualtSession,
  sessionOptions,
} from "./lib/interface/sessionData";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const cookieHeader = cookies();
  const session = await getIronSession<SessionData>(
    cookieHeader,
    sessionOptions
  );

  if (!session.isLoggedIn) {
    session.isLoggedIn = defualtSession.isLoggedIn;
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return res;
};

export const config = {
  matcher: ["/profile", "/adminDashboard"],
};
