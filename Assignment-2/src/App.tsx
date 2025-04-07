// Map : render lists of data dynamically

import "./App.css";

// import NumberList from "./components/NumberList";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex justify-center flex-col items-center">
        <h1 className="text-4xl text-white">Hello 👋</h1>

        {/* <NumberList /> */}
        <UsersList />
      </div>
    </>
  );
}

export default App;
