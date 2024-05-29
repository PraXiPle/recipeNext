import { login_User } from "@/api/_actions/user.action";
import { AuthForm } from "@/components/loginForm/index";
import Link from "next/link";



const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-11">
      <h1>Login Pleas</h1>
      <AuthForm action={login_User} textButton="Login" />
      <button className="btn-red">dasdasd</button>
      <Link href={"/register"}>new user </Link>
    </div>
  );
};
export default LoginPage;
  