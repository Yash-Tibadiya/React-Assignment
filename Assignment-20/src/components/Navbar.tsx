import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold text-white">Flowbite</span>
        </Link>

        <div className="w-auto">
          <ul className="font-medium flex flex-row p-2 mt-4 space-x-8">
            <li>
              <Link
                to="/"
                className="block px-1 hover:text-blue-500 text-white text-md"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/in/map"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Map
              </Link>
            </li>
            <li>
              <Link
                to="/in/community"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
