const AndAndButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div>
      {isLoggedIn && <h1 className="text-2xl font-bold mb-6 mt-6">Hello User!</h1>}
    </div>
  );
};

export default AndAndButton;
