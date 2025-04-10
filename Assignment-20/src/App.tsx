import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import X from "./pages/Community/X";
import Youtube from "./pages/Community/Youtube";
import Github from "./pages/Community/Github";
import Linkedin from "./pages/Community/Linkedin";
import NavbarLayout from "./pages/NavbarLayout";
// import Navbar from "./components/Navbar";
// import NotFoundPage from "./pages.tsx/NotFoundPage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}

        <Route path="/community" element={<Community />}>
          <Route path="x" element={<X />} />
          <Route path="youtube" element={<Youtube />} />
          <Route path="github" element={<Github />} />
          <Route path="linkedin" element={<Linkedin />} />
        </Route>

        {/* <Route path="/*" element={<NotFoundPage />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
