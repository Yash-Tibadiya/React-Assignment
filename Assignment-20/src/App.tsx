import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages.tsx/Home";
import About from "./pages.tsx/About";
import Navbar from "./components/Navbar";
// import NotFoundPage from "./pages.tsx/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/*" element={<NotFoundPage />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
