import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/context";

export interface IUser {
  isloggedin: boolean;
  name: string;
}

function App() {
  const [user] = useState<IUser>({
    isloggedin: true,
    name: "Yash",
  });

  return (
    <>
      <UserContext.Provider value={user}>
        <div className="flex flex-col h-screen">
          <div className="flex-1 bg-gray-900 text-white flex flex-col items-center pt-44">
            <h1 className="text-4xl font-bold mb-6 text-blue-500">
              useContext
            </h1>

            <div className="flex flex-row justify-center items-center">
              <Dashboard />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
