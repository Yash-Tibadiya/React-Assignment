import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-800 flex flex-col items-center ">
        <h1 className="text-4xl pt-32 text-white">Community Page</h1>
        <button
          onClick={handleNavigateToHome}
          className="text-2xl mt-10 bg-blue-500 p-2 flex items-center justify-center font-medium rounded-xl text-white"
        >
          Home
        </button>

        <div className="relative pt-6 w-auto">
          <ul className="font-medium flex flex-row p-2 mt-4 space-x-8">
            <li>
              <NavLink
                to=""
                className="block px-1 hover:text-blue-500 text-white text-md"
                aria-current="page"
              >
                x.com
              </NavLink>
            </li>
            <li>
              <NavLink
                to="youtube"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Youtube
              </NavLink>
            </li>
            <li>
              <NavLink
                to="github"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Github
              </NavLink>
            </li>
            <li>
              <NavLink
                to="linkedin"
                className="block px-1 hover:text-blue-500 text-white text-md"
              >
                Linkedin
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Community;
