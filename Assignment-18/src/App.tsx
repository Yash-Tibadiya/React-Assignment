// Search

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">Search</h1>
        <div className="flex flex-col bg-gray-700 w-1/2 rounded-lg ">
          <h1 className="flex text-2xl font-bold p-2 m-2 mt-5 justify-center items-center">
            Add & Search Items
          </h1>

          <div className="flex flex-col justify-start">
            <div className="ml-32 items-center mb-2">
              <label htmlFor="task" className="font-bold text-2xl">
                New Item :{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Todo or Task"
                className="p-2 m-4 ml-10 border-2 rounded-lg w-1/2"
              />
              <button className="bg-gray-900 p-2 px-5 rounded-lg">Add</button>
            </div>

            <div className="ml-32 items-center mb-5">
              <label htmlFor="task" className="font-bold text-2xl">
                Search Item :{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Todo or Task"
                className="p-2 m-4 border-2 rounded-lg w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
