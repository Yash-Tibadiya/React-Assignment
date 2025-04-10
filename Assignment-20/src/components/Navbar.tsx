import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold text-white">Flowbite</span>
        </NavLink>

        <div className="w-auto">
          <ul className="font-medium flex flex-row p-2 mt-4 space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block px-1 text-blue-500 text-md"
                    : "block px-1 text-white text-md hover:text-blue-500"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block px-1 text-blue-500 text-md"
                    : "block px-1 text-white text-md hover:text-blue-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "block px-1 text-blue-500 text-md"
                    : "block px-1 text-white text-md hover:text-blue-500"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users/list"
                className={({ isActive }) =>
                  isActive
                    ? "block px-1 text-blue-500 text-md"
                    : "block px-1 text-white text-md hover:text-blue-500"
                }
              >
                List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/in/map"
                className={({ isActive }) =>
                  isActive
                    ? "block px-1 text-blue-500 text-md"
                    : "block px-1 text-white text-md hover:text-blue-500"
                }
              >
                Map
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/in/community"
                className={({ isActive }) =>
                  isActive
                    ? "block px-1 text-blue-500 text-md"
                    : "block px-1 text-white text-md hover:text-blue-500"
                }
              >
                Community
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
