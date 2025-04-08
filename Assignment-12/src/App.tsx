// useEffect 2

import { useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState<string>("posts");

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">useEffect 2</h1>

        <div className="flex flex-row justify-center items-center">
          <button
            onClick={() => setResourceType("posts")}
            className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 cursor-pointer"
          >
            Posts
          </button>
          <button
            onClick={() => setResourceType("users")}
            className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 cursor-pointer"
          >
            Users
          </button>
          <button
            onClick={() => setResourceType("comments")}
            className="m-4 p-2 px-8 rounded-lg border-2 border-gray-400 bg-gray-600 cursor-pointer"
          >
            Comments
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-6 text-gray-500">
          {resourceType}
        </h1>
      </div>
    </>
  );
}

export default App;
