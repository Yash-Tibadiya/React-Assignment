import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      <Navbar />

      <div className="w-full h-screen bg-gray-800 flex items-center flex-col">
        <h1 className="text-4xl h-72 text-white pt-36">Profiles Page</h1>

        <div className="flex flex-row gap-4">
          {profiles.map((profile) => (
            <NavLink
              key={profile}
              to={`/profiles/${profile}`}
              className={({ isActive }) => {
                return isActive
                  ? "text-blue-400 font-medium text-lg p-3 m-2 rounded-lg border-2 border-gray-500 bg-gray-700 h-12 flex items-center justify-center"
                  : "text-white font-medium text-lg p-3 m-2 rounded-lg border-2 border-gray-500 bg-gray-700 h-12 flex items-center justify-center";
              }}
            >
              Profile : {profile}
            </NavLink>
          ))}
        </div>

        {/* display profil page as children */}
        <Outlet />
      </div>
    </>
  );
};

export default ProfilesPage;
