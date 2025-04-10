import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b-2 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold text-white">Flowbite</span>
        </a>

        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
