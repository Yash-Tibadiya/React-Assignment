import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-2 border-gray-600">
      <div className="flex items-center justify-between w-full py-6 px-40 mx-auto">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link to="/" className="hover:underline">
            NextGen Tech
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-row items-center text-sm font-medium text-gray-400">
          <li>
            <Link to="/about" className="hover:underline m-4">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline m-4 ">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline m-4">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline m-4">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
