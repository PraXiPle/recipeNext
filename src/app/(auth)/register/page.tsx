import { registerUser } from "@/api/_actions/user.action";
import { LoginForm } from "@/components/loginForm/loginForm";

const registerPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-11">
      <h1>Login Pleas</h1>
      <LoginForm func={registerUser} />
    </div>
  );
};
export default registerPage;
