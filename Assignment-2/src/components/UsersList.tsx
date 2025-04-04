import UsersData from "../Data/UserData.json";

const UsersList = () => {
  console.log(UsersData);
  return (
    <div className="w-full h-auto flex flex-row gap-3 justify-center m-4">
      {UsersData.map((data) => (
        <div className=" flex flex-col items-start bg-black mt-5 text-white p-8 rounded-2xl">
          <div className="flex flex-row gap-8 my-4">
            <h1 className="text-xl">
              <span className="text-red-500 font-bold">Id: </span>
              {data.id}
            </h1>
            <h2 className="text-xl">
              <span className="text-red-500 font-bold">Name: </span>
              {data.name}
            </h2>
          </div>
          <p>
            <span className="text-blue-500 font-bold">Email: </span>
            {data.email}
          </p>
          <p>
            <span className="text-blue-500 font-bold">Age: </span>
            {data.age}
          </p>
          <p>
            <span className="text-blue-500 font-bold">Location: </span>
            {data.location}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
