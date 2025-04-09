// import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams<{ profileId: string }>();

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-screen bg-gray-800 flex justify-center ">
        <h1 className="text-4xl h-96 text-white pt-36">
          Profile Page {params.profileId}
        </h1>
      </div>
    </>
  );
};

export default ProfilePage;
