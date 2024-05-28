"use server";
import connectToDB from "../db";

export const genericDbReq = async <T>(
  callback: (...args: any[]) => Promise<T>
) => {
  try {
    console.log("api req 😘 \n", callback.name, callback.prototype);
    await connectToDB();
    const result = await callback();
    console.log("api req result 🐱 \n", { result });
    return result;
  } catch (error: any) {
    console.log("api error 🤢 \n", { error });
    throw error.response?.data?.my
      ? error.response?.data?.message || "something went wrong"
      : "something went wrong";
  }
};
