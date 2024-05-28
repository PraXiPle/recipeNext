import { registerUser, uploadImage } from "@/api/_actions/user.action";
import "./loginForm.scss";

export const LoginForm = () => {
  return (
    <form action={uploadImage} className="loginForm flex flex-col gap-4">
      {/* <input type="text" name="userName" required placeholder="userName"  className=""/>
      <input type="password" name="password" required placeholder="password" /> */}
      <input type="file" name="img" required placeholder="img" />
      <button>register</button>
    </form>
  );
};
