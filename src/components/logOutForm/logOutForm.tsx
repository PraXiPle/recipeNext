import { logOut } from "@/api/_actions/user.action";

const LogOutForm = () => {
  return (
    <form action={logOut}>
      <button>logOut</button>
    </form>
  );
};
export default LogOutForm;
