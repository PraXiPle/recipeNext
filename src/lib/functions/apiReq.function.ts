"use server";
import connectDB from "@/api/db";

export const apiReq = async <T>(callback: (...args: any[]) => Promise<T>) => {
  try {
    console.log("api req 😘 \n", callback.name, callback.prototype);
    await connectDB();
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
