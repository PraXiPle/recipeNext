import { ChangeProfileForm } from "@/components/changeProfileForm/changeProfileForm";

const ProfilePage = async () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-11">
      <ChangeProfileForm />
    </div>
  );
};
export default ProfilePage;
