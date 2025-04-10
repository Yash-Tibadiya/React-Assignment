import { Link, useParams } from "react-router-dom";
import { userData } from "../data/users";

const UserDetails = () => {
  const paramsData = useParams();
  const userId = paramsData.userId ? parseInt(paramsData.userId, 10) : undefined;
  const user = userId ? userData.find((u) => u.id === userId) : undefined;

  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col items-center ">
      <h1 className="text-4xl pt-24 text-white">User Details Page</h1>
      <h2 className="text-2xl pt-24 text-white">
        User ID : {paramsData.userId}
      </h2>
      <h2 className="text-2xl pt-24 text-white">
        User Name : {user ? user.name : "User not found"}
      </h2>
      <Link
        to="/users"
        className="text-2xl mt-10 bg-blue-500 p-2 flex items-center justify-center font-medium rounded-xl text-white"
      >
        Users
      </Link>
    </div>
  );
};

export default UserDetails;
