// React Router

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import X from "./pages/Community/X";
import Youtube from "./pages/Community/Youtube";
import Github from "./pages/Community/Github";
import Linkedin from "./pages/Community/Linkedin";
import Map from "./pages/Map";
import Users from "./pages/Users";
import NavbarLayout from "./pages/NavbarLayout";
import UserDetails from "./pages/UserDetails";
// import Navbar from "./components/Navbar";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/users" element={<Users />} /> */}
          <Route path="/users/list?" element={<Users />} />
          {/* <Route path="/users/:userId" element={<UserDetails />} /> */}
          <Route path="/users/:userId/:userName?" element={<UserDetails />} />
        </Route>

        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}

        <Route path="in">
          <Route element={<NavbarLayout />}>
            <Route path="map" element={<Map />} />
          </Route>
          <Route path="community" element={<Community />}>
            <Route index element={<X />} />
            <Route path="youtube" element={<Youtube />} />
            <Route path="github" element={<Github />} />
            <Route path="linkedin" element={<Linkedin />} />
          </Route>
        </Route>

        {/* <Route path="/*" element={<NotFoundPage />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
