import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-gray-800 flex justify-center ">
        <h1 className="text-4xl text-white pt-36">Hello 👋</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
