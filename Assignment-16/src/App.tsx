// useMemo

import Counter from "./components/counter";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">useMemo</h1>

        <Counter />
      </div>
    </>
  );
}

export default App;
