import { useState } from "react";
import { initialItems } from "../utils/utils";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-500">
        Counter: <span className="text-white">{count}</span>
      </h2>
      <h2 className="text-2xl font-bold mb-6 text-gray-500">
        Selected Item: <span className="text-white">{selectedItem?.id}</span>
      </h2>
      <div className="flex flex-row justify-center items-center">
        <button
          onClick={() => setCount(count + 1)}
          className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 cursor-pointer"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
