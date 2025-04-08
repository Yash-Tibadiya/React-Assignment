// useEffect and fetch

import { useEffect, useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState([]);

  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  // useEffect(()=>{
  //   console.log("Render :", resourceType);
  // },[resourceType])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">useEffect 2</h1>
        <h1 className="text-3xl font-bold mb-6 text-blue-500">Date: {date}</h1>

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
        <div className="flex flex-col items-start">
          {items.map((item, index) => {
            return <div key={index}>{JSON.stringify(item)}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
