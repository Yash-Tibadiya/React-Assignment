import { useUserContext } from "../context/context";

const Sidebar = () => {
  const user = useUserContext();

  return (
    <div className="w-64 p-6 bg-white dark:bg-gray-800 shadow-md">
      <div className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-100">
        {user.name}
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        Loggedin Status:{" "}
        <span className="text-blue-500 font-medium">
          {user.isloggedin ? "True" : "False"}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
