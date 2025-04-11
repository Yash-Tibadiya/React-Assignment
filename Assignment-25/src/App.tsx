import CommentsPage from "./pages/CommentsPage";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">Custom Hooks</h1>

        <CommentsPage />
      </div>
    </>
  );
}

export default App;
