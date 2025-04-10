import { useContext } from "react";
import ButtonCounter from "./ButtonCounter";
import { counterContext } from "../context/context";

const Button = () => {
  const { setCount } = useContext(counterContext);

  return (
    <div className="w-auto text-white">
      <div className="flex flex-row justify-center items-center">
        <button
          className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600"
          onClick={() => setCount((count) => count + 1)}
        >
          <ButtonCounter />
        </button>
      </div>
    </div>
  );
};

export default Button;
