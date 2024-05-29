import styles from "./style.module.scss";

interface props {
  action: (formData: FormData) => void;
  textButton: string;
}
export const AuthForm = ({ action, textButton }: props) => {
  return (
    <form action={action} className="loginForm flex flex-col gap-4">
      <input
        type="text"
        name="userName"
        required
        placeholder="userName"
        className=""
      />
      <input type="password" name="password" required placeholder="password" />
      {/* <input type="file" name="img" required placeholder="img" /> */}
      <button>{textButton}</button>
    </form>
  );
};
