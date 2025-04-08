const IfButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  let btn;

  if (isLoggedIn) {
    btn = <button className="bg-red-500 m-2 p-2 rounded-lg">Logout</button>;
  } else {
    btn = <button className="bg-blue-500 m-2 p-2 rounded-lg">Login</button>;
  }

  return <div>{btn}</div>;
};

export default IfButton;
