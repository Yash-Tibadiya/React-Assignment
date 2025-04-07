import Proptypes from "prop-types";

interface UserCardProps {
  id: number;
  name: string;
  email: string;
  age: number;
  location: string;
  isVerified: boolean;
}

const UserCard = ({
  id,
  name,
  email,
  age,
  location,
  isVerified,
}: UserCardProps) => {
  return (
    <div className="w-full h-auto flex flex-row gap-3 justify-center m-4">
      <div
        key={id}
        className=" flex flex-col items-start bg-black mt-5 text-white p-8 rounded-2xl"
      >
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
        <p>
          <span className="text-blue-500 font-bold">isVerified: </span>
          {isVerified ? "True" : "False"}
        </p>
      </div>
    </div>
  );
};

UserCard.prototype = {
  id: Proptypes.number,
  name: Proptypes.string,
  email: Proptypes.string,
  age: Proptypes.number,
  location: Proptypes.string,
  isVerified: Proptypes.bool,
};

export default UserCard;
