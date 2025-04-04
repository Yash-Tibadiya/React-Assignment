import UsersData from "../Data/UserData.json";

const UsersList = () => {
  console.log(UsersData);

  return (
    <div className="w-full h-auto flex flex-row gap-3 justify-center m-4">
      {UsersData.map(({id, name, email, age, location}) => (
        <div key={id} className=" flex flex-col items-start bg-black mt-5 text-white p-8 rounded-2xl">
          <div className="flex flex-row gap-8 my-4">
            <h1 className="text-xl">
              <span className="text-red-500 font-bold">Id: </span>
              {id}
            </h1>
            <h2 className="text-xl">
              <span className="text-red-500 font-bold">Name: </span>
              {name}
            </h2>
          </div>
          <p>
            <span className="text-blue-500 font-bold">Email: </span>
            {email}
          </p>
          <p>
            <span className="text-blue-500 font-bold">Age: </span>
            {age}
          </p>
          <p>
            <span className="text-blue-500 font-bold">Location: </span>
            {location}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
