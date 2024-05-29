import { registerUser } from "@/api/_actions/user.action";
import { AuthForm } from "@/components/loginForm/index";
import Link from "next/link";

const registerPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-11">
      <h1>Login Pleas</h1>
      <AuthForm action={registerUser} textButton="Register" />
      <Link href={"/login"}>already have account </Link>
      
    </div>
  );
};
export default registerPage;
