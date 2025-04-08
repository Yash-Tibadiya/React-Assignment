const TernaryButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const logout = (
    <button className="bg-red-500 m-2 p-2 rounded-lg">Logout</button>
  );

  const login = (
    <button className="bg-blue-500 m-2 p-2 rounded-lg">Login</button>
  );

  return <div>{isLoggedIn ? logout : login}</div>;
};

export default TernaryButton;
