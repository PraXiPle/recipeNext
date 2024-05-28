import { getSession, updateUser } from "@/api/_actions/user.action";
import "./changeProfileForm.scss";
import connectToDB from "@/api/db";
export const ChangeProfileForm = async () => {
  const session = await getSession();
  await connectToDB()
  return (
    <form className="loginForm flex flex-col gap-4" action={updateUser}>
      <input
        type="text"
        name="userName"
        required
        placeholder="userName"
        className=""
        defaultValue={session.userName}
      />
      <input type="file" name="img" placeholder="img" />
      <button>register</button>
    </form>
  );
};
