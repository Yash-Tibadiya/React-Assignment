import { useMemo, useState } from "react";
import { initialItems } from "../utils/utils";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(initialItems);

  // retun item - 29_999_998 "isSelected"
  // Befor :
  // const selectedItem = numbers.find((item) => item.isSelected);

  // use useMemo to rerender when "items" changes
  // After :
  const selectedItem = useMemo(
    () => numbers.find((item) => item.isSelected),
    [numbers]
  );

  // const selectedItem = useMemo(
  //   () => numbers.find((item) => item.id === count),
  //   [numbers, count]
  // );

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
          onClick={() => {
            setCount(count + 1);
            if (count === 10) {
              setNumbers(
                new Array(30_000_000).fill(0).map((_, i) => {
                  return {
                    id: i,
                    isSelected: i === 10_000_000,
                  };
                })
              );
            }
          }}
          className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 cursor-pointer"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
