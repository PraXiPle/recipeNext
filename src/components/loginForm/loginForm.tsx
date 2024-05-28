import "./loginForm.scss";

export const LoginForm = ({func}) => {
  return (
    <form action={func} className="loginForm flex flex-col gap-4">
      <input type="text" name="userName" required placeholder="userName"  className=""/>
      <input type="password" name="password" required placeholder="password" />
      {/* <input type="file" name="img" required placeholder="img" /> */}
      <button>register</button>
    </form>
  );
};
