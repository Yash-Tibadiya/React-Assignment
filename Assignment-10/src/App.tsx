// Todo List app

import AddTodos from "./components/AddTodos";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">Todo App</h1>
        <AddTodos />
      </div>
    </>
  );
}

export default App;
