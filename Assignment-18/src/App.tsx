// Search

import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = inputRef.current?.value?.trim();
    if (!value) return;

    setItems((prev) => {
      return [...prev, value];
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">Search</h1>
        <div className="flex flex-col bg-gray-700 w-1/2 rounded-lg ">
          <h1 className="flex text-2xl font-bold p-2 m-2 mt-5 justify-center items-center">
            Add & Search Items
          </h1>

          {/* Add New Item */}
          <div className="flex flex-col justify-start">
            <div className="ml-32 items-center mb-2">
              <form onSubmit={handleAddItem}>
                <label htmlFor="task" className="font-bold text-2xl">
                  New Item :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter New Item"
                  className="p-2 m-4 ml-10 border-2 rounded-lg w-1/2"
                  ref={inputRef}
                />
                <button
                  type="submit"
                  className="bg-gray-900 p-2 px-5 rounded-lg"
                >
                  Add
                </button>
              </form>
            </div>

            {/* Search Items */}
            <div className="ml-32 items-center mb-5">
              <label htmlFor="task" className="font-bold text-2xl">
                Search Item :{" "}
              </label>
              <input
                type="search"
                placeholder="Enter item you want to search"
                className="p-2 m-4 border-2 rounded-lg w-1/2"
              />
            </div>
          </div>

          {/* show Items */}
          <h1 className="flex text-2xl font-bold p-2 m-2 mt-5 justify-center items-center text-blue-400">
            All Items
          </h1>
          <ul className="flex flex-col justify-center m-2 mx-6 px-6">
            {items.map((item: string, index: number) => (
              <li
                className="bg-gray-800 rounded-xl text-lg font-medium m-2 p-4 flex flex-row justify-between"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
