import { useState, useEffect } from "react"; // Added useState and useEffect
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { IBlogEntry } from "./CreateBlog";

const Home = () => {
  const [blogEntries, setBlogEntries] = useState<IBlogEntry[]>([]); // State for blog entries

  useEffect(() => {
    const storedEntries = JSON.parse(
      localStorage.getItem("blogEntries") || "[]"
    );
    if (Array.isArray(storedEntries)) {
      setBlogEntries(storedEntries);
    } else {
      console.error("Stored blog entries are not an array:", storedEntries);
      setBlogEntries([]);
    }
  }, []);

  return (
    <div className="bg-gray-900 h-auto text-white flex flex-col items-center">
      <div className="w-full px-2 py-20 bg-gray-900 md:px-0">
        <div className="container items-center max-w-8xl mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="space-y-6 sm:max-w-md lg:max-w-lg">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl">
                  <span className="block xl:inline">
                    Stay Ahead with the Latest in{" "}
                  </span>
                  <span className="block text-indigo-600 xl:inline">
                    Technology Trends
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl">
                  Get insights into cutting-edge trends, innovations, and tech
                  news from around the globe!
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/countries"
                    className="flex items-center justify-center px-6 py-3 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Create Your
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-md shadow-xl">
                <img
                  src="hero.jpg"
                  alt="Explore countries"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-32 w-full px-4 md:px-0">
              <h2 className="text-3xl font-bold text-center mb-12">
                All Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {" "}
                {blogEntries.length > 0 ? (
                  blogEntries.map((entry) => (
                    <BlogCard
                      key={entry.id}
                      id={entry.id}
                      imageUrl={entry.imageUrl}
                      title={entry.title}
                      content={entry.content}
                    />
                  ))
                ) : (
                  <p className="text-center col-span-full text-gray-400">
                    No blog posts yet. Create one!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
