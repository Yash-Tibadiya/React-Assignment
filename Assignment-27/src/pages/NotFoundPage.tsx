import { Link } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-gray-100 p-4">
      <div className="text-center bg-gray-900 p-8 sm:p-12 rounded-xl shadow-lg border border-gray-700 max-w-lg w-full">
        <ExclamationTriangleIcon className="mx-auto h-16 w-16 text-yellow-400 mb-6" />

        <h1 className="text-8xl sm:text-9xl font-extrabold text-indigo-400 tracking-tight mb-2">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-base sm:text-lg text-gray-300 mb-8">
          It looks like the page you're searching for is lost in the digital
          wilderness. Don't worry, we can guide you back home.
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium text-base sm:text-lg rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
