const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold text-white">Flowbite</span>
        </a>

        <div className="w-auto">
          <ul className="font-medium flex flex-row p-2 mt-4 space-x-8">
            <li>
              <a
                href="/home"
                className="block px-1 hover:text-blue-500 text-white text-md"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
