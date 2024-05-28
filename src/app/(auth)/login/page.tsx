import { login_User } from "@/api/_actions/user.action";
import { LoginForm } from "@/components/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-11">
      <h1>Login Pleas</h1>
      <LoginForm func={login_User}/>

    </div>
  );
};
export default LoginPage;
