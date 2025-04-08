// Conditional Rendering

import AndAndButton from "./components/AndAndButton";
import IfButton from "./components/IfButton";
import TernaryButton from "./components/TernaryButton";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-gray-900 text-white flex flex-col items-center pt-44">
        <h1 className="text-2xl font-bold mb-6">Conditional Rendering</h1>
        <IfButton isLoggedIn={false} />
        <TernaryButton isLoggedIn={true} />
        <div className="border w-full border-gray-700"></div>
        <AndAndButton isLoggedIn={true} />
        <AndAndButton isLoggedIn={false} />
      </div>
    </>
  );
}

export default App;
