const Button = ({ count }: { count: number }) => {
  return (
    <button className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600">
      count is {count}
    </button>
  );
};

export default Button;
