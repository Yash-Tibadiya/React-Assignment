import { Link } from "react-router-dom";
import { userData } from "../data/users";

const Users = () => {
  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col items-center ">
      <h1 className="text-4xl pt-24 text-white">Users Page</h1>

      <div className="text-white p-4 flex flex-row m-6 gap-6">
        {userData.map((data) => (
          <div key={data.id}>
            <Link
              to={"/users/" + data.id}
              className="bg-gray-600 m-2 p-2 rounded-lg cursor-pointer border-2 border-gray-300"
            >
              {data.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
