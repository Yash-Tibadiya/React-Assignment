import UserCard from "./UserCard/UserCard";

interface IUserData {
  id: number;
  name: string;
  email: string;
  age: number;
  location: string;
  isVerified: boolean;
}

interface UsersProps {
  users: IUserData[];
}

const Users = ({ users }: UsersProps) => {
  return (
    <div className="flex flex-row">
      {users.map((data: IUserData) => (
        <UserCard
          key={data.id}
          id={data.id}
          name={data.name}
          email={data.email}
          age={data.age}
          location={data.location}
          isVerified={data.isVerified}
        />
      ))}
    </div>
  );
};

export default Users;
