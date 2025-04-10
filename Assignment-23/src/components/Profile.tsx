import { useUserContext } from "../context/context";

const Profile = () => {
  const user = useUserContext();

  return (
    <div className="w-64 p-6 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Welcome, {user.name}!
      </div>
    </div>
  );
};

export default Profile;
