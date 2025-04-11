import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b-2 border-gray-600 dark:bg-gray-900">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold text-white">
              NextGen Tech
            </span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center ml-0 md:ml-8 md:border-l-2 md:pl-8 border-gray-600 py-1">
            <NavLink
              to="/"
              className="block mr-5 font-medium px-1 hover:text-blue-500 text-white text-md"
            >
              Home
            </NavLink>
            <NavLink
              to="/createblog"
              className="block mr-5 font-medium px-1 hover:text-blue-500 text-white text-md"
            >
              Create
            </NavLink>
            <NavLink
              to="/about"
              className="block mr-5 font-medium px-1 hover:text-blue-500 text-white text-md"
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
