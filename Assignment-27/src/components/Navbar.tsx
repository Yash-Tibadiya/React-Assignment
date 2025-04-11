import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 border-gray-600 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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

        <div className="w-auto">
          <ul className="font-medium flex flex-row p-2 mt-4 space-x-8">
            <li>
              <NavLink
                to="/"
                className="block px-1 hover:text-blue-500 text-white text-md"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
