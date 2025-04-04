const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-2 border-gray-600">
      <div className="flex items-center justify-between w-full py-6 px-40 mx-auto">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" className="hover:underline">
            Flowbite
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-row items-center text-sm font-medium text-gray-400">
          <li>
            <a href="#" className="hover:underline m-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline m-4 ">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline m-4">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline m-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
