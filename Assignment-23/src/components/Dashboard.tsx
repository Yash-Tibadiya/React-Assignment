import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <Profile />
    </div>
  );
};

export default Dashboard;
