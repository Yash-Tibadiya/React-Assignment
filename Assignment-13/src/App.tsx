import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">Axios</h1>

        <div className="m-2 p-2">
          {data.map((item, index) => (
            <li key={index} className="m-1">Name : {item.name}</li>
          ))}
        </div>

        <div className="flex flex-col items-start space-y-4 p-4 bg-gray-100 rounded-lg shadow-lg">
          {data.map((item, index) => {
            return (
              <div key={index} className="p-4 bg-white rounded-md shadow-md">
                <pre className="text-sm text-gray-700">
                  {JSON.stringify(item, null, 2)}
                </pre>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
