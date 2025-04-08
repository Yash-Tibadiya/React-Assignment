const AndAndButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div>
      {isLoggedIn && (
        <button className="bg-red-500 m-2 p-2 rounded-lg">Logout</button>
      )}
    </div>
  );
};

export default AndAndButton;
